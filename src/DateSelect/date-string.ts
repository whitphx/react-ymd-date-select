function padZero(value: number, digits: number): string {
  // This implementation is only to be used from `compileDateString()`,
  // assuming the `value` is a positive integer.
  // Negative or floating numbers as inputs can lead to unexpected results.
  return ('0'.repeat(digits - 1) + value.toString()).slice(-digits)
}

export function compileDateString(year: number, month: number, day: number): string | null {
  // Create a date string in the format of `yyyy-MM-dd`.
  // For the detailed specs of the format, see https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#date_strings
  if (month < 1 || 12 < month) {
    return null;
  }
  if (day < 1 || 31 < day) {
    return null;
  }

  const dateString = padZero(year, 4) + "-" + padZero(month, 2) + "-" + padZero(day, 2);

  const dateObj = new Date(dateString);
  if (dateObj.getFullYear() !== year || dateObj.getMonth() !== month - 1 || dateObj.getDate() !== day) {
    return null;
  }

  return dateString
}
