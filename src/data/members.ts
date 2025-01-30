import kikkou from '@/assets/header/kikkou.png';
import koushi from '@/assets/header/koushi.png';
import ume from '@/assets/header/ume.png';
import uroko from '@/assets/header/uroko.png';
import ume2 from '@/assets/header/ume2.png';
interface MembersType {
  name: string;
  avatar: string;
  github: string;
  headerImage: ImageMetadata;
  role: string;
  bio: string;
}

export const members: MembersType[] = [
  {
    name: 'ODENKITUNE',
    github: 'https://github.com/ODENKITUNE',
    avatar: 'https://avatars.githubusercontent.com/u/88931859',
    headerImage: kikkou,
    role: 'プロジェクトリーダ',
    bio: 'ネットワークはおもろいぞ',
  },
  {
    name: 'Yayuki Kazuha',
    github: 'https://github.com/Yayuki-Kazuha',
    avatar: 'https://avatars.githubusercontent.com/u/108244620',
    headerImage: ume2,
    role: 'Linuxアプリケーションの開発',
    bio: 'やればやるほど、自分の不出来さを直視させられる一年です。まだまだ半人前。',
  },
  {
    name: 'Haru',
    github: 'https://github.com/Haru-0001',
    avatar: 'https://avatars.githubusercontent.com/u/166319111',
    headerImage:koushi,
    role: 'Webアプリケーションの開発',
    bio: 'ネットワークに興味が出てきた',
  },
  {
    name: 'Moom',
    github: 'https://github.com/Moom51027 ',
    avatar: 'https://avatars.githubusercontent.com/u/168060328',
    headerImage: ume,
    role: 'Windowsアプリケーションの開発',
    bio: '学生生活は資格勉強と課外活動に費やした4年間でした。これからはプログラミングとマネジメントの勉強に力をいれたいです✌️',
  },
  {
    name: 'maritos',
    github: 'https://github.com/maritos-net',
    avatar: 'https://avatars.githubusercontent.com/u/168062362',
    headerImage: uroko,
    role: 'サーバ構築',
    bio: 'リファレンスをみればすべてがわかる',
  }
]