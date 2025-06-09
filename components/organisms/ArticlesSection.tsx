'use client';

import React from 'react';
import { useQiitaArticles } from '@/hooks/useQiitaArticles';
import { ExternalLink, Calendar, Heart, MessageSquare, AlertCircle } from 'lucide-react';

const QIITA_USERNAME = process.env.NEXT_PUBLIC_QIITA_USERNAME || 'your_username';

export const ArticlesSection: React.FC = () => {
  const { articles, isLoading, error, isEmpty } = useQiitaArticles(QIITA_USERNAME);
  const hasValidUsername = QIITA_USERNAME && QIITA_USERNAME !== 'your_username';

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <section className="section" id="articles">
      <div className="container">
        <div className="mb-12">
          <h2 className="mb-4">Latest Articles</h2>
          <p className="text-secondary leading-relaxed max-w-2xl">
            Sharing knowledge and insights about modern web development, 
            best practices, and emerging technologies.
          </p>
        </div>

        {!hasValidUsername && (
          <div className="card text-center">
            <AlertCircle className="w-8 h-8 text-secondary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Configure Qiita Username</h3>
            <p className="text-secondary text-sm mb-4">
              Set your Qiita username in the .env.local file to display your articles.
            </p>
            <code className="text-xs bg-bg-code px-2 py-1 rounded text-accent">
              NEXT_PUBLIC_QIITA_USERNAME=your_username
            </code>
          </div>
        )}

        {hasValidUsername && isLoading && (
          <div className="text-center py-12">
            <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
            <p className="text-secondary">Loading articles...</p>
          </div>
        )}

        {hasValidUsername && error && (
          <div className="card text-center">
            <AlertCircle className="w-8 h-8 text-secondary mx-auto mb-3" />
            <p className="text-secondary mb-4">Failed to load articles</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-primary"
            >
              Try Again
            </button>
          </div>
        )}

        {hasValidUsername && isEmpty && !isLoading && (
          <div className="card text-center">
            <p className="text-secondary mb-4">No articles found</p>
            <a
              href={`https://qiita.com/${QIITA_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Qiita Profile
            </a>
          </div>
        )}

        {hasValidUsername && !isLoading && !error && articles.length > 0 && (
          <>
            <div className="grid grid-cols-3 gap-6 mb-8">
              {articles.slice(0, 6).map((article) => (
                <article key={article.id} className="card">
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
              ))}
            </div>

            <div className="text-center">
              <a
                href={`https://qiita.com/${QIITA_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <ExternalLink className="w-4 h-4" />
                View All Articles on Qiita
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};