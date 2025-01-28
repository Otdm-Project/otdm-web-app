---
layout: "@/layouts/docsLayout.astro"
title: "エラー | おてだま"
header: "エラー"
author: "Yayuki Kazuha"
authorLink: "https://github.com/Yayuki-Kazuha"
---
## windows

### argsエラー

```txt
[ERROR]: main.go-NoArgsErr: No args execute
[ERROR]: main.go-NoArgsErr: Unknown command
```

引数が間違っているか足りません。

### pidエラー

```txt
[ERROR]: up.go-WritePidErr: エラー文
```

Pidファイルの書き込みが失敗しています。tempフォルダの権限をご確認ください。

### tunnnel起動エラー

```txt
[ERROR]: boot.go-WireguardUpErr: エラー文
```

wireguardtunnelの起動に失敗しています。wireguardを導入しているかご確認ください。

### コマンドエラー

```txt
[ERROR]: cmd.go-CMDERR: エラー文
[ERROR]: cmd.go-CMDOUT: エラー文
[ERROR]: cmd.go-RunAsErr: エラー文
```

内部実行コマンドが失敗しています。
同時に出ているエラーと合わせてご確認ください。

## linux

## その他エラー

その他のエラーに関しては、以下のリンクよりご相談ください。

<https://github.com/orgs/Otdm-Project/discussions>
