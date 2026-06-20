import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Globe2 } from 'lucide-react'

export const metadata: Metadata = {
  title: "Markets | East Africa Bridge Group",
  description: "Global markets we serve and our strong presence across East Africa.",
}

export default function MarketsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-brand-primary mb-4 flex items-center justify-center">
          <Globe2 className="mr-3 h-10 w-10 text-brand-secondary" />
          Markets We Serve
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          East Africa Bridge Group facilitates trade between East African producers and international buyers, with a strong focus on high-growth global markets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="bg-slate-50">
          <CardHeader>
            <CardTitle className="text-brand-primary">GCC Markets</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="font-medium text-slate-700">United Arab Emirates (UAE)</li>
              <li className="font-medium text-slate-700">Saudi Arabia</li>
              <li className="font-medium text-slate-700">Qatar</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Strategic access to major food security hubs in the Gulf Cooperation Council region.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-50">
          <CardHeader>
            <CardTitle className="text-brand-primary">Asia</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="font-medium text-slate-700">China</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Serving the vast demand for sesame seeds and other agricultural products in the Chinese market.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-50">
          <CardHeader>
            <CardTitle className="text-brand-primary">East Africa (Origins)</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="font-medium text-slate-700">Tanzania</li>
              <li className="font-medium text-slate-700">Uganda</li>
              <li className="font-medium text-slate-700">Kenya</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Our core sourcing territory with boots-on-the-ground presence and verified supplier networks.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto bg-brand-primary text-white rounded-2xl p-10 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 border-b border-white/20 pb-4">Bridging Continents</h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-6">
          Our platform provides international buyers with direct access to East African origins while ensuring local suppliers are connected to reliable global demand.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed">
          We leverage our deep understanding of both origin-level complexities and international market requirements to ensure smooth, professional, and risk-mitigated trade transactions.
        </p>
      </div>
    </div>
  )
}
