import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import restaurantImage from "@assets/generated_images/Restaurant_IT_infrastructure_project_7230dc35.png";
import carWashImage from "@assets/generated_images/Car_wash_app_interface_mockup_ac83795f.png";
import networkImage from "@assets/generated_images/Network_infrastructure_installation_project_4265e62c.png";

const projects = [
  {
    title: "Mawred Al Ousool",
    subtitle: "Smart IT & Security Infrastructure for Restaurant Brand",
    image: restaurantImage,
    description:
      "Comprehensive IT and security infrastructure for a new restaurant brand launch in Jeddah, featuring advanced surveillance and networking systems.",
    deliverables: [
      "49 high-resolution CCTV cameras with 64-channel 4K NVR",
      "AI-powered surveillance with HIK 7 Series cameras",
      "Enterprise-grade Wi-Fi and structured cabling",
      "Power backup solutions for uninterrupted operations",
    ],
  },
  {
    title: "Aquamatic Express",
    subtitle: "Car Wash Application Development",
    image: carWashImage,
    description:
      "Fully integrated web application transforming a traditional car wash business into a modern digital platform in UAE.",
    deliverables: [
      "Instant booking & monthly subscription system",
      "GPS-based service area restrictions",
      "Real-time ticket tracking with WhatsApp/SMS notifications",
      "Admin dashboard with analytics & customer management",
    ],
  },
  {
    title: "Sprout",
    subtitle: "End-to-End IT Network Optimization Across Branches",
    image: networkImage,
    description:
      "Standardized and optimized IT infrastructure across multiple premium restaurant branches in Jeddah (King Road and Obhur).",
    deliverables: [
      "Network stabilization with dual SSID configuration",
      "Foodics POS integration with dedicated access points",
      "Structured cabling and switch optimization",
      "Unified, resilient infrastructure for scalability",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real-world implementations showcasing our commitment to delivering
            innovative, scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-200 h-full"
              data-testid={`card-project-${index}`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  data-testid={`img-project-${index}`}
                />
              </div>
              <CardHeader className="p-6 md:p-8 space-y-4">
                <div className="space-y-2">
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {project.subtitle}
                  </Badge>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="space-y-2 pt-2">
                  {project.deliverables.map((deliverable, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2"
                      data-testid={`text-deliverable-${index}-${idx}`}
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {deliverable}
                      </span>
                    </div>
                  ))}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
