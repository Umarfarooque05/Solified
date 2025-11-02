import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (path: string) => {
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">SOLIFIED</div>
            <p className="text-sm text-muted-foreground">
              IT Solutions Simplified
            </p>
            <p className="text-sm text-muted-foreground">
              Transforming IT, Empowering Business.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { label: "Services", path: "#services" },
                { label: "Projects", path: "#projects" },
                { label: "About", path: "#about" },
                { label: "Contact", path: "#contact" },
              ].map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`link-footer-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2" data-testid="footer-email">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a
                  href="mailto:info@solified.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@solified.com
                </a>
              </div>
              <div className="flex items-start gap-2" data-testid="footer-phone">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <div className="text-sm text-muted-foreground space-y-1">
                  <a
                    href="tel:+966570124916"
                    className="block hover:text-primary transition-colors"
                  >
                    +966 57 012 4916
                  </a>
                  <a
                    href="tel:+966562927798"
                    className="block hover:text-primary transition-colors"
                  >
                    +966 56 292 7798
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Solified. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
