import {RoutePath} from "@/shared/routerList/routeConfig.tsx";

export interface SidebarItemType {
  path: string;
  text: string;
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
	{
		path: RoutePath.main,
		text: "Главная",
		authOnly: true,
	},
	{
		path: RoutePath.about,
		text: "О сайте",
		authOnly: true,
	},
	{
		path: RoutePath.staff,
		text: "Сотрудники",
		authOnly: true,
	},
];
