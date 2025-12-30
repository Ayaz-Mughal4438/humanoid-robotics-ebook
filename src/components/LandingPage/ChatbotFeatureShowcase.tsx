/**
 * ChatbotFeatureShowcase component
 *
 * This component showcases the key features of the RAG chatbot and the learning platform.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './LandingPage.module.css';

const features = [
  {
    title: 'AI-Powered Learning',
    description: 'Leverage advanced RAG technology to get instant, context-aware answers from comprehensive robotics content.',
    icon: '🤖',
  },
  {
    title: 'Interactive Exploration',
    description: 'Highlight any text and ask focused questions. Our AI understands context and provides detailed explanations.',
    icon: '💬',
  },
  {
    title: 'Comprehensive Coverage',
    description: 'From ROS 2 fundamentals to vision-language-action models. Master the full stack of humanoid robotics.',
    icon: '📚',
  },
  {
    title: 'Digital Twin Simulation',
    description: 'Learn to build realistic simulations and digital twins for testing and validation before real-world deployment.',
    icon: '🔮',
  },
  {
    title: 'Real-World Applications',
    description: 'Bridge theory and practice with hands-on examples, code snippets, and industry-relevant projects.',
    icon: '⚡',
  },
  {
    title: 'Community Driven',
    description: 'Open-source textbook continuously updated with the latest research and best practices in physical AI.',
    icon: '🌐',
  },
];

const stats = [
  { number: '4+', label: 'Comprehensive Modules' },
  { number: '100+', label: 'Pages of Content' },
  { number: '24/7', label: 'AI Assistant Access' },
  { number: '∞', label: 'Learning Possibilities' },
];

export function ChatbotFeatureShowcase() {
  return (
    <div className={styles.featureShowcase}>
      <div className={styles.featureContainer}>
        {/* Section Header */}
        <h2 className={styles.sectionTitle}>Everything You Need to Master Physical AI</h2>
        <p className={styles.sectionSubtitle}>
          A complete learning platform combining cutting-edge content with AI-powered assistance
        </p>

        {/* Feature Grid */}
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={styles.statsSection}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>Ready to Build the Future?</h3>
          <p className={styles.ctaDescription}>
            Join thousands of learners mastering the art and science of humanoid robotics. Start your journey today.
          </p>
          <Link
            to="/humanoid-robotics-ebook/module1-ros2/chapter1-introduction"
            className={styles.ctaButton}>
            Start Learning Now
          </Link>
        </div>
      </div>
    </div>
  );
}
