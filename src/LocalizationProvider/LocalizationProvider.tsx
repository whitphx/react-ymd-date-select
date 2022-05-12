// Ref: https://github.com/mui/mui-x/blob/5dc5bd4b04eecf21c45cf6ea1169727ba5ab3be3/packages/x-date-pickers/src/LocalizationProvider/LocalizationProvider.tsx

import * as React from "react";
import { DateIOFormats } from "@date-io/core/IUtils";
import { IUtils } from "@date-io/core/IUtils";

type DateAdapter<TDate> = IUtils<TDate>;

export interface DateAdapterContextValue<TDate> {
  utils: DateAdapter<TDate>;
}

export const DateAdapterContext =
  React.createContext<DateAdapterContextValue<unknown> | null>(null);
if (process.env.NODE_ENV !== "production") {
  DateAdapterContext.displayName = "DateAdapterContext";
}

export interface LocalizationProviderProps {
  children?: React.ReactNode;
  /** DateIO adapter class function */
  dateAdapter: new (...args: any) => DateAdapter<unknown>;
  /** Formats that are used for the child dropdown */
  dateFormats?: Partial<DateIOFormats>;
  /**
   * Date library instance you are using, if it has some global overrides
   * ```jsx
   * dateLibInstance={momentTimeZone}
   * ```
   */
  dateLibInstance?: any;
  /** Locale for the date library you are using */
  locale?: string | object;
}

/**
 * @ignore - do not document.
 */
export function LocalizationProvider(props: LocalizationProviderProps) {
  const {
    children,
    dateAdapter: Utils,
    dateFormats,
    dateLibInstance,
    locale,
  } = props;
  const utils = React.useMemo(
    () =>
      new Utils({ locale, formats: dateFormats, instance: dateLibInstance }),
    [Utils, locale, dateFormats, dateLibInstance]
  );

  const contextValue: DateAdapterContextValue<unknown> = React.useMemo(() => {
    return { utils };
  }, [utils]);

  return (
    <DateAdapterContext.Provider value={contextValue}>
      {children}
    </DateAdapterContext.Provider>
  );
}
