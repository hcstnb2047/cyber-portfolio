import axios from 'axios';
import { QiitaArticle } from '@/types/qiita';

export const fetchQiitaArticles = async (username: string): Promise<QiitaArticle[]> => {
  try {
    if (!username || username === 'your_username' || username === 'your_actual_qiita_username') {
      console.warn('Qiita username not configured. Please set NEXT_PUBLIC_QIITA_USERNAME in .env.local');
      return [];
    }

    const response = await axios.get(
      `https://qiita.com/api/v2/users/${username}/items`,
      {
        params: { page: 1, per_page: 12 },
        headers: { 'Content-Type': 'application/json' }
      }
    );
    return response.data;
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'response' in error) {
      const axiosError = error as { response?: { status?: number } };
      if (axiosError.response?.status === 404) {
        console.error(`Qiita user "${username}" not found`);
        return [];
      }
    }
    console.error('Qiita API Error:', error);
    return [];
  }
};