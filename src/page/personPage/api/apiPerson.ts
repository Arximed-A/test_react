import {API} from "@/shared/config/env/env" ;
import axios, {AxiosResponse} from "axios";
import {Dispatch, SetStateAction} from "react";

export async function fetchPersonDetail(
	id:string,
	
): Promise<any> {
	try {

		const response: AxiosResponse<any> = await axios(`${API}/person/${id}/detail`);
		
		return response.data;
	} catch (error) {
		console.error("Error fetching staff page:", error);
	} 
}
