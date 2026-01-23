import { motion } from "framer-motion";

const TrustScoreVisual = () => {
  const dataPoints = [
    { id: 1, trust: 94, label: "Verified", status: "clean" },
    { id: 2, trust: 23, label: "Suspicious", status: "warning" },
    { id: 3, trust: 87, label: "Verified", status: "clean" },
    { id: 4, trust: 12, label: "Bot-like", status: "danger" },
    { id: 5, trust: 91, label: "Verified", status: "clean" },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
      
      {/* Main visual container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-card border border-border rounded-2xl p-6 shadow-lg"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">Live Analysis</span>
          </div>
          <span className="text-xs font-mono text-muted-foreground">TrueLens v1.0</span>
        </div>

        {/* Score display */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full border-4 border-primary/30 relative"
          >
            <div className="absolute inset-2 rounded-full border-2 border-primary animate-pulse-glow" />
            <span className="text-3xl font-bold gradient-text">87</span>
          </motion.div>
          <p className="mt-3 text-sm text-muted-foreground">Overall Trust Score</p>
        </div>

        {/* Data rows */}
        <div className="space-y-3">
          {dataPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/50"
            >
              <div
                className={`w-3 h-3 rounded-full ${
                  point.status === "clean"
                    ? "bg-success"
                    : point.status === "warning"
                    ? "bg-warning"
                    : "bg-destructive"
                }`}
              />
              <div className="flex-1 flex items-center gap-2">
                <div className="h-1.5 flex-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${point.trust}%` }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    className={`h-full rounded-full ${
                      point.status === "clean"
                        ? "bg-success"
                        : point.status === "warning"
                        ? "bg-warning"
                        : "bg-destructive"
                    }`}
                  />
                </div>
                <span className="text-xs font-mono w-8 text-right">{point.trust}%</span>
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded font-medium ${
                  point.status === "clean"
                    ? "bg-success/20 text-success"
                    : point.status === "warning"
                    ? "bg-warning/20 text-warning"
                    : "bg-destructive/20 text-destructive"
                }`}
              >
                {point.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Scan line effect */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan-line" />
        </div>
      </motion.div>
    </div>
  );
};

export default TrustScoreVisual;
