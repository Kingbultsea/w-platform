interface menuItem {
  value: string,
  icon: string,
  name: string,
  url: string
}

// LogSurveillance
interface lsdata {
  id: number,
  date: number,
  user: string,
  url: string,
  warning: string
}

// SensitiveWord
interface swdata {
  id: string,
  word: string,
  date: number,
  count: number
}
