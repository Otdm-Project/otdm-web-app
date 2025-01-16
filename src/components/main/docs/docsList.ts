import { docsOrder } from "@/data/orders/docsOrder";

interface DocDataType {
  url: string;
  file: string;
  frontmatter: {
    header: string;
  }
}

export function docsList(): DocDataType[] {
  //ドキュメントのデータを取得
  const docs = Object.values(import.meta.glob<DocDataType>('@/pages/docs/*.md', {eager : true}));
  
  //ファイル名を取得
  const getFileName = (path: string | undefined): string => {
    if (!path) return '';
    const parts = path.split('/');
    const fileName = parts[parts.length - 1];
    return fileName.replace('.md', '');
  };
  
  //ドキュメントの表示順に従ってソート
  const getOrderIndex = (doc: DocDataType): number => {
    //ドキュメントの表示順を取得
    const order = docsOrder;
    try {
      const frontmatter = doc.frontmatter;
      const file = doc.file;
      // frontmatterまたはfileが存在しない場合は最後尾に配置
      if (!frontmatter || !file) return order.length;
      const fileName = getFileName(file);
      const index = order.indexOf(fileName);
    // order配列内に存在しない場合は最後尾に、存在する場合はその位置を返す
      return index === -1 ? order.length : index;
    } catch (error) {
      //エラーが発生した場合、最後尾に配置
      console.error('Error: getOrderIndexError', error);
      return order.length;
    }
  };

  return docs.sort((a, b) => getOrderIndex(a) - getOrderIndex(b));
}