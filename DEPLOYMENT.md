# Deployment Guide

このガイドでは、ポートフォリオサイトをVercelにデプロイし、CI/CDパイプラインをセットアップする方法を説明します。

## 🚀 Vercelデプロイメント

### 1. Vercelアカウントの準備

1. [Vercel](https://vercel.com)にサインアップ
2. GitHubアカウントと連携

### 2. プロジェクトのデプロイ

#### オプション A: Vercel Dashboard経由

1. Vercel Dashboardで「New Project」をクリック
2. GitHubリポジトリを選択
3. プロジェクト設定を確認
4. 環境変数を設定（下記参照）
5. 「Deploy」をクリック

#### オプション B: Vercel CLI経由

```bash
# Vercel CLIをインストール
npm i -g vercel

# プロジェクトディレクトリでログイン
vercel login

# 初回デプロイ
vercel

# 本番デプロイ
vercel --prod
```

### 3. 環境変数の設定

Vercel Dashboardまたは CLI で以下の環境変数を設定：

#### 必須
- `NEXT_PUBLIC_QIITA_USERNAME`: あなたのQiitaユーザー名
- `NEXT_PUBLIC_SITE_URL`: デプロイ先URL (例: https://your-portfolio.vercel.app)

#### オプション
- `NEXT_PUBLIC_GOOGLE_ANALYTICS`: Google Analytics ID
- `NEXT_PUBLIC_VERCEL_ANALYTICS`: Vercel Analytics (1で有効)

## 🔄 CI/CD セットアップ

### GitHub Actions の設定

リポジトリに以下のSecretsを設定：

#### 必須Secrets
- `VERCEL_TOKEN`: Vercel Personal Access Token
- `VERCEL_ORG_ID`: Vercel Organization ID
- `VERCEL_PROJECT_ID`: Vercel Project ID
- `NEXT_PUBLIC_QIITA_USERNAME`: Qiitaユーザー名
- `NEXT_PUBLIC_SITE_URL`: サイトURL

#### Vercel Secretsの取得方法

```bash
# Vercel CLI でプロジェクト情報を確認
vercel link

# Organization ID と Project ID を取得
cat .vercel/project.json
```

```json
{
  "orgId": "your-org-id",
  "projectId": "your-project-id"
}
```

### ワークフローの説明

#### CI ワークフロー (`.github/workflows/ci.yml`)
- PRとmain/developブランチへのpushで実行
- リント、型チェック、ビルド確認
- Lighthouse パフォーマンス監査

#### Deploy ワークフロー (`.github/workflows/deploy.yml`)
- mainブランチへのpushで自動デプロイ
- プロダクション環境へのデプロイ
- デプロイURL の自動通知

## 📊 パフォーマンス監視

### Lighthouse CI

自動パフォーマンス監査設定:

```json
{
  "performance": "> 80%",
  "accessibility": "> 90%",
  "best-practices": "> 80%",
  "seo": "> 80%"
}
```

### Vercel Analytics

```bash
# Vercel Analytics を有効化
vercel env add NEXT_PUBLIC_VERCEL_ANALYTICS
# 値: 1
```

## 🛠️ 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド確認
npm run preview

# リント実行
npm run lint

# 型チェック
npm run type-check

# Vercel 開発環境
npm run vercel:dev

# Lighthouse 監査
npm run lighthouse
```

## 🔧 トラブルシューティング

### ビルドエラー

1. **型エラー**: `npm run type-check` で確認
2. **リントエラー**: `npm run lint:fix` で修正
3. **環境変数**: Vercel Dashboard で設定確認

### デプロイエラー

1. **Secrets設定確認**: GitHub Repository Settings > Secrets
2. **Vercel権限確認**: VercelでGitHub連携状況確認
3. **ログ確認**: GitHub Actions のログ詳細確認

### パフォーマンス問題

1. **Bundle分析**: `npm run build:analyze`
2. **Lighthouse監査**: `npm run lighthouse`
3. **Core Web Vitals**: Vercel Analytics確認

## 📝 デプロイフロー

1. **開発**: `feature/xxx` ブランチで作業
2. **PR作成**: CI ワークフローが実行
3. **レビュー**: コードレビューとパフォーマンス確認
4. **マージ**: `main` ブランチにマージ
5. **自動デプロイ**: 本番環境に自動デプロイ
6. **確認**: デプロイ後の動作確認

## 🌐 カスタムドメイン設定

1. Vercel Dashboard でドメイン追加
2. DNS設定でCNAME/Aレコード設定
3. SSL証明書の自動取得確認

これで完全なCI/CDパイプラインが構築されます！