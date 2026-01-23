import { useState } from "react";
import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Loader2, 
  Sparkles,
  Copy,
  RotateCcw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const sampleTexts = [
  {
    label: "Viral Tweet",
    text: "BREAKING: Scientists confirm that drinking coffee before 8am reduces lifespan by 47%. Study conducted at Harvard with 10 million participants over 50 years.",
  },
  {
    label: "AI Answer",
    text: "The Great Wall of China is visible from space with the naked eye. It's the only man-made structure that can be seen from the Moon, making it truly one of humanity's greatest achievements.",
  },
  {
    label: "Fake Review",
    text: "OMG this product is AMAZING!!! Best purchase ever!!! I bought 10 for my whole family!!! Everyone should buy this RIGHT NOW!!! 5 stars is not enough!!! The company is so great!!!",
  },
];

interface AnalysisResult {
  trustScore: number;
  verdict: "trusted" | "suspicious" | "fake";
  issues: {
    type: string;
    description: string;
    severity: "low" | "medium" | "high";
  }[];
  explanation: string;
}

const mockAnalyze = (text: string): Promise<AnalysisResult> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simple mock analysis based on text patterns
      const hasExcessivePunctuation = (text.match(/!{2,}/g) || []).length > 0;
      const hasAllCaps = (text.match(/[A-Z]{5,}/g) || []).length > 1;
      const hasFakeStats = /\d{2,}%/.test(text) && /million|billion|study|research/i.test(text);
      const hasHyperbole = /best|amazing|incredible|worst|terrible/i.test(text);
      const hasUrgency = /now|breaking|urgent|immediately/i.test(text);

      const issues: AnalysisResult["issues"] = [];
      let deductions = 0;

      if (hasExcessivePunctuation) {
        issues.push({
          type: "Excessive Punctuation",
          description: "Multiple exclamation marks suggest emotional manipulation",
          severity: "medium",
        });
        deductions += 15;
      }

      if (hasAllCaps) {
        issues.push({
          type: "Aggressive Formatting",
          description: "ALL CAPS usage indicates sensationalism",
          severity: "low",
        });
        deductions += 10;
      }

      if (hasFakeStats) {
        issues.push({
          type: "Unverifiable Statistics",
          description: "Claims specific numbers without credible sources",
          severity: "high",
        });
        deductions += 25;
      }

      if (hasHyperbole) {
        issues.push({
          type: "Hyperbolic Language",
          description: "Extreme adjectives often indicate bias or manipulation",
          severity: "low",
        });
        deductions += 10;
      }

      if (hasUrgency) {
        issues.push({
          type: "Urgency Tactics",
          description: "Creates false urgency to bypass critical thinking",
          severity: "medium",
        });
        deductions += 15;
      }

      const trustScore = Math.max(0, 100 - deductions);
      let verdict: AnalysisResult["verdict"] = "trusted";
      let explanation = "This content appears to be authentic and trustworthy.";

      if (trustScore < 40) {
        verdict = "fake";
        explanation = "High probability of synthetic, manipulated, or misleading content. Multiple deception patterns detected.";
      } else if (trustScore < 70) {
        verdict = "suspicious";
        explanation = "Content shows signs of potential manipulation. Verify claims independently before trusting.";
      }

      resolve({ trustScore, verdict, issues, explanation });
    }, 1500);
  });
};

const LiveDemoSection = () => {
  const [inputText, setInputText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async () => {
    if (!inputText.trim()) return;
    setIsAnalyzing(true);
    setResult(null);
    const analysis = await mockAnalyze(inputText);
    setResult(analysis);
    setIsAnalyzing(false);
  };

  const handleSampleClick = (sample: typeof sampleTexts[0]) => {
    setInputText(sample.text);
    setResult(null);
  };

  const handleReset = () => {
    setInputText("");
    setResult(null);
  };

  const getVerdictColor = (verdict: AnalysisResult["verdict"]) => {
    switch (verdict) {
      case "trusted":
        return "text-success";
      case "suspicious":
        return "text-warning";
      case "fake":
        return "text-destructive";
    }
  };

  const getVerdictIcon = (verdict: AnalysisResult["verdict"]) => {
    switch (verdict) {
      case "trusted":
        return <CheckCircle className="w-6 h-6 text-success" />;
      case "suspicious":
        return <AlertTriangle className="w-6 h-6 text-warning" />;
      case "fake":
        return <XCircle className="w-6 h-6 text-destructive" />;
    }
  };

  const getSeverityColor = (severity: "low" | "medium" | "high") => {
    switch (severity) {
      case "low":
        return "bg-warning/20 text-warning border-warning/30";
      case "medium":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "high":
        return "bg-destructive/20 text-destructive border-destructive/30";
    }
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Live Demo</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            See TrueLens <span className="gradient-text">In Action</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Paste any content — a tweet, AI answer, review, or news paragraph — and watch 
            TrueLens reveal the truth behind the words.
          </p>
        </motion.div>

        {/* Demo Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-xl">
            {/* Sample buttons */}
            <div className="px-6 py-4 border-b border-border bg-secondary/30">
              <p className="text-sm text-muted-foreground mb-3">Try a sample:</p>
              <div className="flex flex-wrap gap-2">
                {sampleTexts.map((sample) => (
                  <button
                    key={sample.label}
                    onClick={() => handleSampleClick(sample)}
                    className="px-3 py-1.5 text-sm rounded-lg bg-background border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors"
                  >
                    {sample.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input area */}
            <div className="p-6">
              <Textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste any text content here to analyze for authenticity, manipulation, or AI generation..."
                className="min-h-[150px] resize-none bg-background border-border focus:border-primary"
              />

              <div className="flex items-center gap-3 mt-4">
                <Button
                  onClick={handleAnalyze}
                  disabled={!inputText.trim() || isAnalyzing}
                  className="flex-1 sm:flex-none"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    "Analyze Content"
                  )}
                </Button>
                {(inputText || result) && (
                  <Button variant="ghost" size="icon" onClick={handleReset}>
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>

            {/* Results */}
            {result && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="border-t border-border"
              >
                {/* Trust Score */}
                <div className="p-6 bg-secondary/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getVerdictIcon(result.verdict)}
                      <div>
                        <h4 className={`text-lg font-bold capitalize ${getVerdictColor(result.verdict)}`}>
                          {result.verdict}
                        </h4>
                        <p className="text-sm text-muted-foreground">{result.explanation}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-4xl font-bold font-mono ${getVerdictColor(result.verdict)}`}>
                        {result.trustScore}
                      </div>
                      <div className="text-xs text-muted-foreground">Trust Score</div>
                    </div>
                  </div>

                  {/* Trust bar */}
                  <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${result.trustScore}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`h-full rounded-full ${
                        result.trustScore >= 70
                          ? "bg-success"
                          : result.trustScore >= 40
                          ? "bg-warning"
                          : "bg-destructive"
                      }`}
                    />
                  </div>
                </div>

                {/* Issues */}
                {result.issues.length > 0 && (
                  <div className="p-6">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                      Detected Issues
                    </h4>
                    <div className="space-y-3">
                      {result.issues.map((issue, i) => (
                        <div
                          key={i}
                          className={`p-3 rounded-lg border ${getSeverityColor(issue.severity)}`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium">{issue.type}</span>
                            <span className="text-xs uppercase">{issue.severity}</span>
                          </div>
                          <p className="text-sm opacity-80">{issue.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveDemoSection;