---
layout: "@/layouts/docsLayout.astro"
title: "セットアップ | おてだま"
header: "セットアップ"
author: "ODENKITUNE"
authorLink: "https://github.com/ODENKITUNE"
---

## windows CUI版

### wireguardインストール

1. 以下のページにアクセスしwireguardのインストーラーをダウンロード
  <https://www.wireguard.com/install/>

2. インストーラを実行する

### otdm windows CUI版のインストール

1. 以下のページにアクセスし最新版のotdm-win-app.zipをダウンロードし解凍する
  <https://github.com/Otdm-Project/otdm-win-app/releases>

2. コマンドプロンプトかPowerShellで解凍ファイル内に移動する

    ```bash
    cd path/to/otdm-win-app
    ```

3. 起動コマンドを打つ

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

---

## linux CUI版

本アプリケーションはUbuntuなどのDebian系Linuxディストリビューション向けに開発されており、CUI版とGUI版の両方を提供しています

### aptを用いてotdm linux CUI版をインストール

UbuntuなどのDebian系ディストリビューションでの、aptを用いたインストールの環境を準備中です
もう少々お待ちください

### Webからotdm linux CUI版をインストール

GitHubのリリースページから最新のバージョンをダウンロードしてインストールすることも可能です。

1. [GitHubリリースページ](https://github.com/example/project/releases)にアクセスします。
2. 必要なバイナリをダウンロードします（例: "app-cui-linux-amd64"）。
3. ダウンロードしたバイナリに実行権限を付与します。

    ```bash
    chmod +x app-cui-linux-amd64
    sudo mv app-cui-linux-amd64 /usr/local/bin/app
    ```

## linux GUI

### aptを用いてotdm linux GUI版をインストール

CUI版と同様にUbuntuなどのDebian系ディストリビューションでの、aptを用いたインストールの環境を準備中です
もう少々お待ちください

### Webからotdm linux GUI版をインストール

GitHubリリースページからGUI版のアプリケーションをダウンロードしてインストールできます。

1. [GitHubリリースページ](https://github.com/example/project/releases)にアクセスします。
2. 必要なGUIバージョンをダウンロードします（例: "app-gui-linux-amd64.deb"）。
3. ダウンロードした ".deb" ファイルをインストールします。

    ```bash
    sudo dpkg -i app-gui-linux-amd64.deb
    sudo apt-get install -f
    ```

### 注意事項

- aptでインストールする場合、自動的にインストールされます。
- 最新情報やサポートについては、[公式Webページ](https://example.com)をご覧ください。
