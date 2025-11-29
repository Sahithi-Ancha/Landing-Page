import { Activity, Zap, TrendingUp } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Activity,
      title: "Personalized Workouts",
      description: "AI-generated workout plans tailored to your fitness level, goals, and available equipment.",
    },
    {
      icon: Zap,
      title: "Real-time Form Correction",
      description: "Get instant feedback on your exercise form using advanced computer vision technology.",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your improvements with detailed analytics, PR tracking, and achievement badges.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Powerful Features for <span className="text-primary">Your Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to transform your body and achieve your fitness goals faster than ever.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="flex flex-col items-start p-8 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                {/* Icon */}
                <div className="mb-6 p-3 rounded-lg bg-primary/10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
