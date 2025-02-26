import axios, {AxiosError, AxiosResponse} from "axios";


axios.interceptors.response.use(function (response: AxiosResponse) {
	return response;
}, function (error: AxiosError) {
	if (error.status === 401) {
		console.log("Сессия закончилась")
	}
	return Promise.reject(error);
});