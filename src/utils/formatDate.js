export function formatDate(dateInMs) {
  let date = new Date(dateInMs);
  let year = date.getFullYear();
  let month = formatSingleDigit(date.getMonth());
  let day = formatSingleDigit(date.getDate());
  let hours = formatSingleDigit(date.getHours());
  let min = formatSingleDigit(date.getMinutes());

  return `${year}-${month}-${day} | ${hours}:${min}`
}

function formatSingleDigit(type) {
  if (type < 10) {
    return '0' + type
  }

  return type
}
