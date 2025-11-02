import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [activeSection, setActiveSection] = useState<string>("/");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "#services" },
    { label: "Projects", path: "#projects" },
    { label: "About", path: "#about" },
    { label: "Contact", path: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect which section is visible while scrolling
      let current = "/";
      navItems.forEach((item) => {
        if (item.path.startsWith("#")) {
          const section = document.querySelector(item.path);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              current = item.path;
            }
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const handleNavClick = (path: string) => {
  if (path === "/") {
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("/");
  } else if (path.startsWith("#")) {
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(path);
  }

  setIsMobileMenuOpen(false);
};


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="text-2xl font-bold text-primary">SOLIFIED</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors rounded-md
                  ${
                    activeSection === item.path
                      ? "text-primary"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" onClick={toggleTheme} className="hidden md:flex">
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <Button
              variant="default"
              className="hidden md:flex"
              onClick={() => handleNavClick("#contact")}
            >
              Get in Touch
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium uppercase tracking-wide rounded-md
                  ${
                    activeSection === item.path
                      ? "text-primary"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 flex items-center gap-2">
              <Button size="icon" variant="ghost" onClick={toggleTheme} className="flex-shrink-0">
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
              <Button className="flex-1" onClick={() => handleNavClick("#contact")}>
                Get in Touch
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
