'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { submitContactForm } from './actions'
import { Loader2, Mail, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [userType, setUserType] = useState<string[]>([])

  async function handleSubmit(formData: FormData) {
    setPending(true)
    setMessage(null)

    // Add userType to formData manually since checkboxes are not standard form elements in shadcn
    formData.append('userType', userType.join(' & ') || 'Other')

    const result = await submitContactForm(formData)

    setPending(false)
    if (result.success) {
      setMessage({ type: 'success', text: result.message })
      // Reset form would happen here if it was a controlled form
    } else {
      setMessage({ type: 'error', text: result.message })
    }
  }

  const handleUserTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setUserType([...userType, type])
    } else {
      setUserType(userType.filter(t => t !== type))
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-brand-primary mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a sourcing requirement or want to join our network of suppliers? Get in touch with us today.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-slate-100 rounded-full text-brand-primary shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-brand-primary">Email</p>
                <p className="text-slate-600">procurement@eabridgegroup.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-slate-100 rounded-full text-brand-primary shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-brand-primary">Origins</p>
                <p className="text-slate-600">Tanzania, Uganda, Kenya</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-brand-primary mb-4">Why Contact Us?</h3>
            <ul className="space-y-3">
              {[
                "Direct access to verified East African origins",
                "Professional quality control and inspection",
                "Transparent transaction management",
                "Expert market intelligence"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="h-2 w-2 rounded-full bg-brand-secondary mt-2 mr-3 shrink-0"></span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="shadow-xl border-none">
          <CardHeader>
            <CardTitle className="text-2xl text-brand-primary">Sourcing Inquiry</CardTitle>
            <CardDescription>Fill out the form below and our team will get back to you shortly.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" name="company" placeholder="ACME Trading" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" name="country" placeholder="United Arab Emirates" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" placeholder="+971 ..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="commodity">Commodity of Interest</Label>
                  <Select name="commodity">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a commodity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sesame">Sesame Seeds</SelectItem>
                      <SelectItem value="green-grams">Green Grams</SelectItem>
                      <SelectItem value="pigeon-peas">Pigeon Peas</SelectItem>
                      <SelectItem value="kidney-beans">Kidney Beans</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message *</Label>
                <Textarea id="message" name="message" placeholder="Please describe your sourcing requirements..." className="min-h-[120px]" required />
              </div>

              <div className="space-y-3 py-2">
                <Label>I am a: *</Label>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="buyer" onCheckedChange={(checked) => handleUserTypeChange('Buyer', !!checked)} />
                    <label htmlFor="buyer" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Buyer
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="supplier" onCheckedChange={(checked) => handleUserTypeChange('Supplier', !!checked)} />
                    <label htmlFor="supplier" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Supplier
                    </label>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white" disabled={pending}>
                {pending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : "Submit Sourcing Request"}
              </Button>

              {message && (
                <div className={`p-4 rounded-md text-sm font-medium ${message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  {message.text}
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
