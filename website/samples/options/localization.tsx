import { useState } from "react";
import { DateSelect } from "react-ymd-date-select/presets/vanilla";
import frLocale from "date-fns/locale/fr";
import ruLocale from "date-fns/locale/ru";
import deLocale from "date-fns/locale/de";
import enLocale from "date-fns/locale/en-US";
import jaLocale from "date-fns/locale/ja";

const localeMap = {
  en: enLocale,
  fr: frLocale,
  ru: ruLocale,
  de: deLocale,
  ja: jaLocale,
};

type LocaleKey = keyof typeof localeMap;

function Sample() {
  const [locale, setLocale] = useState<LocaleKey>("en");
  const [date, setDate] = useState<string>("");

  return (
    <div>
      <div>
        <label>
          Locale:
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as LocaleKey)}
          >
            {Object.keys(localeMap).map((localeItem) => (
              <option key={localeItem} value={localeItem}>
                {localeItem}
              </option>
            ))}
          </select>
        </label>
      </div>

      <DateSelect
        value={date}
        onChange={setDate}
        defaultMonth="now"
        locale={localeMap[locale]}
      />
      <p>Selected date is: {date}</p>
    </div>
  );
}

export default Sample;
