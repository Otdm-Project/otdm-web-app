---
layout: "@/layouts/docsLayout.astro"
title: "エラー | おてだま"
header: "エラー一覧(Linux)"
author: "Yayuki-Kazuha"
authorLink: "https://github.com/Yayuki-Kazuha"
---
## 実装中
### ログとエラーログについて
ログは標準では以下のディレクトリに記録されます
- 保存先
```bash
/var/log/otdm-package.log
```
- フォーマット
```plaintext
mm dd yyyy hh:mm:ss ログレベル 実行ユーザー : メッセージ
```
ログレベルの意味は以下のとおりです
- `INFO`:情報・正常動作
- `WARN`:警告
- `ERRO`:エラー

### エラーメッセージ例
以下に示すのは典型的なエラー例です。
1. Websocket接続エラー
   - 原因：ネットワークの問題やおてだまサーバ群のWebsocketサーバが応答できていない場合に発生します
   - メッセージの例：`Error during WebSocket connection: Connection refused`
   - 対応例
    1. ネットワーク接続を確認してください。
    2. おてだまのwebページなどを確認し、インフォメーションがないか確認をしてください。サーバ群についてなにかお知らせがあるかもしれません