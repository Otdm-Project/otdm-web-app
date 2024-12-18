---
layout: "@/layouts/docsLayout.astro"
title: "コマンド | おてだま"
header: "コマンド一覧"
author: "Yayuki-Kazuha"
authorLink: "https://github.com/Yayuki-Kazuha"
---

Linuxパッケージでは、root権限（もしくはsudoコマンドの使用）を要求します

## 一連の処理を開始

このコマンドによりおてだまのサーバ群と通信が行われ、webサーバを公開できるようにします。

```shell
otdm up
```

## トンネルを切断

このコマンドにより、既存のトンネルを停止し、サーバ公開を終了します。

```shell
otdm down
```

## 接続情報の表示

```shell
otdm status
```

このコマンドにより、接続に利用している情報を確認することができます。確認できる内容には、それぞれの公開鍵や割り当てられたサブドメインなどがあります。

## バージョンの確認

```shell
otdm version
```

## ヘルプ

```shell
otdm
```

```shell
otdm help
```

各種コマンドについて、説明を表示します。
