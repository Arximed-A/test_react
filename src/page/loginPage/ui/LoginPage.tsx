import { fetchLoginPage } from "../api/apiLoginPage";
import { ILoginPage } from "../model/modelLoginPage";
import { useState } from "react";

const LoginPage = () => {
	const form: ILoginPage = {
		username: "",
		password: "",
	};
	const [isLoading, setIsLoading] = useState(false);

	const sendForm = async () => {
		await fetchLoginPage(form, setIsLoading);
	};
	return (
		<>
			<div className="container">
				<input type="text" />
				<input type="password" />
				<button disabled={isLoading} onClick={sendForm}>Войти В it</button>
			</div>
		
		</>
	);
}

export default LoginPage;