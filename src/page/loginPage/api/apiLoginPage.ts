import { API } from "@/shared/config/env/env";
import axios from "axios";
import { ILoginPage } from "../model/modelLoginPage";
import { SetStateAction, Dispatch } from "react";


export async function fetchLoginPage(data:ILoginPage, setIsLoading: Dispatch<SetStateAction<boolean>>):Promise<void> {
	try{
		setIsLoading(true)
		await axios.postForm(`${API}/person/current/profile`, {
			username: data.username,
			password: data.password,
		});
	} catch (error) {
		console.log(error);
		throw new Error("Ошибка авторизации");
	} finally {
		setIsLoading(false);
	}
}
