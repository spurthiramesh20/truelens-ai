import { motion } from "framer-motion";
import { ShoppingCart, MapPin, Activity, Building, ClipboardList, Landmark } from "lucide-react";

const useCases = [
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Detect fake product reviews and identify review manipulation campaigns.",
    stat: "↓ 73% fake reviews",
  },
  {
    icon: MapPin,
    title: "Location Data",
    description: "Validate Google Maps reviews and filter out bot-generated place ratings.",
    stat: "↑ 94% accuracy",
  },
  {
    icon: Activity,
    title: "IoT & Sensors",
    description: "Identify impossible sensor readings and detect malfunctioning devices.",
    stat: "↓ 89% false alerts",
  },
  {
    icon: Building,
    title: "Smart Cities",
    description: "Ensure data quality for urban planning and infrastructure decisions.",
    stat: "↑ 12% efficiency",
  },
  {
    icon: ClipboardList,
    title: "Surveys & Forms",
    description: "Filter out bot submissions and identify low-quality survey responses.",
    stat: "↓ 67% noise",
  },
  {
    icon: Landmark,
    title: "Finance & Banking",
    description: "Detect fraudulent transaction patterns and anomalous account activity.",
    stat: "↓ 82% fraud",
  },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From e-commerce to healthcare, TrueLens adapts to your unique data quality challenges.
          </p>
        </motion.div>

        {/* Use cases grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-mono font-semibold text-success">
                    {useCase.stat}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
