
import {API} from "@/shared/config/env/env" ;
import axios, {AxiosResponse} from "axios";
import { IStaffItem } from "../model/modelStaffPage";

export async function fetchStaffPage() {
	try{
		const response:AxiosResponse<IStaffItem[]> = await axios(`${API}/person/list`);
		return response.data;
	} catch (error) {
		console.error("Error fetching staff page:", error);
		return []
	}
}
