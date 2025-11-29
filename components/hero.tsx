export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full hover:bg-primary/15 transition-colors">
              <span className="text-xs font-bold text-primary">✨ REVOLUTIONARY</span>
              <span className="text-xs text-muted-foreground">AI form correction with 99.2% accuracy</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-balance leading-tight">
              Your Personal{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Fitness Coach
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Get personalized workout plans, real-time form correction with AI vision, and 24/7 guidance to transform
              your fitness journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center gap-2 group">
                Start Your Free Trial
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="border-2 border-primary/30 text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">500K+</div>
                <div className="text-sm text-muted-foreground font-medium">Active Users</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-accent">4.9★</div>
                <div className="text-sm text-muted-foreground font-medium">App Rating</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground font-medium">Workouts Done</div>
              </div>
            </div>
          </div>

          {/* Right Image with Enhanced Design */}
          <div className="relative h-96 lg:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl blur-3xl" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />

            <div className="relative h-full flex items-center justify-center">
              <div className="relative w-full aspect-square lg:aspect-auto lg:h-full">
                <img
                  src="/abstract-geometric-fitness-app-interface-with-grad.jpg"
                  alt="FitFlow AI Fitness Coach"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
