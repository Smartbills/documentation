import { Title, Text } from '@smartbills/react';
import { ReactElement } from 'react';
import { MDXProvider } from '@mdx-js/react';
export interface AttributesListItemProps {
    children: ReactElement | ReactElement[];
}
export function AttributeListItem({ children, ...props }: AttributesListItemProps) {
    const attribute = children?.toString().split(":");
    return (
        <li style={{ display: "flex", flexDirection: "column", paddingTop: 5, paddingBottom: 5, borderTop: "1px solid #ededed", borderBottom: "1px solid #ededed" }}>
            <span style={{ display: "inline-flex", paddingTop: 5, paddingBottom: 5 }}>
                <Title type="h6">{attribute[0]}</Title>
                <Text size="sm">{attribute[1]}</Text>
            </span>
            <MDXProvider >
                <Text size="sm">{attribute[2]}</Text>
            </MDXProvider>
        </li>
    )
}