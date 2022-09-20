/// <reference types="vite/client" />

// https://github.com/jaredpalmer/formik/issues/3546
declare namespace React {
  type StatelessComponent<P> = React.FunctionComponent<P>;
}
