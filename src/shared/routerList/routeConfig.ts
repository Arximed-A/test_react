import {RouteProps} from "react-router";
import MainPage from "@/page/mainPage/ui/MainPage.tsx";
import AboutPage from "@/page/aboutPage/ui/AboutPage.tsx";
import StaffPage from "@/page/staffPage/ui/StaffPage.tsx";
import LoginPage from "@/page/loginPage/ui/LoginPage.tsx";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
	STAFF = "staff",
	LOGIN = "login",
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.STAFF]: "/staff",
	[AppRoutes.LOGIN]: "/login",
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
	[AppRoutes.STAFF]: {
		path: RoutePath.staff,
		Component: StaffPage,
	},
	[AppRoutes.LOGIN]: {
		path: RoutePath.login,
		Component: LoginPage,
	},
};
