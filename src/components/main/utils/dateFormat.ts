/**
 * yyyy-mm-ddをyyyy年mm月dd日に変換する
 * @param dateStr yyyy-mm-dd
 * @returns yyyy年mm月dd日
 */
export function formatDateToJP(dateStr: string): string {
  if (!dateStr) return '';
  
  const [year, month, day] = dateStr.split('-');
  return `${year}年${month}月${day}日`;
}