import {API} from "@/shared/config/env/env";
import axios, {AxiosResponse} from "axios";
import {ILoginPage} from "../model/modelLoginPage";
import {IProfile} from "@/shared/model/types.ts";

export async function fetchLogin(
	data: ILoginPage
): Promise<boolean | void> {
	try {
		await axios.postForm(`${API}/auth`, {
			username: data.username,
			password: data.password,
		});
		return true
	} catch (error) {
		console.log(error);
		throw new Error("Ошибка авторизации");
	}
}

export async function fetchCurrentUser(): Promise<IProfile> {
	try {
		const response: AxiosResponse<IProfile> = await axios(`${API}/person/current/profile`,);
		return response.data
	} catch (error) {
		console.log(error);
		throw new Error("Ошибка получения данных пользователяы");
	}
}

