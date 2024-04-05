export default function convertingDates(date) {
  const localDate = date.toLocaleDateString("fr");
  const splittedDate = localDate.split("/");
  return `${splittedDate[1]}/${splittedDate[0]}/${splittedDate[2]}`;
}

export function returnTime(date) {
  // Based on UTC Hours
  const period = date.getHours() >= 0 && date.getHours() < 11 ? "am" : "pm";
  return period;
}

export function alreadySigned(sign) {
  if (sign.split(":")[0] === "http") {
    return false;
  } else {
    return true;
  }
}
