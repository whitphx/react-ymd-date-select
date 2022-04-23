// This is needed for React 18: https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
// Though react-testing-library is expected to set this config automatically (https://github.com/testing-library/react-testing-library/issues/509#issuecomment-917989936),
// actually it seems not to work with Vitest (https://github.com/vitest-dev/vitest/issues/1146),
// so here we set it manually.
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
