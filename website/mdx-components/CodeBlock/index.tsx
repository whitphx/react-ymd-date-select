import React from "react";
import CodePreview from "../../components/CodePreview";

// Ref: https://github.com/chakra-ui/chakra-ui-docs/blob/ab7f4cf6d5b664cddfc47db90ecbf9f0dc28738a/src/components/mdx-components/codeblock/codeblock.tsx

function CodeBlock(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLPreElement>,
    HTMLPreElement
  >
) {
  const children = props.children;

  if (!React.isValidElement(children)) {
    return <pre {...props} />;
  }

  const { className } = children.props;

  const language = className?.replace(/language-/, "");
  const rawCode = children.props.children.trim();

  if (language === "jsx" || language === "tsx") {
    return <CodePreview initialCode={rawCode} language={language} />;
  }

  return (
    <pre>
      <code>{children}</code>
    </pre>
  );
}

export default CodeBlock;
