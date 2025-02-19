import {RouteProps} from "react-router";
import MainPage from "../../page/mainPage/ui/MainPage.tsx";
import AboutPage from "../../page/aboutPage/ui/AboutPage.tsx";


export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",

};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		Component: MainPage,

	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		Component: AboutPage,
	},
};
