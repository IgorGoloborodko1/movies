export const sortByYear = (a: any, b: any) => {
  if (a.year > b.year) {
    return 1
  }
  if (a.year < b.year) {
    return -1
  }
  return 0
}
