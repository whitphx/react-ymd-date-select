import isDateExists from "date-fns/isExists";

function padZero(value: number, digits: number): string {
  // This implementation is only to be used from `compileDateString()`,
  // assuming the `value` is a positive integer.
  // Negative or floating numbers as inputs can lead to unexpected results.
  return ("0".repeat(digits - 1) + value.toString()).slice(-digits);
}

export function compileDateString(
  year: number,
  month: number,
  day: number
): string | null {
  // Create a date string in the format of `yyyy-MM-dd`.
  // For the detailed specs of the format, see https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#date_strings
  if (!isDateExists(year, month - 1, day)) {
    return null;
  }

  const dateString =
    padZero(year, 4) + "-" + padZero(month, 2) + "-" + padZero(day, 2);

  return dateString;
}

export function parseDateString(dateString: string): {
  year: string;
  month: string;
  day: string;
} {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    return { year: "", month: "", day: "" };
  }

  return {
    year: year.toString(),
    month: month.toString(),
    day: day.toString(),
  };
}

export function getDateString(date: Date): string | null {
  return compileDateString(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  );
}
