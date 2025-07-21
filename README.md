# Glass Effect Library

`backdrop-filter` を使用した Glass Effect 作成ライブラリです。

## ✨ 特徴

- 🎯 **簡単導入** - GUIで調整
- 📱 **レスポンシブ対応** - デスクトップ・タブレット・スマートフォン対応
- 🎛️ **リアルタイム調整** - 5つのパラメーターで細かくカスタマイズ
- 📋 **CSSコピー機能** - 生成されたCSSをコピー
- 🎨 **プリセット** - すぐ使える4つのスタイル

## 🚀 クイックスタート

### CSS実装（推奨）

1. `css-glass.html` をブラウザで開く
2. スライダーでエフェクトを調整
3. 「Copy CSS」ボタンでCSSコードをコピー
4. あなたのプロジェクトに貼り付け

### 基本的な使用方法

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .glass-effect {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.20);
            border-radius: 20px;
            box-shadow: 
                0 8px 32px 0 rgba(31, 38, 135, 0.30),
                inset 0 1px 0 rgba(255, 255, 255, 0.40);
        }
    </style>
</head>
<body>
    <div class="glass-effect">
        <h1>Hello Glass!</h1>
    </div>
</body>
</html>
```

## 🎛️ パラメーター

| パラメーター | 説明 | 範囲 | デフォルト |
|------------|------|------|-----------|
| **不透明度** | 背景の透明度 | 0-50 | 15 |
| **ぼかし** | backdrop-filterのぼかし強度 | 0-50px | 20px |
| **境界線** | 境界線の透明度 | 0-50 | 20 |
| **シャドウ** | 外側の影の透明度 | 0-100 | 30 |
| **ハイライト** | 内側のハイライトの透明度 | 0-100 | 40 |

## 🎨 プリセット

### クリアガラス
- 透明感が高く、微細な効果
- 用途: 軽いオーバーレイ、ナビゲーション

### すりガラス  
- 強いぼかしと不透明度
- 用途: モーダル、プライバシー保護

### カード
- カードコンポーネントに最適化
- 用途: 商品カード、記事カード、プロフィールカード

### モーダル
- ダイアログやオーバーレイ向け
- 用途: モーダルダイアログ、ポップアップ、通知

## 📁 ファイル構成

```
glass/
├── README.md                # このファイル
├── index.html               # メインのCSS実装（推奨）
└── assets/
    ├── css/
    │   └── style.css        # スタイルシート
    ├── js/
    │   └── script.js        # JavaScript
    └── images/
        └── flower.jpg       # 背景画像
```

## 🔧 カスタマイズ

### CSS Variables を使用した動的制御

```css
.glass-effect {
    --glass-opacity: 0.15;
    --glass-blur: 20px;
    --border-opacity: 0.20;
    --shadow-opacity: 0.30;
    --highlight-opacity: 0.40;
    
    background: rgba(255, 255, 255, var(--glass-opacity));
    backdrop-filter: blur(var(--glass-blur));
    /* ... */
}
```

### JavaScript での動的変更

```javascript
function updateGlassEffect(opacity, blur, border, shadow, highlight) {
    const element = document.querySelector('.glass-effect');
    element.style.setProperty('--glass-opacity', opacity / 100);
    element.style.setProperty('--glass-blur', blur + 'px');
    element.style.setProperty('--border-opacity', border / 100);
    element.style.setProperty('--shadow-opacity', shadow / 100);
    element.style.setProperty('--highlight-opacity', highlight / 100);
}
```

## 📄 ライセンス

MIT License - 商用・非商用問わず自由にご利用いただけます。