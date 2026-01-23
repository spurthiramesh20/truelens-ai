import { motion } from "framer-motion";
import { 
  Bot, 
  TrendingUp, 
  AlertTriangle, 
  FileSearch, 
  BarChart3, 
  Zap 
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Bot Detection",
    description: "Identify bot-generated content using advanced NLP and behavioral analysis patterns.",
  },
  {
    icon: TrendingUp,
    title: "Data Drift Monitoring",
    description: "Track distribution changes over time and get alerts when your data quality degrades.",
  },
  {
    icon: AlertTriangle,
    title: "Anomaly Detection",
    description: "Isolate statistical outliers using Isolation Forest, LOF, and autoencoder models.",
  },
  {
    icon: FileSearch,
    title: "Text Authenticity",
    description: "LLM-powered analysis to detect synthetic, plagiarized, or manipulated text content.",
  },
  {
    icon: BarChart3,
    title: "Visual Analytics",
    description: "Interactive dashboards showing clean vs suspicious data clusters and trends.",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Analyze streaming data with sub-100ms latency for immediate trust scoring.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-3xl rounded-full" />

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
            The Technology Behind
            <span className="gradient-text"> The Reality Firewall</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive suite of AI-powered detection algorithms that no one else 
            combines in a single platform.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
