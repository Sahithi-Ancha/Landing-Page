export default function Features() {
  const features = [
    {
      icon: "🎯",
      title: "Personalized Workouts",
      description: "AI-generated plans tailored to your fitness level, goals, and equipment.",
      color: "from-primary to-primary/50",
    },
    {
      icon: "📹",
      title: "Real-time Form Correction",
      description: "Computer vision analyzes your form and provides instant feedback to prevent injuries.",
      color: "from-accent to-accent/50",
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Detailed analytics showing your gains, endurance improvements, and milestones.",
      color: "from-primary to-accent",
    },
    {
      icon: "🥗",
      title: "Nutrition Guidance",
      description: "Personalized meal plans and recipes aligned with your fitness objectives.",
      color: "from-accent to-primary",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            Powerful Features, <span className="text-primary">Remarkable Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform your fitness journey in one intelligent platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
              />

              <div className="text-5xl mb-6 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                {feature.description}
              </p>

              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} w-0 group-hover:w-full transition-all duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
