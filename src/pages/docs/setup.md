---
layout: "@/layouts/docsLayout.astro"
title: "セットアップ | おてだま"
header: "セットアップ"
author: "ODENKITUNE"
authorLink: "https://github.com/ODENKITUNE"
---

## windows cmd版

### wireguardインストール

- 以下のページにアクセスしwireguardのインストーラーをダウンロード
  <https://www.wireguard.com/install/>
- インストーラを実行する

### otdm cmd版のインストール

- 以下のページにアクセスし最新版のotdm-win-app.zipをダウンロードし解凍する
  <https://github.com/Otdm-Project/otdm-win-app/releases>
- コマンドプロンプトかPowerShellで解凍ファイル内に移動する

  ```bash
  cd path/to/otdm-win-app
  ```

- 起動コマンドを打つ

  ```bash
  ./otdm.exe up
  ```

- 終了は下のコマンドで行う

  ```bash
  ./otdm.exe down
  ```

- 何かしらの理由で強制終了したい場合は以下のコマンドで行う

  ```bash
  ./otdm.exe down -f
  ```
  
## linux cmd版
