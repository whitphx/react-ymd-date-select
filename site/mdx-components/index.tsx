import { MDXComponents } from "mdx/types";
import CodeBlock from "./CodeBlock";
import InlineCode from "../components/InlineCode";
import { H1, H2, H3, H4 } from "../components/Heading";
import Link from "./Link";

export const mdxComponents: MDXComponents = {
  pre: CodeBlock,
  code: (props) => <InlineCode {...props} />,
  h1: (props) => <H1 {...props} />,
  h2: (props) => <H2 {...props} />,
  h3: (props) => <H3 {...props} />,
  h4: (props) => <H4 {...props} />,
  a: Link,
};
