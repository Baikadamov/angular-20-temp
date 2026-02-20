export class DateUtils {
  static formatDate(date: string | Date): string {
    return new Intl.DateTimeFormat('ru-RU', { dateStyle: 'medium' }).format(new Date(date));
  }

  static formatDateTime(date: string | Date): string {
    return new Intl.DateTimeFormat('ru-RU', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(date));
  }

  static timeAgo(date: string | Date): string {
    const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
    const rtf = new Intl.RelativeTimeFormat('ru', { numeric: 'auto' });
    if (seconds < 60)   return rtf.format(-seconds, 'second');
    if (seconds < 3600) return rtf.format(-Math.floor(seconds / 60), 'minute');
    if (seconds < 86400) return rtf.format(-Math.floor(seconds / 3600), 'hour');
    return rtf.format(-Math.floor(seconds / 86400), 'day');
  }
}
