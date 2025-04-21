import './App.css';

import { Badge } from './components/Badge';
import { Tabs } from './components/Tabs';
import { ProgressBar } from './components/ProgressBar';
import { Navbar } from './components/Navbar';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ColorTokens } from './components/ColorTokens';
import { DesignTokens } from './components/DesignTokens';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';

function App() {
  const [progress, setProgress] = useState(50);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Hide after 5 seconds
    }
  }, [progress]);

  const tabData = [
    {
      label: 'Overview',
      content: (
        <div className="space-y-4">
      <h2 className="text-xl font-bold mb-2">🔍 Project Overview</h2>
      <p>
        The <span className="font-semibold text-secondary">Sumukh Design System</span> is a modular, scalable, and accessible component library built using React, TypeScript, and TailwindCSS (via CDN).
        It’s designed with reusability, responsiveness, and visual clarity in mind, enabling rapid UI development with consistent styling and behavior.
      </p>
      <p>
        This project includes atomic components, design tokens, responsive layout principles, and a focus on WCAG accessibility standards. It supports interactive behavior, consistent theming, and scroll-based UI enhancements.
      </p>
      <p>
        All components are documented and styled according to modern design best practices and are ready to be consumed in real-world design systems and production interfaces.
      </p>
    </div>
      ),
    },
    {
      label: 'Components',
      content: (
        <div className="space-y-6">
      <h2 className="text-xl font-bold mb-2">🧩 Component Breakdown</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Badge:</strong> Semantic and scalable tags used for status indicators and labels. Supports color variants and sizes. Also features an <i>interactive click sound, followed by a ripple effect.</i>
        </li>
        <li>
          <strong>ProgressBar:</strong> Animated progress bar with percentage indicators, dynamic coloring, and celebratory effects when reaching 100%.
        </li>
        <li>
          <strong>Tabs:</strong> Accessible tabbed navigation UI supporting custom content in each pane.
        </li>
        <li>
          <strong>Navbar:</strong> Responsive top navigation bar with scroll tracking, active link highlighting, and mobile menu support.
        </li>
        <li>
          <strong>Color Tokens:</strong> A visual documentation of brand colors, semantic states, text contrast, and surfaces.
        </li>
        <li>
          <strong>Spacing & Typography:</strong> Visual scales for padding/margin and text hierarchy tokens for layout standardization.
        </li>
        <li>
          <strong>Scroll Progress Bar:</strong> A subtle indicator that visually tracks page scroll depth.
        </li>
      </ul>
    </div>
      ),
    },
    {
      label: 'About You',
      content: (
        <div>
          <h2 className="text-xl font-bold mb-2">Sumukh Goutam : Web Developer</h2>
          <ul className="list-disc pl-6 space-y-2">
            <p><i><span className="font-semibold text-secondary">"If you think good design is expensive, you should look at the cost of bad design"</span></i> is what drives me as a FullStack Web Developer.</p>
            <li>👨‍💻 Passionate about creating user-friendly and visually appealing web applications.</li>
            <li>🌐 Experienced in building responsive and accessible UI components.</li>
            <li>🎨 Strong understanding of design principles and best practices.</li>
            <li>📈 Committed to continuous learning and improvement in web development.</li>
            <li>📞 Available for freelance projects and collaborations.</li>
            <p>The urge to standout in the market? ➡️ Contact me on <i>+91 9860934944</i> or <i>sumukhgoutam0804@gmail.com</i></p>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <div className="min-h-screen bg-neutral-900 dark:text-white p-6 pt-32 space-y-20">
        
        <section id="home" className="pt-24">
          <h1 className="text-5xl font-bold text-center">Welcome to Sumukh's Design System</h1>
        </section>

        {/* Tabs Section */}
        <section id="tabs">
          <h1 className="text-4xl font-bold text-center mb-10">Tabs</h1>
          <Tabs tabs={tabData} />
        </section>

        {/* Badge Showcase Section */}
        <section id="badges">
          <h1 className="text-3xl font-bold text-center mb-6">🎖️ Badge Component Showcase</h1>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Badge label="Primary" color="primary" />
            <Badge label="Success" color="success" />
            <Badge label="Warning" color="warning" />
            <Badge label="Error" color="error" />
            <Badge label="Info" color="info" />
            <Badge label="Secondary" color="secondary" />
          </div>

          <div className="flex justify-center gap-4">
            <Badge label="Small" size="sm" />
            <Badge label="Medium" size="md" />
            <Badge label="Large" size="lg" />
          </div>
        </section>

        {/* Static Progress Bars */}
        <section className="mt-10 text-center" id="progress">
          <h1 className="text-3xl font-bold mb-6">📊 Progress Bar Showcase</h1>

          <div className="space-y-6 w-full max-w-xl mx-auto">
            <div>
              <p className="mb-2 text-left text-white/80">Project Completion – 80%</p>
              <ProgressBar value={80} color="success" />
            </div>

            <div>
              <p className="mb-2 text-left text-white/80">Feature Build – 55%</p>
              <ProgressBar value={55} color="primary" />
            </div>

            <div>
              <p className="mb-2 text-left text-white/80">Testing – 30%</p>
              <ProgressBar value={30} color="warning" />
            </div>

            <div>
              <p className="mb-2 text-left text-white/80">Bug Fixing – 10%</p>
              <ProgressBar value={10} color="error" />
            </div>
          </div>
        </section>

        {/* Interactive Progress Control with Confetti */}
        <section className="mt-16 max-w-xl mx-auto relative" id="interactive">
          {/* Confetti positioned to just this section */}
          {showConfetti && (
            <div className="absolute inset-0 z-10 pointer-events-none">
              <Confetti
                width={windowSize.width}
                height={250}
                numberOfPieces={250}
                recycle={false}
              />
            </div>
          )}

          <h1 className="text-3xl font-bold mb-6 text-center relative z-20">🎚️ Interactive Progress Control</h1>

          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-lg shadow-lg space-y-6 relative z-20">
            <ProgressBar value={progress} />

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <label className="text-white/80 text-sm w-full sm:w-1/2">
                Adjust with Slider:
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={(e) => setProgress(Number(e.target.value))}
                  className="w-full mt-1 accent-blue-500"
                />
              </label>

              <label className="text-white/80 text-sm w-full sm:w-1/2">
                Or Type Percentage:
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={(e) => setProgress(Number(e.target.value))}
                  className="w-full mt-1 px-2 py-1 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </label>
            </div>
          </div>
        </section>
        
        <ColorTokens />

        <DesignTokens />

        

      </div>
    </>
  );
}

export default App;
