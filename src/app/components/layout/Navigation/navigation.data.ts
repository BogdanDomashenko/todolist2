import config from "../../../../config";
import { INavigation } from "./navigation.interface";

export const mainNavigation: INavigation = {
	title: config.name,
	list: [
		{ title: "Home", link: "/" },
		{ title: "Settings", link: "/settings" },
	],
};
