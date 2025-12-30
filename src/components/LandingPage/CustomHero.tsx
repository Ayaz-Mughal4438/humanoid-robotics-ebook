/**
 * CustomHero component for the landing page.
 *
 * This component displays the main hero section with a title, subtitle,
 * and call-to-action buttons.
 * T085-T092: Smart "Get Started with AI" button that expands chatbot for authenticated users
 */
import React from 'react';
import Link from '@docusaurus/Link';
import { useHistory } from '@docusaurus/router';
import { useAuth } from '../../hooks/useAuth';
import { useChatbotControl } from '../../hooks/useChatbotControl';
import styles from './LandingPage.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export function CustomHero() {
  // T085-T086: Import hooks for auth state and chatbot control
  const { isAuthenticated } = useAuth();
  const { setIsExpanded } = useChatbotControl();
  const basePath = useBaseUrl("auth/signup")
  const history = useHistory();

  // T088: Handle "Get Started with AI" button click with context-aware behavior
  const handleGetStarted = () => {
    if (!isAuthenticated) {
      // T089: Not authenticated → navigate to signup

      history.push(basePath);

    } else {
      // T090: Authenticated → expand chatbot
      setIsExpanded(true);
    }
  };

  return (
    <div className={styles.heroBanner}>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>
          Master the Future of Physical AI
        </h1>
        <p className={styles.heroSubtitle}>
          The comprehensive open-source textbook for building, training, and deploying autonomous humanoid robots.
          From ROS 2 fundamentals to advanced vision-language-action models—learn the complete stack with AI-powered assistance.
        </p>
        <div className={styles.buttons}>
          <Link
            className={`button button--primary button--lg ${styles.heroButton}`}
            to="/humanoid-robotics-ebook/module1-ros2/chapter1-introduction">
            Explore Modules
          </Link>
          <button
            className={`button button--secondary button--lg ${styles.heroButton}`}
            onClick={handleGetStarted}
            aria-label={isAuthenticated ? "Open AI chatbot assistant" : "Sign up to access AI chatbot"}
            type="button">
            {isAuthenticated ? 'Ask AI Assistant' : 'Start Learning Free'}
          </button>
        </div>
      </div>
    </div>
  );
}
