import {
  Cable,
  Camera,
  Lock,
  Code,
  Brain,
  Lightbulb,
  Cloud,
  Wifi,
  MapPin,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: Cable,
    title: "Structured Cabling Systems",
    description:
      "Standards-driven, high-performance cabling infrastructure designed for scalability and reliability",
  },
  {
    icon: Camera,
    title: "CCTV & Surveillance Solutions",
    description:
      "Advanced video monitoring systems with intelligent analytics for enhanced security",
  },
  {
    icon: Lock,
    title: "Access Control Solutions",
    description:
      "Integrated physical and digital access management ensuring secure, seamless operations",
  },
  {
    icon: Code,
    title: "Application & Web Development",
    description:
      "Customized, user-centric applications and web platforms built with modern frameworks",
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description:
      "Intelligent automation, analytics, and machine learning models tailored to optimize processes",
  },
  {
    icon: Lightbulb,
    title: "IT Consulting Services",
    description:
      "Strategic advisory for digital transformation, infrastructure optimization, and technology adoption",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Secure, scalable, and cost-efficient cloud architecture and migration services",
  },
  {
    icon: Wifi,
    title: "Wireless & Networking Solutions",
    description:
      "Enterprise-grade networking systems delivering reliable connectivity and optimized performance",
  },
  {
    icon: MapPin,
    title: "GPS Tracking Solutions",
    description:
      "Real-time fleet and asset tracking systems for improved operational visibility and efficiency",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT solutions combining innovation and execution to
            deliver technology that creates measurable business impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover-elevate transition-all duration-200 h-full"
                data-testid={`card-service-${index}`}
              >
                <CardHeader className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
