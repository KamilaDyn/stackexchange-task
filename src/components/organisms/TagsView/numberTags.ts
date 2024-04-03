export function numberTags(page: number, index: number, rowsPerPage: number) {
  return page > 1 ? index + 1 + (page - 1) * rowsPerPage : index + 1;
}
