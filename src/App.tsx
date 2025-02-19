import "./App.css"
import {Route, RouteProps, Routes} from "react-router";
import Sidebar from "./widgets/sidebar/ui/Sidebar.tsx";
import {routeConfig} from "./shared/routerList/routeConfig.ts";

// import {routeConfig} from "@";

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
			<div className="container">
				<Sidebar/>
				<Routes>
					{Object.values(routeConfig).map(renderWithWrapper)}
				</Routes>
			</div>

		</>
	)
}

export default App
