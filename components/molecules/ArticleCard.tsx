'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { QiitaArticle } from '@/types/qiita';
import { ExternalLink, Heart, MessageSquare, Calendar } from 'lucide-react';

interface ArticleCardProps {
  article: QiitaArticle;
  index: number;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, index }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="card h-full flex flex-col group hover:shadow-lg transition-all duration-300"
      >
        <div className="flex flex-col h-full">
          <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag.name}
                className="text-xs px-2 py-1 bg-bg-secondary text-primary rounded-full border border-border-light"
              >
                {tag.name}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-border-light">
            <div className="flex items-center justify-between text-text-secondary text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(article.created_at)}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  {article.likes_count}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  {article.comments_count}
                </span>
                <ExternalLink className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.article>
  );
};