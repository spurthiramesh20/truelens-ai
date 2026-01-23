import { motion } from "framer-motion";
import { ArrowRight, Chrome, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
            <Shield className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Stop Trusting Blindly</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Become Your Own
            <br />
            <span className="gradient-text">Reality Firewall</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            In a world where AI generates content and bots manipulate opinions, 
            TrueLens is your layer of truth. Start verifying today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group text-base">
              Try Free Demo
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-base">
              <Chrome className="w-4 h-4 mr-2" />
              Get Browser Extension
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            No credit card required • Free tier available • Enterprise plans for teams
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
