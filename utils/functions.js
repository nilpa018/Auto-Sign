export default function convertingDates(date) {
  const localDate = date.toLocaleDateString("fr");
  const splittedDate = localDate.split("/");
  return `${splittedDate[1]}/${splittedDate[0]}/${splittedDate[2]}`;
}

export function timeHour(date) {
  const timeZone = `${date.getHours()}:${date.getMinutes()}`;
  return timeZone;
}

export function returnTime(date) {
  const period = date.getHours() >= 0 && date.getHours() < 13 ? "am" : "pm";
  return period;
}

export function alreadySigned(sign) {
  if (sign.split(":")[0] === "http") {
    return false;
  } else {
    return true;
  }
}
