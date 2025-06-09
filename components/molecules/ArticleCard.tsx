'use client';

import React from 'react';
import { QiitaArticle } from '@/types/qiita';
import { ExternalLink, Heart, MessageSquare, Calendar } from 'lucide-react';

interface ArticleCardProps {
  article: QiitaArticle;
  index: number;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <article className="card">
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <h3 className="font-semibold mb-3 line-clamp-2 hover:text-accent transition-colors">
          {article.title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag.name}
              className="text-xs px-2 py-1 bg-bg-secondary text-secondary rounded-md"
            >
              {tag.name}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-secondary">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(article.created_at)}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Heart className="w-3 h-3" />
              {article.likes_count}
            </span>
            <span className="flex items-center gap-1">
              <MessageSquare className="w-3 h-3" />
              {article.comments_count}
            </span>
            <ExternalLink className="w-3 h-3" />
          </div>
        </div>
      </a>
    </article>
  );
};