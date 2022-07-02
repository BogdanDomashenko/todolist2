import { FC, ReactNode } from "react";
import Navigation from "./Navigation/Navigation";
import styles from "./layout.module.scss";

interface Props {
	children?: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.content}>{children}</div>
		</div>
	);
};

export default Layout;
