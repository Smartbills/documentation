import { Title, Text } from '@smartbills/react';
import React, { PropsWithChildren, ReactElement } from "react";
export interface AttributesProps extends PropsWithChildren<any> {
}
export function Attributes({ children, ...props }: AttributesProps) {
    return (
        <div style={{ flexDirection: "row", display: "flex" }}>
            <div style={{ flex: 1, display: "flex", }}>
                <ul {...props} style={{ padding: 0, margin: 0, listStyleType: "none" }}>{children}</ul>
            </div>
            <div style={{ flex: 1, display: "flex", }}>

            </div>
        </div>
    );
}