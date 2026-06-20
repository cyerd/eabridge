import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, ShieldCheck, ClipboardCheck, Network } from 'lucide-react'

export const metadata: Metadata = {
  title: "Services | East Africa Bridge Group",
  description: "Explore our procurement, sourcing, verification, and market access services in East Africa.",
}

const services = [
  {
    title: "Procurement & Sourcing",
    icon: Search,
    items: [
      "Supplier identification",
      "Origin sourcing",
      "Market intelligence",
      "Supplier screening"
    ]
  },
  {
    title: "Supplier Verification",
    icon: ShieldCheck,
    items: [
      "Supplier onboarding",
      "Capacity assessment",
      "Quality verification",
      "Export readiness review"
    ]
  },
  {
    title: "Transaction Coordination",
    icon: ClipboardCheck,
    items: [
      "Sample management",
      "Inspection coordination",
      "Documentation support",
      "Shipment monitoring"
    ]
  },
  {
    title: "Market Access",
    icon: Network,
    items: [
      "Buyer representation",
      "Supplier representation",
      "Trade opportunity matching"
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-brand-primary mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive support across the entire procurement lifecycle, ensuring quality and reliability at every step.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service, idx) => (
          <Card key={idx} className="overflow-hidden border-slate-200">
            <CardHeader className="bg-slate-50 border-b flex flex-row items-center space-x-4">
              <div className="p-2 bg-brand-primary rounded-lg text-brand-secondary">
                <service.icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-brand-primary">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary mt-2 mr-3 shrink-0"></span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
