'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArticleCard } from '@/components/molecules/ArticleCard';
import { useQiitaArticles } from '@/hooks/useQiitaArticles';
import { useInView } from '@/hooks/useInView';
import { ExternalLink, Loader2, AlertCircle } from 'lucide-react';

const QIITA_USERNAME = process.env.NEXT_PUBLIC_QIITA_USERNAME || 'your_username';

export const ArticlesSection: React.FC = () => {
  const { ref, isInView } = useInView();
  const { articles, isLoading, error, isEmpty } = useQiitaArticles(QIITA_USERNAME);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const hasValidUsername = QIITA_USERNAME && QIITA_USERNAME !== 'your_username';

  return (
    <section id="articles" className="section bg-bg-secondary">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="mb-6">Latest Articles</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Sharing knowledge and insights about modern web development,
              best practices, and emerging technologies.
            </p>
          </motion.div>

          {!hasValidUsername && (
            <motion.div
              variants={itemVariants}
              className="max-w-md mx-auto text-center py-16"
            >
              <AlertCircle className="w-12 h-12 text-warning mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Configure Qiita Username</h3>
              <p className="text-text-secondary text-sm mb-4">
                Set your Qiita username in the .env.local file to display your articles.
              </p>
              <code className="inline-block px-3 py-1 bg-bg-tertiary text-sm rounded border">
                NEXT_PUBLIC_QIITA_USERNAME=your_username
              </code>
            </motion.div>
          )}

          {hasValidUsername && isLoading && (
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center py-20"
            >
              <Loader2 className="w-8 h-8 text-primary animate-spin mb-4" />
              <p className="text-text-secondary">Loading articles...</p>
            </motion.div>
          )}

          {hasValidUsername && error && (
            <motion.div
              variants={itemVariants}
              className="text-center py-20"
            >
              <AlertCircle className="w-12 h-12 text-danger mx-auto mb-4" />
              <p className="text-text-secondary mb-4">Failed to load articles</p>
              <button
                onClick={() => window.location.reload()}
                className="btn btn-secondary"
              >
                Try Again
              </button>
            </motion.div>
          )}

          {hasValidUsername && isEmpty && !isLoading && (
            <motion.div
              variants={itemVariants}
              className="text-center py-20"
            >
              <p className="text-text-secondary mb-4">No articles found</p>
              <a
                href={`https://qiita.com/${QIITA_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary inline-flex items-center gap-2"
              >
                Visit Qiita Profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          )}

          {hasValidUsername && !isLoading && !error && articles.length > 0 && (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {articles.slice(0, 6).map((article, index) => (
                  <motion.div
                    key={article.id}
                    variants={itemVariants}
                  >
                    <ArticleCard
                      article={article}
                      index={index}
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={itemVariants}
                className="text-center"
              >
                <a
                  href={`https://qiita.com/${QIITA_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary inline-flex items-center gap-2"
                >
                  View All Articles on Qiita
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};