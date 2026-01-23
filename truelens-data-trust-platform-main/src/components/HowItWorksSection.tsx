import { motion } from "framer-motion";
import { Upload, Cpu, CheckCircle, LineChart } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Ingest Data",
    description: "Upload CSV files, connect APIs, or stream data in real-time. We support all major data formats.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Analysis",
    description: "Our ML models analyze text authenticity, detect outliers, and identify distribution shifts.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Trust Scoring",
    description: "Each data point receives a trust score with explainable reasons for any flagged issues.",
  },
  {
    icon: LineChart,
    step: "04",
    title: "Monitor & Act",
    description: "Visualize trends, set alerts, and export clean data for downstream processing.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">TrueLens</span> Works
          </h2>
          <p className="text-muted-foreground text-lg">
            From raw data to actionable insights in four simple steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
              )}

              <div className="relative z-10">
                {/* Step number */}
                <div className="text-5xl font-bold text-primary/20 mb-4 font-mono">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
