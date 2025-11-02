import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Target, Rocket } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="h-full" data-testid="card-vision">
            <CardHeader className="space-y-6 p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-3">
                <CardTitle className="text-2xl">Vision 2030</CardTitle>
                <CardDescription className="text-base leading-relaxed text-foreground/80">
                  To be the leading One-Stop Shop as Tech & Business advancement
                  service provider.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card className="h-full" data-testid="card-mission">
            <CardHeader className="space-y-6 p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-3">
                <CardTitle className="text-2xl">Mission</CardTitle>
                <CardDescription className="text-base leading-relaxed text-foreground/80">
                  In this tech-oriented advancing world, Solified's mission is to
                  provide technologically simplified solutions to its customers and
                  streamline quality services to help you build the future.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-16 text-center space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Our Values & Commitment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="space-y-2" data-testid="text-value-integrity">
                <h4 className="font-semibold text-lg text-primary">Integrity</h4>
                <p className="text-sm text-muted-foreground">
                  Our core value that guides all our actions and decisions
                </p>
              </div>
              <div className="space-y-2" data-testid="text-value-experience">
                <h4 className="font-semibold text-lg text-primary">
                  Customer Experience
                </h4>
                <p className="text-sm text-muted-foreground">
                  We strive to deliver excellence to our customers in every step
                </p>
              </div>
              <div className="space-y-2" data-testid="text-value-quality">
                <h4 className="font-semibold text-lg text-primary">Quality</h4>
                <p className="text-sm text-muted-foreground">
                  We commit to provide the best quality in our services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
