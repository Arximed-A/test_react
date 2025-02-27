import {Navigate, Route,  Routes} from "react-router";
import Sidebar from "./widgets/sidebar/ui/Sidebar.tsx";
import {AppRoutesProps, routeConfig, RoutePath} from "./shared/routerList/routeConfig.tsx";
import "./reset.css";
import styles from "./app.module.scss";

import { useAppSelector } from "./app/hooks.ts";
import { selectUser } from "./shared/store/user/userSlice.ts";

function App() {
	const isAuth: boolean = !!useAppSelector(selectUser);
	
	const renderWithWrapper = (route: AppRoutesProps) => {
		if(route.authOnly){
			return <Route
				key={route.path}
				path={route.path}
				element={ isAuth ? 
					route.element : 
					<Navigate replace to={RoutePath.login}/>}
			/>
		} else{
			return <Route
				key={route.path}
				path={route.path}
				element={route.element}/>	
		}
	};


	return (
		<>
			<div className={`${styles.app} ${styles.container}`}>
				<Sidebar/>
				<div className={styles.wrapper}>
					<Routes>
						{Object.values(routeConfig).map(renderWithWrapper)}
					</Routes>
				</div>
			</div>
		</>
	)
}

export default App
