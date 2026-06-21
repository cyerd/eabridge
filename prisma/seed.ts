import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // =============================
  // CREATE SUPER ADMIN
  // =============================
  const hashedPassword = await bcrypt.hash("Admin@1234", 10);

  const superAdmin = await prisma.user.upsert({
    where: { email: "admin@eabridgegroup.com" },
    update: {},
    create: {
      email: "admin@eabridgegroup.com",
      password: hashedPassword,
      role: "super-admin",
      name: "Super Admin",
    },
  });

  console.log("✅ Super Admin created:");
  console.log("Email: admin@eabridgegroup.com");
  console.log("Password: Admin@1234");

  // =============================
  // CREATE PAGES
  // =============================

  const pages = [
    {
      title: "Home",
      slug: "home",
      content: {
        hero: {
          headline: "Connecting Global Buyers with Trusted East African Supply",
          subheadline:
            "East Africa Bridge Group is a procurement, sourcing, and market access platform connecting international buyers with qualified suppliers across East Africa.",
        },
      },
    },
    {
      title: "About",
      slug: "about",
      content: {
        description:
          "East Africa Bridge Group connects global buyers with trusted East African suppliers.",
      },
    },
    {
      title: "Services",
      slug: "services",
      content: {},
    },
    {
      title: "Commodities",
      slug: "commodities",
      content: {},
    },
    {
      title: "Markets",
      slug: "markets",
      content: {},
    },
    {
      title: "Contact",
      slug: "contact",
      content: {},
    },
  ];

  for (const page of pages) {
    await prisma.page.upsert({
      where: { slug: page.slug },
      update: {},
      create: page,
    });
  }

  console.log("✅ Pages seeded");

  // =============================
  // CREATE COMMODITIES
  // =============================
  const commodities = [
    "Sesame Seeds",
    "Green Grams",
    "Pigeon Peas",
    "Kidney Beans",
  ];

  for (const name of commodities) {
    await prisma.commodity.upsert({
      where: { name },
      update: {},
      create: {
        name,
        description: `${name} sourced from East Africa.`,
      },
    });
  }

  console.log("✅ Commodities seeded");

  // =============================
  // CREATE GLOBAL SETTINGS
  // =============================

  await prisma.globalSettings.upsert({
    where: { id: "global" },
    update: {},
    create: {
      id: "global",
      siteName: "East Africa Bridge Group",
      tagline: "Procurement, Sourcing & Market Access Platform",
      email: "procurement@eabridgegroup.com",
    },
  });

  console.log("✅ Global settings seeded");

  // =============================
  // CREATE SAMPLE NOTIFICATION
  // =============================
  await prisma.notification.create({
    data: {
      title: "Welcome",
      message: "System initialized successfully",
    },
  });

  console.log("✅ Notifications seeded");

  console.log("🎉 Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
