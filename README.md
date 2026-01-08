# vite-express-demo

## プロジェクト概要
vite-express-demoは、Viteを使用したフロントエンドとExpress.jsを使用したバックエンドで構成されたフルスタックアプリケーションです。このプロジェクトは、以下のディレクトリ構造を持っています。

- **Client**: ReactとTypeScriptを使用したフロントエンドアプリケーション。
  - エントリーポイント: `src/client/main.tsx`
  - ルートコンポーネント: `src/client/App.tsx`
  - スタイルやアセット: `src/client/assets/` など
- **Server**: TypeScriptで記述されたExpress.jsサーバー。
  - エントリーポイント: `src/server/main.ts`

## 開発環境のセットアップ
### 必要なツール
- Node.js (推奨バージョン: 16以上)
- npm または yarn

### インストール手順
1. リポジトリをクローンします。
   ```bash
   git clone https://github.com/SaitamaITWEB/vite-express-demo.git
   ```
2. 必要な依存関係をインストールします。
   ```bash
   cd vite-express-demo/vite-express-project
   npm install
   ```

### 開発サーバーの起動
以下のコマンドで開発サーバーを起動します。
```bash
npm run dev
```
- Vite開発サーバーとExpressサーバーが同時に起動します。
- ブラウザで `http://localhost:3000` にアクセスしてください。

### ビルドと本番環境の起動
1. プロジェクトをビルドします。
   ```bash
   npm run build
   ```
2. 本番サーバーを起動します。
   ```bash
   npm start
   ```

## ディレクトリ構造
```
vite-express-project/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
├── src/
│   ├── client/
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   ├── tsconfig.json
│   │   └── assets/
│   └── server/
│       └── main.ts
```

## 主な依存ライブラリ
- **Vite**: フロントエンドの開発サーバーおよびビルドツール。
- **Express.js**: バックエンドのWebフレームワーク。
- **React**: ユーザーインターフェース構築のためのライブラリ。

## 開発のヒント
- フロントエンドとバックエンド間の通信はHTTPリクエストを使用します。
- 静的アセットは `public/` ディレクトリから提供されます。
- Viteのホットモジュールリプレースメント（HMR）を活用して、フロントエンドの開発効率を向上させてください。

## ライセンス
このプロジェクトのライセンスについては、`LICENSE` ファイルを参照してください。
