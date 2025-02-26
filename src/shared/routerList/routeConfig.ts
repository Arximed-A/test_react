import {RouteProps} from "react-router";
import MainPage from "@/page/mainPage/ui/MainPage.tsx";
import AboutPage from "@/page/aboutPage/ui/AboutPage.tsx";
import {StaffPage} from "@/page/staffPage/index.ts";//чанк
import LoginPage from "@/page/loginPage/ui/LoginPage.tsx";
import LogoutPage from "@/page/logoutPage/ui/LogoutPage.tsx";


export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  STAFF = "staff",
  LOGIN = "login",
  LOGOUT = "logout",
}

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
}
export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.STAFF]: "/staff",
	[AppRoutes.LOGIN]: "/login",
	[AppRoutes.LOGOUT]: "/logout",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		Component: MainPage,
		authOnly: true,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		Component: AboutPage,
		authOnly: true,
	},
	[AppRoutes.STAFF]: {
		path: RoutePath.staff,
		Component: StaffPage,
		authOnly: true,
	},
	[AppRoutes.LOGIN]: {
		path: RoutePath.login,
		Component: LoginPage,
	},
	[AppRoutes.LOGOUT]: {
		path: RoutePath.logout,
		Component: LogoutPage,
		authOnly: true,
	},
};
