import { motion } from "framer-motion";
import { 
  Chrome, 
  MessageSquare, 
  Building2, 
  ArrowRight,
  Shield,
  Eye,
  Zap,
  Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Chrome,
    badge: "Browser Extension",
    title: "Trust Copilot",
    subtitle: "The layer of truth for your browser",
    description:
      "Like Grammarly for deception. TrueLens overlays trust signals on any website you visit — Amazon, Glassdoor, Reddit, news sites, and more.",
    features: [
      "Real-time review cluster analysis",
      "Fake review detection on e-commerce",
      "Manipulated comment flagging",
      "AI-generated content warnings",
    ],
    examples: [
      { site: "Amazon", warning: "Review cluster shows coordinated fake behavior" },
      { site: "News Site", warning: "Article contains hallucinated statistics" },
      { site: "LinkedIn", warning: "Post uses emotional manipulation tactics" },
    ],
    cta: "Get Extension",
    gradient: "from-primary to-cyan-400",
  },
  {
    icon: MessageSquare,
    badge: "AI Verifier",
    title: "AI Lie Detector",
    subtitle: "Verify any AI-generated content",
    description:
      "Paste any ChatGPT answer, Gemini response, or AI-generated text. TrueLens tells you what's factual, what's hallucinated, and what sources are missing.",
    features: [
      "Factual vs hallucinated breakdown",
      "Missing source identification",
      "Confidence vs uncertainty mapping",
      "Citation verification",
    ],
    examples: [
      { label: "Factual", percentage: "67%", color: "text-success" },
      { label: "Hallucinated", percentage: "23%", color: "text-destructive" },
      { label: "Uncertain", percentage: "10%", color: "text-warning" },
    ],
    cta: "Try AI Verifier",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Building2,
    badge: "Enterprise",
    title: "Quality Gate",
    subtitle: "Trust layer for your data pipeline",
    description:
      "Plug TrueLens into your customer feedback pipelines, support tickets, survey validation, and LLM output monitoring. Quality gate before decisions are made.",
    features: [
      "API integration in minutes",
      "Real-time data quality scoring",
      "Custom detection rules",
      "Compliance reporting",
    ],
    integrations: ["Slack", "Salesforce", "Zendesk", "Custom APIs"],
    cta: "Contact Sales",
    gradient: "from-orange-500 to-amber-500",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            One Platform. <span className="gradient-text">Multiple Products.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you're browsing the web, verifying AI outputs, or building enterprise 
            data pipelines — TrueLens has you covered.
          </p>
        </motion.div>

        {/* Products */}
        <div className="space-y-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="rounded-3xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-colors">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left - Content */}
                  <div className="p-8 lg:p-12">
                    {/* Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${product.gradient} text-white text-xs font-semibold mb-4`}>
                      <product.icon className="w-3 h-3" />
                      {product.badge}
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold mb-2">{product.title}</h3>
                    <p className="text-muted-foreground mb-4">{product.subtitle}</p>
                    <p className="text-foreground/80 mb-6">{product.description}</p>

                    {/* Features */}
                    <ul className="space-y-2 mb-8">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button className="group">
                      {product.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Right - Visual */}
                  <div className="bg-secondary/30 p-8 lg:p-12 flex items-center justify-center">
                    {product.examples && (
                      <div className="w-full max-w-sm space-y-3">
                        {product.examples.map((example, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                            className="p-4 rounded-xl bg-card border border-border"
                          >
                            {"site" in example ? (
                              <>
                                <div className="flex items-center gap-2 mb-2">
                                  <Eye className="w-4 h-4 text-primary" />
                                  <span className="text-sm font-medium">{example.site}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                  <Shield className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-warning">{example.warning}</span>
                                </div>
                              </>
                            ) : "percentage" in example ? (
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">{example.label}</span>
                                <span className={`text-2xl font-bold font-mono ${example.color}`}>
                                  {example.percentage}
                                </span>
                              </div>
                            ) : null}
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {product.integrations && (
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-4">Integrates with</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                          {product.integrations.map((integration) => (
                            <div
                              key={integration}
                              className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium"
                            >
                              {integration}
                            </div>
                          ))}
                        </div>
                        <div className="mt-8 p-6 rounded-xl bg-card border border-border">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <Lock className="w-5 h-5 text-success" />
                            <span className="font-semibold">SOC 2 Compliant</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Enterprise-grade security and compliance
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;