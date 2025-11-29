export default function HeroSection() {
  return (
    <section className="flex-1 flex items-center justify-center px-4 py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="w-full max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-block">
          <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border border-primary/20">
            ✨ Transform Your Fitness Journey
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 text-foreground">
          Your Personal AI <span className="text-primary">Fitness Coach</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-muted-foreground text-balance mb-10 max-w-2xl mx-auto leading-relaxed">
          Get personalized workout plans, real-time form correction, and nutrition guidance tailored to your goals.
          Start your transformation today.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
            Start Your Free Trial
          </button>
          <button className="px-8 py-3.5 bg-background border-2 border-foreground text-foreground rounded-lg font-semibold hover:bg-muted transition-colors">
            Watch Demo
          </button>
        </div>

        {/* Social Proof */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Trusted by fitness enthusiasts worldwide</p>
          <div className="flex justify-center items-center gap-6 md:gap-12 flex-wrap">
            <span className="font-semibold text-foreground">10K+</span>
            <span className="h-6 w-px bg-border hidden sm:block" />
            <span className="font-semibold text-foreground">Active Users</span>
            <span className="h-6 w-px bg-border hidden sm:block" />
            <span className="font-semibold text-foreground">4.9★ Rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}
