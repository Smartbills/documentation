import { HTMLProps } from "react";

export interface SectionProps extends HTMLProps<HTMLElement> { }
export function Section({ ...props }: SectionProps) {
    return (
        <section className="mb-5" {...props}></section>
    )
}