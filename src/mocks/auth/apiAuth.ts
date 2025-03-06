import { API } from "@/shared/config/env/env.ts";
import { HttpResponse, http,delay } from "msw";
import { delayTime } from "../config";

interface IAdmin {
	username:string,
	password: string
}
const admin:IAdmin = {username: "chertok_be", password: "11111111"}

const postsResolver = async ({ request }) => {
	const formData = await request.formData();

	const data:IAdmin = Object.fromEntries(formData.entries());
	await delay(delayTime)


	if(admin.username === data.username && admin.password === data.password){
		return HttpResponse.json({ message: "Success" });
	}
	return HttpResponse.json({ message: "Error" }, {status: 401});
};

export default http.post(API + "/auth", postsResolver);