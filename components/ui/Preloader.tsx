'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TickerItem {
  symbol: string;
  price: string;
  change: number;
}

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [stage, setStage] = useState(0); // 0: loading, 1: data-stream, 2: system-init, 3: welcome
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('');
  const [tickerItems] = useState<TickerItem[]>([
    { symbol: 'TECH', price: '2,847.33', change: 2.4 },
    { symbol: 'BANK', price: '1,234.56', change: -0.8 },
    { symbol: 'FINTECH', price: '987.12', change: 5.2 },
    { symbol: 'AI/ML', price: '4,521.89', change: 3.7 },
  ]);

  const systemMessages = [
    '> Initializing secure connection...',
    '> Loading portfolio infrastructure...',
    '> Establishing API endpoints...',
    '> Syncing project repositories...',
    '> Configuring AI/ML pipelines...',
    '> Authenticating credentials...',
    '> Building component tree...',
    '> Optimizing performance metrics...',
    '> System ready.',
  ];

  useEffect(() => {
    // Stage 0: Progress bar (0-40%) - 3.5s
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 40) {
          clearInterval(progressInterval);
          setStage(1);
          return 40;
        }
        return prev + 1;
      });
    }, 90);

    // Stage 1: Data stream (40-70%) - 4.5s
    setTimeout(() => {
      setStage(1);
      const streamInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 70) {
            clearInterval(streamInterval);
            setStage(2);
            return 70;
          }
          return prev + 0.8;
        });
      }, 100);
    }, 3500);

    // Stage 2: System initialization (70-100%) - 7s
    setTimeout(() => {
      setStage(2);
      let messageIndex = 0;
      const messageInterval = setInterval(() => {
        if (messageIndex < systemMessages.length) {
          setLoadingText((prev) => prev + systemMessages[messageIndex] + '\n');
          messageIndex++;
        }
      }, 700);

      const finalProgress = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(finalProgress);
            clearInterval(messageInterval);
            setTimeout(() => setStage(3), 800);
            return 100;
          }
          return prev + 0.6;
        });
      }, 70);
    }, 8000);

    // Stage 3: Welcome - 3s then exit
    setTimeout(() => {
      setStage(3);
    }, 15500);

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <AnimatePresence>
      {stage < 4 && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-50 bg-gradient-to-br from-slate-50 via-white to-blue-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
        {/* Animated background grid */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                             linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `linear-gradient(135deg, ${
                  i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#ec4899'
                }, transparent)`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative h-full flex items-center justify-center px-6">
          <div className="w-full max-w-4xl">
            {/* Stage 0 & 1: Financial Dashboard Loading */}
            {stage <= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {/* Header */}
                <div className="text-center space-y-4">
                  <motion.div
                    className="inline-block"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                      Portfolio System
                    </h1>
                  </motion.div>
                  <p className="text-slate-600 text-lg">Initializing Financial Data Infrastructure</p>
                </div>

                {/* Live Market Ticker */}
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Live Market Data
                    </h3>
                    <span className="text-xs text-slate-500">Real-time</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {tickerItems.map((item, i) => (
                      <motion.div
                        key={item.symbol}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-gradient-to-br from-slate-50 to-white p-4 rounded-lg border border-slate-100"
                      >
                        <div className="text-xs font-medium text-slate-600 mb-1">{item.symbol}</div>
                        <div className="text-xl font-bold text-slate-900">${item.price}</div>
                        <div className={`text-xs font-medium ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {item.change >= 0 ? '↑' : '↓'} {Math.abs(item.change)}%
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Advanced Progress Bar */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Loading Components</span>
                    <span className="font-mono font-bold text-slate-900">{progress}%</span>
                  </div>
                  <div className="h-3 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative"
                      initial={{ width: '0%' }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                      />
                    </motion.div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-slate-300 border-t-blue-500 rounded-full"
                    />
                    <span>Syncing databases & APIs...</span>
                  </div>
                </div>

                {/* Mini Chart Visualization */}
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-slate-700">Performance Metrics</h3>
                    <div className="flex gap-2">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-4 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full"
                          animate={{ scaleY: [1, 0.5, 1] }}
                          transition={{ duration: 0.8, delay: i * 0.1, repeat: Infinity }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="h-24 flex items-end gap-1">
                    {[...Array(40)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-500/70 to-purple-500/70 rounded-t"
                        initial={{ height: 0 }}
                        animate={{ height: `${Math.random() * 100}%` }}
                        transition={{ duration: 0.5, delay: i * 0.02 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Stage 2: Terminal/System Initialization */}
            {stage === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-slate-900 mb-2">System Initialization</h2>
                  <p className="text-slate-600">Configuring enterprise-grade architecture</p>
                </div>

                {/* Terminal Window */}
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-700">
                  {/* Terminal Header */}
                  <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-slate-400 text-sm ml-4">portfolio@production ~ %</span>
                  </div>

                  {/* Terminal Content */}
                  <div className="p-6 font-mono text-sm h-64 overflow-auto">
                    <pre className="text-green-400 whitespace-pre-wrap">{loadingText}</pre>
                    <motion.span
                      className="inline-block w-2 h-4 bg-green-400 ml-1"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  </div>
                </div>

                {/* Progress with percentage */}
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-slate-700 font-medium">Deployment Progress</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      animate={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Stage 3: Welcome Screen */}
            {stage === 3 && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.1, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-8"
                onAnimationComplete={() => {
                  setTimeout(() => {
                    setStage(4);
                    // Call onComplete after exit animation (1s)
                    setTimeout(() => {
                      onComplete?.();
                    }, 1000);
                  }, 1500);
                }}
              >
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                  className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                  Welcome
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl text-slate-700"
                >
                  System Ready
                </motion.div>

                <motion.div
                  className="flex justify-center gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {['✓ Secure', '✓ Optimized', '✓ Connected'].map((text, i) => (
                    <motion.div
                      key={text}
                      className="px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 text-sm font-medium"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      {text}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Logo watermark */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1 }}
        >
          <p className="text-xs text-slate-500 font-medium tracking-wider">
            POWERED BY CLIFORD NCHOTIE
          </p>
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>
  );
}
