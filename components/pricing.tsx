export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "9.99",
      description: "Perfect for beginners exploring fitness",
      features: [
        "Basic workout plans",
        "Progress tracking",
        "Mobile app access",
        "2 form correction videos/week",
        "Email support",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "24.99",
      description: "Most popular for serious progress",
      features: [
        "AI-personalized workouts",
        "Unlimited form correction",
        "Real-time form analysis",
        "Nutrition planning",
        "Community access",
        "Priority support",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Elite",
      price: "49.99",
      description: "For athletes and competitors",
      features: [
        "Everything in Pro",
        "1-on-1 AI coaching calls",
        "Advanced analytics",
        "Custom meal planning",
        "Exclusive content",
        "VIP 24/7 support",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan to start your transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl border backdrop-blur-sm transition-all duration-300 overflow-hidden group ${
                plan.highlighted
                  ? "border-primary bg-gradient-to-br from-primary/10 to-primary/5 lg:scale-105 shadow-2xl shadow-primary/20"
                  : "border-border/50 bg-card/50 hover:border-primary/50 hover:shadow-lg hover:bg-card/80"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  plan.highlighted ? "from-primary/5 to-accent/5" : "from-primary/2 to-accent/2"
                } -z-10`}
              />

              {plan.highlighted && (
                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              )}

              <div className="p-8">
                {plan.highlighted && (
                  <div className="inline-flex bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-primary/30">
                    ⭐ Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-8">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>

                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 mb-8 group/btn ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg hover:shadow-primary/40"
                      : "border border-border/50 text-foreground hover:bg-primary/5 hover:border-primary/50"
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex gap-3 items-start">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-foreground text-sm group-hover/btn:text-foreground transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
