# Cyber Portfolio

サイバーパンク風のモダンなポートフォリオサイト

## 🚀 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion + GSAP
- **State Management**: SWR
- **Deployment**: Vercel

## 📋 機能

- ✨ サイバーパンク風のビジュアルデザイン
- 🎨 ネオンエフェクト・グロー効果
- 📝 Qiita記事の自動取得・表示
- 📱 完全レスポンシブ対応
- ⚡ 高速パフォーマンス (Lighthouse 90+)
- ♿ アクセシビリティ対応

## 🛠️ セットアップ

1. リポジトリをクローン
```bash
git clone https://github.com/yourusername/cyber-portfolio.git
cd cyber-portfolio
```

2. 依存関係をインストール
```bash
npm install
```

3. 環境変数を設定
```bash
cp .env.local.example .env.local
```

`.env.local`ファイルを編集し、以下の値を設定:
- `NEXT_PUBLIC_QIITA_USERNAME`: あなたのQiitaユーザー名
- `NEXT_PUBLIC_SITE_URL`: デプロイ先のURL

4. 開発サーバーを起動
```bash
npm run dev
```

## 📂 プロジェクト構造

```
cyber-portfolio/
├── app/                    # Next.js App Router
├── components/
│   ├── atoms/             # 最小単位コンポーネント
│   ├── molecules/         # 機能単位コンポーネント
│   ├── organisms/         # セクション単位コンポーネント
│   └── effects/           # サイバーエフェクト
├── hooks/                 # カスタムフック
├── lib/                   # ユーティリティ関数
├── types/                 # TypeScript型定義
└── public/                # 静的ファイル
```

## 🎨 カスタマイズ

### カラーパレット変更

`app/globals.css`の`:root`セクションでカラー変数を編集:

```css
:root {
  --primary-blue: #0080FF;
  --accent-cyan: #00FFFF;
  --special-purple: #9D00FF;
}
```

### コンテンツの編集

- **プロフィール**: `components/organisms/AboutSection.tsx`
- **スキル**: `components/organisms/SkillsSection.tsx`
- **SNSリンク**: `components/molecules/SocialLinks.tsx`

## 🚀 デプロイ

Vercelへのデプロイ:

1. [Vercel](https://vercel.com)にログイン
2. 「New Project」をクリック
3. GitHubリポジトリを選択
4. 環境変数を設定
5. 「Deploy」をクリック

## 📝 ライセンス

MIT License

## 🤝 貢献

プルリクエストは歓迎します。大きな変更の場合は、まずissueを作成して変更内容を議論してください。
