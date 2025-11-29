import { Check } from "lucide-react"

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      description: "Perfect for beginners starting their fitness journey",
      features: ["Basic workout plans", "Progress tracking", "Mobile app access", "Community support"],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      description: "For serious fitness enthusiasts",
      features: [
        "AI-powered personalized plans",
        "Real-time form correction",
        "Advanced analytics",
        "Nutrition guidance",
        "Priority support",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Elite",
      price: "$59",
      description: "For maximum results and transformation",
      features: ["Everything in Pro", "One-on-one coaching", "Custom meal plans", "Video form reviews", "24/7 support"],
      cta: "Contact Sales",
      highlighted: false,
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose the plan that fits your goals. Cancel anytime, no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all ${
                plan.highlighted
                  ? "md:scale-105 bg-primary text-primary-foreground shadow-xl border-2 border-primary"
                  : "bg-card border border-border hover:border-primary/50 hover:shadow-lg"
              }`}
            >
              {/* Card Header */}
              <div className={`p-8 ${plan.highlighted ? "bg-primary" : "bg-background"}`}>
                <h3
                  className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                >
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span
                    className={`text-4xl font-bold ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                  >
                    /month
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold mb-8 transition-colors ${
                    plan.highlighted
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features List */}
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? "text-primary-foreground" : "text-primary"
                        }`}
                      />
                      <span className={plan.highlighted ? "text-primary-foreground" : "text-foreground"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">All plans include 30-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  )
}
