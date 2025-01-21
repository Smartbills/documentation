import { PropsWithChildren } from 'react';
import { JsonResponse } from '../JsonResponse';
import styles from "./method.module.scss";

export interface MethodProps {
    title: string;
    description?: string;
    parameters: any;
    url: string;
    method: "GET" | "POST" | "PUT" | "DELETE",
    response?: string;
}
export function Method({ response, children, ...props }: PropsWithChildren<MethodProps>) {
    return (
        <section className={styles["method"]} style={{}}>
            <div style={{ flexDirection: "row", display: "flex" }}>
                <div style={{ flex: 1 }}>
                    {children}
                </div>
                <JsonResponse json={response}></JsonResponse>
            </div>
        </section >

    )
}
