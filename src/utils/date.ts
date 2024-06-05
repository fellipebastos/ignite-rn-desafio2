export function getTodayDate() {
  return new Date().toLocaleDateString('pt-BR').split(' ')[0]
}

export function getTodayHour() {
  return new Date()
    .toTimeString()
    .split(' ')[0]
    .split(':')
    .slice(0, 2)
    .join(':')
}
