# 🎯  - Cliford Ndonwie Nchotie

A world-class developer portfolio built with Next.js 15, TypeScript, and Tailwind CSS. Designed to showcase full-stack development skills and AI/ML expertise to land an apprenticeship at Deutsche Bank.

![Portfolio Preview](https://via.placeholder.com/1200x600/0A0E1A/3B82F6?text=Portfolio+Preview)

---

## 🚀 Live Demo

**Deployment:** [Coming Soon - Deploy to Vercel]

---

## ✨ Key Features

### 🎨 **Fintech-Grade Design**
- **Dark Mode First**: Professional deep navy palette (#0A0E1A)
- **Deutsche Bank Blue**: Primary accent (#3B82F6)
- **Subtle Animations**: Framer Motion for smooth interactions
- **Bank-Grade Polish**: Clean, structured, enterprise-ready UI

### 🧩 **Unique Components**

1. **Interactive Terminal**
   - Auto-playing command-line demo
   - Shows skills, experience, and recent commits
   - Proves full-stack capabilities

2. **Video-Hover Project Cards**
   - Hover to preview project demos
   - Problem-Solution-Impact framework
   - Tech stack pills and GitHub links

3. **GitHub Contribution Graph**
   - 365-day activity heatmap
   - Current/longest streak stats
   - Demonstrates coding consistency

4. **Bento Grid Tech Stack**
   - Asymmetric grid layout
   - Proficiency bars with animations
   - Categories: Backend, AI/ML, DevOps

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Fonts** | Inter, JetBrains Mono |

---

## 📂 Project Structure

```
portfolio-db/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main page (Hero → Projects → Terminal → GitHub)
│   └── globals.css         # Global styles & utilities
├── components/
│   ├── hero/
│   │   └── Hero.tsx        # Hero section with CTA
│   ├── projects/
│   │   └── ProjectCard.tsx # Video-hover project cards
│   ├── tech-stack/
│   │   └── BentoGrid.tsx   # Asymmetric tech grid
│   ├── github/
│   │   └── GitHubActivity.tsx # Contribution graph
│   └── ui/
│       └── InteractiveTerminal.tsx # Auto-playing terminal
├── lib/
│   └── projectData.ts      # Project & experience data
├── public/
│   ├── images/             # Project thumbnails
│   └── videos/             # Project demo videos
├── tailwind.config.ts      # Fintech color palette
├── package.json
└── README.md
```

---

## 🎯 Featured Projects

### 1. **EasyHR - AI Recruiting Platform**
- **Problem**: Manual CV screening is slow and error-prone
- **Solution**: OpenAI-powered matching engine with 87% accuracy
- **Tech**: FastAPI, PostgreSQL, OpenAI Embeddings

### 2. **RKA-AI - Internal Knowledge Assistant**
- **Problem**: Knowledge silos across company docs
- **Solution**: RAG pipeline for conversational search
- **Tech**: LangChain, Pinecone, Gemini API

### 3. **UrlaubPilot - Travel Planner**
- **Problem**: Multi-destination trip planning is overwhelming
- **Solution**: AI itinerary generator with interactive maps
- **Tech**: Spring Boot, React, Google Maps API

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/clifordnchotie/portfolio-db.git
cd portfolio-db

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
npm run build
npm start
```

---

## 📝 Customization Guide

### 1. **Update Personal Info**

Edit `lib/projectData.ts`:
```typescript
export const projects = [
  {
    title: "Your Project Name",
    subtitle: "One-liner description",
    problem: "What problem did it solve?",
    solution: "Your technical approach",
    techStack: ["Tech", "Stack", "List"],
    impact: "Quantifiable results",
    // ...
  }
];
```

### 2. **Add Project Media**

Place files in:
- `public/images/` → Thumbnails (JPG/PNG)
- `public/videos/` → Demo videos (MP4)

Update paths in `projectData.ts`:
```typescript
imageUrl: "/images/project-thumbnail.jpg",
videoUrl: "/videos/project-demo.mp4",
```

### 3. **Modify Color Palette**

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: "#3B82F6", // Change to your brand color
  },
  accent: {
    gold: "#F59E0B",   // Secondary accent
  },
}
```

### 4. **Update Contact Links**

In `app/page.tsx`, replace:
```typescript
href="mailto:your.email@example.com"
href="https://github.com/yourusername"
href="https://linkedin.com/in/yourprofile"
```

---

## 🎨 Design Philosophy

### **User Journey (Recruiter Perspective)**
1. **3 seconds**: Headline → "Who is this person?"
2. **10 seconds**: Tech stack → "Do they have the skills?"
3. **2 minutes**: Projects → "Can they ship products?"
4. **Action**: Download resume / Send email

### **Key Principles**
- **Clarity over Cleverness**: Every section has a clear purpose
- **Proof over Claims**: Case studies show real impact
- **Accessibility**: Readable by both HR and engineers
- **Performance**: Optimized animations, lazy loading

---

## 🔧 Advanced Features

### **Alternative Project Card Layout**

If you prefer a simpler card without video hover:

```typescript
// In ProjectCard.tsx, replace video logic with:
<img
  src={imageUrl}
  alt={title}
  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
/>
```

### **Add More Sections**

Example: Certifications section

```typescript
// Create components/certifications/CertList.tsx
export default function CertList() {
  const certs = [
    { name: "AWS Solutions Architect", issuer: "Amazon" },
    { name: "Professional Scrum Master", issuer: "Scrum.org" },
  ];
  
  return (
    <section className="py-24">
      {/* Your JSX */}
    </section>
  );
}
```

---

## 📊 Performance Optimization

- **Next.js Image**: Use `<Image>` for optimized images
- **Code Splitting**: Components lazy-loaded with `dynamic()`
- **Font Optimization**: `next/font` for self-hosted fonts
- **Tailwind Purge**: Unused CSS removed in production

---

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push to GitHub
2. Import in Vercel dashboard
3. Auto-deploy on every commit

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### **Netlify**
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `.next`

---

## 📞 Contact

**Cliford Ndonwie Nchotie**
- 📧 Email: cliford.nchotie@example.com
- 💼 LinkedIn: [linkedin.com/in/clifordnchotie](https://linkedin.com/in/clifordnchotie)
- 🐙 GitHub: [github.com/clifordnchotie](https://github.com/clifordnchotie)
- 📍 Location: Bayreuth, Bavaria, Germany

---

## 📄 License

This portfolio is open-source under the MIT License. Feel free to fork and customize!

---


---

**Built with 💙 in Bayreuth •
