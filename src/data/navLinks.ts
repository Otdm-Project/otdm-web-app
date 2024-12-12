type navLinksType = {
  name: string;
  href: string;
  blank?: boolean;
  style?: string;
  icon?: string;
};

export const navLinks: Record<string, navLinksType> = {
  docs : {
    name : "ドキュメント",
    href : "/docs",
    style : "btn-docs",
    icon : "i-tabler:notes",
  },
  download : {
    name : "ダウンロード",
    href : "/download",
    style : "btn-download",
    icon : "i-tabler:download",
  },
  github : {
    name : "GitHub",
    href : "https://github.com/Otdm-Project",
    blank : true,
    style : "btn-github",
    icon : "i-custom:github",
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