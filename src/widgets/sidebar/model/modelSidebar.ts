import {RoutePath} from "@/shared/routerList/routeConfig.ts";

export interface SidebarItemType {
  path: string;
  text: string;
}

export const SidebarItemsList: SidebarItemType[] = [
	{
		path: RoutePath.main,
		text: "Главная",
	},
	{
		path: RoutePath.about,
		text: "О сайте",
	},

];
