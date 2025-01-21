import { PropsWithChildren } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./code.module.scss";

export interface InlineCodeProps {
  language?: string;
  children: string | string[];
}
export function InlineCode({
  language,
  children,
}: PropsWithChildren<InlineCodeProps>) {
  return (
    <SyntaxHighlighter
      useInlineStyles={false}
      className={styles.inlineCode}
      language={language}
      style={dark}
    >
      {children}
    </SyntaxHighlighter>
  );
}
