import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/images/horizontal.jpeg"
                alt="East Africa Bridge Group"
                width={220}
                height={56}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              East Africa Bridge Group is a procurement, sourcing, and market access platform connecting international buyers with qualified suppliers across East Africa.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/commodities" className="text-muted-foreground hover:text-primary">Commodities</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Email: procurement@eabridgegroup.com</li>
              <li className="text-muted-foreground">Origins: Tanzania, Uganda, Kenya</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} East Africa Bridge Group Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
