// 全站日期按东八区呈现，避免 UTC 构建机上跨日/跨年偏移
const fmt = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Shanghai',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

export function dateParts(date: Date): { y: string; m: string; d: string } {
  const [y, m, d] = fmt.format(date).split('-');
  return { y: y!, m: m!, d: d! };
}

export function ymdSlash(date: Date): string {
  const { y, m, d } = dateParts(date);
  return `${y}/${m}/${d}`;
}

export function zhDate(date: Date): string {
  const { y, m, d } = dateParts(date);
  return `${y} 年 ${Number(m)} 月 ${Number(d)} 日`;
}
