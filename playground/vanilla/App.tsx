import VanillaVanillaBasicSample from "./vanilla/basic";
import VanillaReactHookFormSample from "./react-hook-form";
import VanillaReactHookFormWithDefaultValueSample from "./react-hook-form-default-value";
import VanillaReactHookFormWithCustomComponentSample from "./react-hook-form-with-custom-component";
import VanillaReactHookFormWithReusedPresetComponentSample from "./react-hook-form-with-reused-preset-component";
import VanillaReactHookFormWithPartialDefaultValueSample from "./react-hook-form-with-partial-default-value";
import VanillaReactHookFormHideDaySample from "./react-hook-form-hide-day";

function App() {
  return (
    <div>
      <VanillaVanillaBasicSample />
      <hr />
      <VanillaReactHookFormSample />
      <VanillaReactHookFormWithDefaultValueSample />
      <VanillaReactHookFormWithCustomComponentSample />
      <VanillaReactHookFormWithReusedPresetComponentSample />
      <VanillaReactHookFormWithPartialDefaultValueSample />
      <VanillaReactHookFormHideDaySample />
    </div>
  );
}

export default App;
