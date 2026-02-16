"use client";

import { motion } from "framer-motion";

interface TechItem {
  name: string;
  icon: string;
  category: string;
  proficiency: number;
  color: string;
}

const techStack: TechItem[] = [
  { name: "TypeScript", icon: "TS", category: "Frontend", proficiency: 95, color: "from-blue-500 to-blue-600" },
  { name: "Java", icon: "☕", category: "Backend", proficiency: 90, color: "from-red-500 to-orange-500" },
  { name: "Python", icon: "🐍", category: "AI/ML", proficiency: 90, color: "from-yellow-500 to-green-500" },
  { name: "Spring Boot", icon: "🍃", category: "Backend", proficiency: 90, color: "from-green-500 to-emerald-600" },
  { name: "FastAPI", icon: "⚡", category: "Backend", proficiency: 95, color: "from-teal-500 to-cyan-500" },
  { name: "PostgreSQL", icon: "🐘", category: "Database", proficiency: 85, color: "from-blue-600 to-indigo-600" },
  { name: "Docker", icon: "🐳", category: "DevOps", proficiency: 85, color: "from-blue-400 to-blue-500" },
  { name: "OpenAI API", icon: "🤖", category: "AI/ML", proficiency: 95, color: "from-purple-500 to-pink-500" },
  { name: "React/Next.js", icon: "⚛️", category: "Frontend", proficiency: 90, color: "from-cyan-500 to-blue-500" },
  { name: "Redis", icon: "🔴", category: "Database", proficiency: 80, color: "from-red-500 to-red-600" },
  { name: "C#/.NET", icon: "#️⃣", category: "Backend", proficiency: 75, color: "from-purple-600 to-indigo-600" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function BentoGrid() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Tech </span>
            <span className="bg-gradient-to-r from-primary to-accent-gold bg-clip-text text-transparent">
              Arsenal
            </span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Production-tested technologies for building enterprise-grade AI systems
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`
                relative group rounded-2xl border border-border bg-background-tertiary p-6
                transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10
                ${index === 2 ? 'md:col-span-2 md:row-span-2' : ''}
                ${index === 7 ? 'lg:col-span-2' : ''}
              `}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`
                  text-4xl mb-3
                  ${index === 2 ? 'md:text-6xl md:mb-6' : ''}
                  ${index === 7 ? 'lg:text-5xl' : ''}
                `}>
                  {tech.icon}
                </div>

                {/* Name */}
                <h3 className={`
                  font-bold text-foreground mb-2
                  ${index === 2 ? 'md:text-2xl' : 'text-lg'}
                  ${index === 7 ? 'lg:text-xl' : ''}
                `}>
                  {tech.name}
                </h3>

                {/* Category */}
                <p className="text-sm text-foreground-muted mb-3">{tech.category}</p>

                {/* Proficiency Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-foreground-subtle">
                    <span>Proficiency</span>
                    <span>{tech.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                    />
                  </div>
                </div>

                {/* Hover Effect Label */}
                {(index === 2 || index === 7) && (
                  <div className="mt-4 pt-4 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-foreground-muted">
                      {index === 2 && "Core language for AI/ML and backend development"}
                      {index === 7 && "Building intelligent applications with GPT-4 & Gemini"}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-6 py-3 text-sm">
            <span className="text-foreground-muted">Also experienced with:</span>
            <span className="font-semibold text-primary">Angular, Django, RabbitMQ, AWS, Power BI</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
