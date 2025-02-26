import {NavigateFunction, useNavigate} from "react-router";
import {RoutePath} from "@/shared/routerList/routeConfig.ts";
import {useAppDispatch} from "@/app/hooks.ts";
import {clearUser} from "@/shared/store/user/userSlice.ts";

const LoginPage = () => {
	const navigate: NavigateFunction = useNavigate()
	const dispatch = useAppDispatch()
	const logout: () => void = (): void => {
		dispatch(clearUser())
		navigate(RoutePath.login)
	}
	return (
		<>
			<div className="container">
				<p className="title">Вы хотите выйти?</p>
				<div className="wrapper">
					<button onClick={logout}>Да</button>
					<button onClick={() => navigate(RoutePath.main)}>Нет</button>
				</div>
			</div>
		</>
	);
}

export default LoginPage;