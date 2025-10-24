export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">We Are Solified</h2>
        </div>

        <div className="space-y-6 text-base leading-relaxed text-foreground/80">
          <p data-testid="text-about-intro">
            Founded in 2024 in Saudi Arabia, Solified is a next-generation IT
            solutions provider established by seasoned industry professionals
            with over 25 years of combined expertise. With proven experience
            across diverse sectors including FMCG, ICT/ELV systems, IT security,
            and technology consulting, we are committed to delivering innovative,
            reliable, and future-ready IT services that empower businesses to
            scale and thrive.
          </p>

          <p data-testid="text-about-approach">
            At Solified, we design, implement, and manage customized IT network
            and infrastructure solutions tailored to the unique needs of our
            clients. Our focus is on building robust, scalable, and secure
            ecosystems that optimize performance, enhance reliability, and support
            long-term business growth.
          </p>

          <p data-testid="text-about-values">
            Guided by our core values of transparency, collaboration, and
            customer-centricity, we strive to establish long-term partnerships
            built on trust and measurable results. By leveraging cutting-edge
            technologies and industry best practices, we enable our clients to
            achieve operational excellence, digital resilience, and competitive
            advantage.
          </p>

          <div className="text-center pt-8">
            <p className="text-2xl font-bold text-primary" data-testid="text-tagline">
              Transforming IT, Empowering Business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
