import {fetchCurrentUser, fetchLogin} from "../api/apiLoginPage";
import {ILoginPage} from "../model/modelLoginPage";
import {useState} from "react";
import BaseLabel from "@/shared/ui/baseLabel/BaseLabel.tsx";
import style from "./LoginPage.module.scss"
import BaseInput from "@/shared/ui/baseInput/ui/BaseInput.tsx";
import {IProfile} from "@/shared/model/types.ts";
import {setUser} from "@/shared/store/user/userSlice.ts";
import {useAppDispatch} from "@/app/hooks.ts";
import {NavigateFunction, useNavigate} from "react-router";
import {RoutePath} from "@/shared/routerList/routeConfig.tsx";
import { useSelector } from "react-redux";
import ButtonLoading from "@/features/ButtonLoading/ui/ButtonLoading";


const LoginPage = () => {
	const dispatch = useAppDispatch()
	// const count = useSelector((state: RootState) => state.counter.value)
	const [formData, setFormData] = useState<ILoginPage>({
		username: "chertok_be",
		password: "11111111"
	});
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const navigate: NavigateFunction = useNavigate();

	const handleInputChange = (key: string, value: string) => {
		setFormData((prevForm) => ({
			...prevForm,
			[key]: value,
		}));
	}

	const sendForm = async () => {
		
		try {
			setIsLoading(true)
			// Удалить
			await new Promise((resolve) => {
				setTimeout(() => {
					dispatch(setUser({})); // Выполняем действие
					resolve(); // Завершаем Promise
				}, 1000);
			});
			navigate(RoutePath.about)
			return
			const res: boolean | void = await fetchLogin(formData,);
			if (res) {
				const user: IProfile = await fetchCurrentUser()
				if (user) {
					dispatch(setUser(user))
					navigate(RoutePath.main)
				}
			}
		} catch (e) {
			console.log(e)
		} finally {
			setIsLoading(false)
		}
	};
	return (
		<>
			<div className={style.containerLogin}>
				<div className={style.wrapper}>
					<BaseLabel text='Логин'>
						<BaseInput
							value={formData.username}
							disabled={isLoading}
							onChange={(value: string) => handleInputChange("username", value)}
						/>
					</BaseLabel>
					<BaseLabel text='Пароль'>
						<BaseInput
							type='password'
							value={formData.password}
							disabled={isLoading}
							onChange={(value: string) => handleInputChange("password", value)}
						/>
					</BaseLabel>
					<ButtonLoading disabled={isLoading} loading={isLoading} onClick={sendForm} text={isLoading ? "Загрузка..." : "Войти В it"}/>
					
				</div>
			</div>
		</>
	);
}

export default LoginPage;