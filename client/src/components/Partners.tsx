export default function Partners() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Technology Partners
          </h2>
          <p className="text-lg text-muted-foreground">
            We rely on industry-leading technology partners to deliver excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          <div className="text-center space-y-4" data-testid="partner-ubiquiti">
            <div className="flex items-center justify-center h-24">
              <div className="text-4xl font-bold text-muted-foreground/40 hover:text-foreground transition-colors">
                UBIQUITI
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              For Networking & Connectivity
            </p>
          </div>

          <div className="text-center space-y-4" data-testid="partner-hikvision">
            <div className="flex items-center justify-center h-24">
              <div className="text-4xl font-bold text-muted-foreground/40 hover:text-foreground transition-colors">
                HIKVISION
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              For Security & Access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
