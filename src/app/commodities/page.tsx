import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: "Commodities | East Africa Bridge Group",
  description: "Explore our key commodities: Sesame Seeds, Green Grams, Pigeon Peas, and Kidney Beans.",
}

const commodities = [
  {
    name: "Sesame Seeds",
    origins: "Tanzania, Uganda",
    grades: "Natural White, Mixed, Brown",
    packaging: "50kg PP Bags",
    markets: "China, UAE, Saudi Arabia"
  },
  {
    name: "Green Grams (Mung Beans)",
    origins: "Kenya, Tanzania",
    grades: "Nylon, Polished, Processing Grade",
    packaging: "50kg, 90kg PP Bags",
    markets: "India, UAE, Asia"
  },
  {
    name: "Pigeon Peas",
    origins: "Tanzania, Malawi (Regional)",
    grades: "FAQ (Fair Average Quality)",
    packaging: "50kg PP Bags",
    markets: "India, GCC"
  },
  {
    name: "Kidney Beans",
    origins: "Uganda, Tanzania, Kenya",
    grades: "Red Kidney, Long Red, Round Red",
    packaging: "50kg, 90kg PP Bags",
    markets: "Regional, GCC, Europe"
  }
]

export default function CommoditiesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-brand-primary mb-4">Focus Commodities</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We specialize in high-demand agricultural commodities from East Africa, ensuring quality standards are met for international markets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {commodities.map((commodity, idx) => (
          <Card key={idx} className="border-l-4 border-l-brand-secondary">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-primary">{commodity.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-slate-500 uppercase tracking-tight">Typical Origins</p>
                  <p className="text-slate-800">{commodity.origins}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-500 uppercase tracking-tight">Available Grades</p>
                  <p className="text-slate-800">{commodity.grades}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-500 uppercase tracking-tight">Packaging Options</p>
                  <p className="text-slate-800">{commodity.packaging}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-500 uppercase tracking-tight">Export Markets</p>
                  <p className="text-slate-800">{commodity.markets}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-12 text-center text-slate-500 italic">
        Note: Pricing is subject to market fluctuations and specific requirements. Please contact us for a formal quote.
      </p>
    </div>
  )
}
