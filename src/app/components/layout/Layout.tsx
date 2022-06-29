import { FC, ReactNode } from "react";
import Navigation from "./Navigation/Navigation";
import styles from "./layout.module.css";

interface Props {
	children?: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<div className={styles.layout}>
			ghfhgf
			<Navigation />
			<div>{children}</div>
		</div>
	);
};

export default Layout;
