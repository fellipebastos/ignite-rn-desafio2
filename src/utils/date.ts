export function getTodayHour() {
  return new Date()
    .toTimeString()
    .split(' ')[0]
    .split(':')
    .slice(0, 2)
    .join(':')
}

export function formatDateToEN(date: string) {
  return date.split('/').reverse().join('-')
}

export function formatDateToBR(date: string) {
  return date.split('-').reverse().join('/')
}
