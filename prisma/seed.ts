import { loadEnvConfig } from '@next/env';
const projectDir = process.cwd();
loadEnvConfig(projectDir);

import { getPayload } from 'payload';
import config from '../src/payload.config';
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

// Initialize the pg Pool and the Prisma 7 Driver Adapter for non-Payload models if any
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding database via Payload Local API...");

  const payload = await getPayload({ config });

  // =============================
  // CREATE SUPER ADMIN
  // =============================
  const adminEmail = "admin@eabridgegroup.com";
  const existingAdmin = await payload.find({
    collection: 'users',
    where: {
      email: {
        equals: adminEmail,
      },
    },
  });

  if (existingAdmin.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: {
        email: adminEmail,
        password: "Admin@1234",
        role: "super-admin",
        name: "Super Admin",
        isVerified: true,
      },
    });
    console.log("✅ Super Admin created: admin@eabridgegroup.com / Admin@1234");
  } else {
    console.log("ℹ️ Super Admin already exists.");
  }

  // =============================
  // CREATE CATEGORIES
  // =============================
  const categories = ["Grains", "Oilseeds", "Pulses", "Spices"];

  for (const catName of categories) {
    const existing = await payload.find({
      collection: 'categories',
      where: { name: { equals: catName } },
    });

    if (existing.totalDocs === 0) {
      await payload.create({
        collection: 'categories',
        data: { name: catName },
      });
      console.log(`✅ Category created: ${catName}`);
    } else {
      console.log(`ℹ️ Category already exists: ${catName}`);
    }
  }

  // =============================
  // CREATE COMMODITIES
  // =============================
  const commodities = [
    { name: "Sesame Seeds", description: "High-quality sesame seeds sourced from East Africa." },
    { name: "Green Grams", description: "Premium green grams for international markets." },
    { name: "Pigeon Peas", description: "Export-grade pigeon peas." },
    { name: "Kidney Beans", description: "Nutritious kidney beans from local farmers." },
  ];

  for (const item of commodities) {
    const existing = await payload.find({
      collection: 'commodities',
      where: { name: { equals: item.name } },
    });

    if (existing.totalDocs === 0) {
      await payload.create({
        collection: 'commodities',
        data: item,
      });
      console.log(`✅ Commodity created: ${item.name}`);
    } else {
      console.log(`ℹ️ Commodity already exists: ${item.name}`);
    }
  }

  // =============================
  // CREATE EMAIL SETTINGS (GLOBAL)
  // =============================
  await payload.updateGlobal({
    slug: 'email-settings',
    data: {
      smtpHost: "smtp.example.com",
      smtpPort: 587,
      smtpUser: "procurement@eabridgegroup.com",
      smtpPassword: "password123",
      fromEmail: "noreply@eabridgegroup.com",
      fromName: "East Africa Bridge Group",
      encryption: "tls",
      testEmailAddress: adminEmail,
    },
  });
  console.log("✅ Email settings seeded.");

  // =============================
  // SEED PAGES (VIA PRISMA SINCE THEY ARE NOT MANAGED BY PAYLOAD IN CONFIG)
  // =============================
  const pages = [
    { title: "Home", slug: "home", content: { hero: { headline: "Connecting Global Buyers..." } } },
    { title: "About", slug: "about", content: { description: "About us..." } },
  ];

  for (const page of pages) {
    await prisma.page.upsert({
      where: { slug: page.slug },
      update: {},
      create: page,
    });
  }
  console.log("✅ Pages seeded via Prisma.");

  console.log("🎉 Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
