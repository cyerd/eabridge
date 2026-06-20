import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About | East Africa Bridge Group",
  description: "Learn about East Africa Bridge Group, your trusted sourcing partner in Tanzania, Uganda, and Kenya.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-brand-primary mb-8 border-b-2 border-brand-secondary pb-4">
          About East Africa Bridge Group
        </h1>

        <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
          <p>
            East Africa Bridge Group is a dedicated procurement and sourcing platform designed to bridge the gap between international buyers and the rich agricultural potential of East Africa.
          </p>
          <p>
            Our core focus is on identifying and managing verified suppliers who can consistently meet the quality and volume requirements of global markets. We maintain a strong, local presence in <strong>Tanzania, Uganda, and Kenya</strong>, allowing us to provide boots-on-the-ground intelligence and oversight that remote buyers often lack.
          </p>
          <p>
            It is important to note that East Africa Bridge Group is <strong>not a trader</strong>. We do not buy and sell commodities for our own account. Instead, we act as a <strong>sourcing partner</strong> and buyer representative. Our goal is to create transparent, sustainable, and efficient supply chains where both buyers and suppliers can thrive through reliable execution.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
            <h2 className="text-2xl font-bold text-brand-primary mb-6">Core Principles</h2>
            <ul className="space-y-4">
              {[
                { title: "Trust", desc: "Building long-term relationships through transparency." },
                { title: "Verification", desc: "Rigorous vetting of every supplier and product." },
                { title: "Execution", desc: "Focus on getting the shipment from origin to destination." },
                { title: "Market Access", desc: "Opening doors for East African supply to global buyers." }
              ].map((item) => (
                <li key={item.title}>
                  <h3 className="font-bold text-brand-primary">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-primary text-white p-8 rounded-xl shadow-lg flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6 text-brand-secondary">Our Vision</h2>
            <p className="text-xl italic leading-relaxed text-slate-200">
              "To become the trusted sourcing office for international buyers seeking opportunities across East Africa."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
