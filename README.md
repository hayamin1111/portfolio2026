# Hayakawa Portfolio

マークアップ・フロントエンドの制作経験と、個人制作物を紹介するポートフォリオサイトです。

Next.js App Routerを使用し、プロフィール・経歴・制作物を掲載しています。制作物の情報はmicroCMSで管理し、カテゴリ別の一覧と詳細ページに表示しています。

## 主な機能

- microCMSと連携した制作物の一覧・詳細表示
- アプリケーション・Webサイト・試作のカテゴリ別表示
- 制作物ごとの使用技術タグの表示
- MotionでのFVアニメーション
- localStorageでのFVアニメーションの再生タイミング制御

## 技術スタック

| 分類      | 技術                          |
| --------- | ----------------------------- |
| Framework | Next.js 16（App Router）      |
| UI        | React 19                      |
| Language  | TypeScript                    |
| Styling   | CSS Modules                   |
| CMS       | microCMS / microcms-js-sdk    |
| Animation | Motion                        |
| Utilities | clsx / modern-normalize       |
| Quality   | ESLint / Prettier / Stylelint |

## 設計・実装のポイント

### 制作物の情報をmicroCMSで管理

制作物のタイトル・概要・画像・本文・使用技術・外部リンクをmicroCMSから取得し、一覧と詳細ページに表示しています。

CMSとの通信は`_libs/microcms.ts`にまとめ、ページ側で取得条件と表示方法を決める構成です。

```text
Server Componentのページ
        ↓
_libs/microcms.ts
        ↓
microCMS
        ↓
取得したデータを一覧・詳細に表示
```

一覧では取得フィールド・件数・並び順を指定し、取得した制作物をカテゴリ別に表示しています。

### Server / Client Componentsの使い分け

ページや共通レイアウトはServer Componentを基本とし、状態管理やブラウザAPIを使う部分にClient Componentを配置しています。

| コンポーネント | Client Componentにする理由                 |
| -------------- | ------------------------------------------ |
| FirstView      | タイトル演出の進行管理とlocalStorageの利用 |
| Gnav           | メニューの開閉状態とスクロール固定の制御   |
| Logo           | 現在のパスに応じたリンクの切り替え         |

例えば、ロゴの表示切り替えは`Logo`内で完結させ、Header全体をClient Componentにしない構成にしています。

### CSSカスタムプロパティで共通UIを調整

色・余白・文字サイズをCSSカスタムプロパティで管理しています。

共通UIの余白や配置をページごとに変えたい場合も、詳細度を上げて上書きするのではなく、調整用の変数を渡す方法を採用しています。

```css
.buttonArea {
  /* var()の第2引数でフォールバックを指定 */
  justify-content: var(--button-area-justify-content, flex-start);
  margin-block-start: var(--button-area-margin, var(--space-lg));
}
```

指定がない場合は共通の値を使い、必要なページだけ余白や配置を変更します。共通スタイルとページ固有の調整を分け、CSSの読み込み順への依存を抑えています。

### 初回訪問時のみのFV演出

トップページファーストビューのアニメーションは、初回訪問のみの実行としています。なお、sessionStorageを使い、前回の訪問から3時間経過で再表示されるようにしました。

再生の判定状態は次の3つに分けて管理しています。

- `checking`：保存時刻の確認前
- `play`：演出を再生
- `skip`：演出を省略

ブラウザAPIへのアクセスはマウント後に行い、文字の切り替えに使用したタイマーはEffectのクリーンアップで解除しています。

## ディレクトリ構成

```text
src/app
├── _components/           # 共通UI・トップページのみのUI
│   ├── Button/
│   ├── ButtonArea/
│   ├── Card/
│   ├── Deco/
│   ├── FirstView/
│   ├── Footer/
│   ├── Gnav/
│   ├── Header/
│   ├── Heading/
│   ├── Hero/
│   ├── icons/
│   ├── Logo/
│   ├── Tags/
│   └── TextLink
├── _constants/
│   └── index.ts           # 定数一覧
├── _libs/
│   └── microcms.ts        # CMSとの通信
├── _types/
│   └── works.ts           # 制作物・使用技術の型
├── about/
│   ├── _components/       # ディレクトリごとのUI
│   └── page.tsx           # 自己紹介
├── works/
│   ├── [slug]/
│   │   └── page.tsx       # 制作物詳細
│   └── page.tsx           # 制作物一覧
├── globals.css
├── layout.tsx
├── not-found.tsx
└── page.tsx
```

## 今後の改善

- 制作物ごとの動的metadata・OGPの設定
- CMSの通信エラーと、コンテンツが存在しない場合の表示の分離
- ナビゲーションのフォーカス制御とEscapeキーによる終了
