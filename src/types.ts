export interface ReactHookFormCompatibleProps {
  value: string;
  onChange: (value: string) => void;
  name?: string;
  onBlur?: () => void;
}

export interface Option {
  value: string;
  label: string;
}
export type Options = Option[];
