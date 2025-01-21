import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export interface JsonResponseProps {
    json?: string;
}
export function JsonResponse({ json = "", }: JsonResponseProps) {
    return (
        <SyntaxHighlighter wrapLines={true} wrapLongLines={true}
            language="json" style={vscDarkPlus} customStyle={{
                fontSize: 12,
                borderRadius: 10, tabSize: 4, padding: 20, fontWeight: 500,
                maxHeight: 500, maxWidth: "100%", "overflowX": "hidden",
            }}>
            {json}
        </SyntaxHighlighter>
    )
}