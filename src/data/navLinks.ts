type navLinksType = {
  name: string;
  href: string;
  blank?: boolean;
};

export const navLinks: Record<string, navLinksType> = {
  docs : {
    name : "ドキュメント",
    href : "/docs",
  },
  download : {
    name : "ダウンロード",
    href : "/download",
  },
  github : {
    name : "GitHub",
    href : "https://github.com/Otdm-Project",
    blank : true,
  },
  privacy : {
    name : "プライバシーポリシー",
    href : "/privacy",
  },
  terms : {
    name : "利用規約",
    href : "/terms",
  },
}