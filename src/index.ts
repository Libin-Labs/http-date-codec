export function formatHttpDate(date: Date): string {
  if (!(date instanceof Date) || !Number.isFinite(date.getTime()))
    throw new TypeError('Expected a valid Date');
  return date.toUTCString();
}
export function parseHttpDate(text: string): Date {
  if (typeof text !== 'string') throw new TypeError('Expected date text');
  const time = Date.parse(text);
  if (!Number.isFinite(time)) throw new RangeError('Invalid HTTP date');
  const date = new Date(time);
  if (date.toUTCString() !== text) throw new RangeError('Expected canonical IMF-fixdate');
  return date;
}
