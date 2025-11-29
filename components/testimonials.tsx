export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      image: "/professional-woman-smiling.png",
      rating: 5,
      text: "FitFlow completely transformed my workout routine. The real-time form correction saved me from injury and the personalized plans keep me motivated.",
      avatar: "SJ",
      avatarColor: "bg-blue-500",
    },
    {
      name: "Michael Chen",
      role: "Professional Athlete",
      image: "/professional-man-athlete-portrait.jpg",
      rating: 5,
      text: "As an athlete, I appreciate the precision of FitFlow. The analytics helped me optimize my training and achieve new personal records.",
      avatar: "MC",
      avatarColor: "bg-purple-500",
    },
    {
      name: "Emma Wilson",
      role: "Fitness Beginner",
      image: "/woman-beginner-gym-portrait.jpg",
      rating: 5,
      text: "I was intimidated about starting, but FitFlow's guidance made everything easier. The AI coach feels like having a real personal trainer.",
      avatar: "EW",
      avatarColor: "bg-pink-500",
    },
    {
      name: "James Rodriguez",
      role: "Busy Professional",
      image: "/man-professional-workout-portrait.jpg",
      rating: 5,
      text: "With my hectic schedule, FitFlow's flexible plans are perfect. I can exercise anytime and the app adjusts to my availability.",
      avatar: "JR",
      avatarColor: "bg-green-500",
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            Loved by <span className="text-primary">Real Users</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands who've transformed their fitness journey with FitFlow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl p-6 border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:bg-card/80"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-full ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-sm border-2 border-primary/20 group-hover:border-primary/50 transition-colors`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span
                    key={i}
                    className="text-accent text-lg group-hover:scale-110 transition-transform"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/90 transition-colors">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
