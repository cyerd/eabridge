import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, ShieldCheck, Truck, BarChart3, Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-brand-primary py-20 text-white md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Connecting Global Buyers with Trusted East African Supply
            </h1>
            <p className="mb-8 text-lg text-slate-300 md:text-xl leading-relaxed">
              East Africa Bridge Group is a procurement, sourcing, and market access platform connecting international buyers with qualified suppliers across East Africa.
            </p>
            <p className="mb-10 text-lg text-slate-300 md:text-xl leading-relaxed">
              We help buyers identify reliable suppliers, verify quality, coordinate transactions, and execute shipments across key agricultural commodity value chains.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90 border-none font-bold">
                Request Sourcing Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-primary">What We Do</h2>
          <div className="mt-2 h-1 w-20 bg-brand-secondary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {[
            { title: "Identify qualified suppliers", icon: ShieldCheck },
            { title: "Access new sourcing origins", icon: Globe },
            { title: "Verify product quality", icon: CheckCircle2 },
            { title: "Monitor shipment execution", icon: Truck },
            { title: "Reduce procurement risk", icon: BarChart3 },
          ].map((item, idx) => (
            <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-col items-center text-center pb-2">
                <item.icon className="h-10 w-10 text-brand-secondary mb-4" />
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Focus Commodities */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-primary mb-12">Focus Commodities</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {["Sesame Seeds", "Green Grams (Mung Beans)", "Pigeon Peas", "Kidney Beans"].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-center justify-center font-semibold text-brand-primary">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origins and Markets */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-brand-primary mb-6 border-l-4 border-brand-secondary pl-4">Key Origins</h2>
            <ul className="space-y-4">
              {["Tanzania", "Uganda", "Kenya"].map((item) => (
                <li key={item} className="flex items-center text-lg">
                  <span className="h-2 w-2 rounded-full bg-brand-secondary mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-primary mb-6 border-l-4 border-brand-secondary pl-4">Key Markets</h2>
            <ul className="space-y-4">
              {["United Arab Emirates", "Saudi Arabia", "Qatar", "China"].map((item) => (
                <li key={item} className="flex items-center text-lg">
                  <span className="h-2 w-2 rounded-full bg-brand-secondary mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-primary">Our Approach</h2>
            <div className="mt-2 h-1 w-20 bg-brand-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-brand-primary">Demand Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Buyer qualification and mandate management</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-brand-primary">Supply Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Supplier verification and performance monitoring</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-brand-primary">Transaction Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Inspection, documentation, shipment coordination, and payment support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 text-center">
        <div className="bg-brand-primary rounded-2xl p-12 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Looking for reliable sourcing support in East Africa?</h2>
          <p className="text-xl text-slate-300 mb-8 font-medium">Contact East Africa Bridge Group today</p>
          <Link href="/contact">
            <Button size="lg" className="bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90 border-none px-12 py-6 text-lg font-bold">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
