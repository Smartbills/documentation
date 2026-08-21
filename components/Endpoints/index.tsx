
import { Link, Text, Title } from "@smartbills/react";
import { useAppTheme } from "@/contexts/theme/ThemeContext";
import styles from "./endpoints.module.scss";

export type EndpointMethodType = "GET" | "PUT" | "POST" | "DELETE";

export interface EndpointListItemProps {
	method: EndpointMethodType;
	path: string;
}

export interface EndpointsProps {
	endpoints: EndpointListItemProps[];
}
export function Endpoints({ endpoints = [], ...props }: EndpointsProps) {
	const { colors } = useTheme();
	function getColor(type: EndpointMethodType): string {
		switch (type) {
			case "GET":
				return "#217005";
			case "POST":
				return colors.blue[300];
			case "PUT":
				return "#217005";
			case "DELETE":
				return "#b13600";
		}
	}
	return (
		<section className={styles.endpoints} style={{ background: "#f5f6f8", borderRadius: 5, border: "1px solid #d8dee4", }}>
			<span style={{ borderBottom: "1px solid #d8dee4", padding: "0px 10px ", background: "#ebeef1" }}><Text weight="medium">Endpoints</Text></span>
			<div style={{ padding: 10, }}>
				{endpoints.map(({ method, path }, index) =>
				(
					<span style={{ display: "flex", flexGrow: 1, flexDirection: "row", alignItems: "center" }} key={index}>
						<Title weight="medium" type="h6" style={{ display: "flex", minWidth: 75, marginRight: 10, justifyContent: "flex-end", color: getColor(method) }} >{method}</Title>
						<Link weight="light" style={{ display: "flex", }}>{path}</Link>
					</span>
				)
				)}
			</div>
		</section >

	)
}

