import { useState } from "react";
import frLocale from "date-fns/locale/fr";
import ruLocale from "date-fns/locale/ru";
import deLocale from "date-fns/locale/de";
import enLocale from "date-fns/locale/en-US";
import jaLocale from "date-fns/locale/ja";
import { LocalizationProvider } from "react-ymd-date-select";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";
/* Select the appropriate adapter for the library you are using as below. */
import DateAdapter from "react-ymd-date-select/adapters/date-fns";
// import DateAdapter from "react-ymd-date-select/adapters/dayjs";
// import DateAdapter from "react-ymd-date-select/adapters/luxon";
// import DateAdapter from "react-ymd-date-select/adapters/date-fns-jalali";
// import DateAdapter from "react-ymd-date-select/adapters/jalaali";

const localeMap = {
  en: enLocale,
  fr: frLocale,
  ru: ruLocale,
  de: deLocale,
  ja: jaLocale,
};

type Locale = keyof typeof localeMap;

function Sample() {
  const [locale, setLocale] = useState<Locale>("en");
  const [date, setDate] = useState<string>("");

  return (
    <div>
      <div>
        <label>
          Locale:
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as Locale)}
          >
            {Object.keys(localeMap).map((localeItem) => (
              <option key={localeItem} value={localeItem}>
                {localeItem}
              </option>
            ))}
          </select>
        </label>
      </div>

      <LocalizationProvider
        dateAdapter={DateAdapter}
        locale={localeMap[locale]}
      >
        <DateSelect value={date} onChange={setDate} defaultMonth="now" />
        <p>Selected date is: {date}</p>
      </LocalizationProvider>
    </div>
  );
}

export default Sample;
