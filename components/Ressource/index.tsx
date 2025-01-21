
import { PropsWithChildren } from 'react';
import { EndpointListItemProps, Endpoints } from '../Endpoints';
import styles from "./ressource.module.scss";

export interface RessourceProps extends PropsWithChildren<{}> {
	endpoints: EndpointListItemProps[];
}
export function Ressource({ children, endpoints, ...props }: RessourceProps) {
	return (
		<section className={styles["ressource-area"]} style={{}}>
			{children}
			<div style={{ flexDirection: "row" }}>
				<Endpoints endpoints={endpoints}></Endpoints>
			</div>
		</section >
	)
}
