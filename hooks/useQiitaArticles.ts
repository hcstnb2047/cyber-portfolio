import useSWR from 'swr';
import { fetchQiitaArticles } from '@/lib/qiita';
import { QiitaArticle } from '@/types/qiita';

export const useQiitaArticles = (username: string) => {
  const { data, error, isLoading } = useSWR(
    username ? `/qiita/${username}` : null,
    () => fetchQiitaArticles(username),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 1000 * 60 * 30, // 30分キャッシュ
    }
  );

  return {
    articles: data || [],
    isLoading,
    error: error?.message || null,
    isEmpty: !isLoading && (!data || data.length === 0)
  };
};