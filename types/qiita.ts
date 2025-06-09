export interface QiitaArticle {
  id: string;
  title: string;
  url: string;
  created_at: string;
  updated_at: string;
  likes_count: number;
  comments_count: number;
  tags: QiitaTag[];
  user: QiitaUser;
  body: string;
}

export interface QiitaTag {
  name: string;
  versions: string[];
}

export interface QiitaUser {
  id: string;
  name: string;
  profile_image_url: string;
  description?: string;
  items_count: number;
  followers_count: number;
}