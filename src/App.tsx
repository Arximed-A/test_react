import {Route, RouteProps, Routes} from "react-router";
import Sidebar from "./widgets/sidebar/ui/Sidebar.tsx";
import {routeConfig} from "./shared/routerList/routeConfig.ts";
import "./reset.css";
import styles from "./app.module.scss";

function App() {

	const renderWithWrapper = (route: RouteProps) => {
		return <Route
			key={route.path}
			path={route.path}
			Component={route.Component}
		/>

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
