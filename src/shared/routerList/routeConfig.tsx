import {RouteProps} from "react-router";
import MainPage from "@/page/mainPage/ui/MainPage.tsx";
import AboutPage from "@/page/aboutPage/ui/AboutPage.tsx";
import {StaffPage} from "@/page/staffPage/index.ts";//чанк
import LoginPage from "@/page/loginPage/ui/LoginPage.tsx";
import LogoutPage from "@/page/logoutPage/ui/LogoutPage.tsx";
import NotFoundPage from "@/page/notFoundPage/ui/NotFoundPage.tsx";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  STAFF = "staff",
  LOGIN = "login",
  LOGOUT = "logout",
	NOT_FOUND= "notFound"
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
	[AppRoutes.NOT_FOUND]: "*",
	
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage/>,
		authOnly: false,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage/>,
		authOnly: true,
	},
	[AppRoutes.STAFF]: {
		path: RoutePath.staff,
		element: <StaffPage/>,
		authOnly: true,
	},
	[AppRoutes.LOGIN]: {
		path: RoutePath.login,
		element: <LoginPage/>,
	},
	[AppRoutes.LOGOUT]: {
		path: RoutePath.logout,
		element: <LogoutPage/>,
		authOnly: true,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.notFound,
		element: <NotFoundPage/>,
	},
};
