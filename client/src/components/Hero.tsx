import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/generated_images/Professional_tech_office_hero_image_1dccdda6.png";

export default function Hero() {
  const handleNavClick = (path: string) => {
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[70vh] flex items-center pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Founded 2024 | Saudi Arabia
              </p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                IT Solutions Simplified
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl">
                A next-generation IT solutions provider delivering innovative,
                reliable, and future-ready services that empower businesses to
                scale and thrive.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => handleNavClick("#services")}
                data-testid="button-explore-services"
              >
                Explore Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleNavClick("#projects")}
                data-testid="button-view-projects"
              >
                View Projects
              </Button>
            </div>

            <div className="pt-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                25+ Years Combined Expertise
              </Badge>
            </div>
          </div>

          <div className="lg:col-span-2">
            <img
              src={heroImage}
              alt="Professional IT infrastructure"
              className="w-full h-auto rounded-2xl shadow-lg"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
