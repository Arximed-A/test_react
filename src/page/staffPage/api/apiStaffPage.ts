import {API} from "@/shared/config/env/env" ;
import axios, {AxiosResponse} from "axios";
import {IStaffItem} from "../model/modelStaffPage";
import {IPagination} from "@/shared/model/types.ts";
import {Dispatch, SetStateAction} from "react";

export async function fetchStaffPage(
	setIsLoading: Dispatch<SetStateAction<boolean>>
): Promise<IStaffItem[]> {
	try {
		setIsLoading(true)
		const response: AxiosResponse<IPagination<IStaffItem[]>> = await axios(`${API}/person/list`);
		return response.data.results;
	} catch (error) {
		console.error("Error fetching staff page:", error);
		return []
	} finally {
		setIsLoading(false)
	}
}
