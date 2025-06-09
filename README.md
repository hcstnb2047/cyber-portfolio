# Modern Portfolio

Notion風のクリーンでシンプルなポートフォリオサイト

## 🚀 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion + GSAP
- **State Management**: SWR
- **Deployment**: Vercel

## 📋 機能

- ✨ Notion風のクリーンなデザイン
- 📖 読みやすいタイポグラフィ
- 📝 Qiita記事の自動取得・表示
- 📱 完全レスポンシブ対応
- ⚡ 高速パフォーマンス (Lighthouse 90+)
- ♿ アクセシビリティ対応
- 🚀 Vercel自動デプロイ & CI/CD

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
cp .env.example .env.local
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

### Vercelへの自動デプロイ

このプロジェクトはCI/CDパイプラインが設定されています：

1. **初回セットアップ**: [DEPLOYMENT.md](./DEPLOYMENT.md) を参照
2. **自動デプロイ**: `main`ブランチへのpushで自動実行
3. **PR確認**: Pull Request作成時に自動チェック

### 手動デプロイ

```bash
# Vercel CLI使用
npm run vercel:deploy

# または直接
vercel --prod
```

詳細は [DEPLOYMENT.md](./DEPLOYMENT.md) をご覧ください。

## 📝 ライセンス

MIT License

## 🤝 貢献

プルリクエストは歓迎します。大きな変更の場合は、まずissueを作成して変更内容を議論してください。
