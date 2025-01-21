import { Text } from "@smartbills/react";
import { HTMLProps } from "react";

export type EndpointMethodType = "GET" | "PUT" | "POST" | "DELETE";

export interface EndpointProps extends HTMLProps<HTMLSpanElement> {
	method: EndpointMethodType;
	path: string;
}

export function Endpoint({ className, path, method, ...props }: EndpointProps) {
	function getColor(type: EndpointMethodType): string {
		switch (type) {
			case "GET":
				return "primary";
			case "POST":
				return "success";
			case "PUT":
				return "warning";
			case "DELETE":
				return "danger";
		}
	}
	return (
		<span className={className} style={{ display: "flex", flexGrow: 1, flexDirection: "row", alignItems: "center" }}>
			<Text size="sm" weight="medium" style={{ display: "flex", marginRight: 10, }} color={getColor(method)}>{method}</Text>
			<Text size="sm" weight="medium" >{path}</Text>
		</span>
	)
}

