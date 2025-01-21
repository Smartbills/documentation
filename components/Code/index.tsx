import { PropsWithChildren } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function Code({
  children,
}: PropsWithChildren<{
  children: string | string[];
}>) {
  return (
    <SyntaxHighlighter wrapLines={true} wrapLongLines={true} style={dark}>
      {children}
    </SyntaxHighlighter>
  );
}
