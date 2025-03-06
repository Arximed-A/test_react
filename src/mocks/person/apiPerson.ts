import {API} from "@/shared/config/env/env.ts"
import { HttpResponse, delay, http } from "msw";
import personData from "./model/modelPerson.json"
import personListData from "./model/modelPersonList.json"
import personDetailData from "./model/modelPersonDetail.json"
import { delayTime } from "../config";

const personResolver = async () => {
	await delay(delayTime)
	return HttpResponse.json(personData);
};

const personListResolver = async () => {
	await delay(delayTime)
	return HttpResponse.json(personListData);
};

const personDetailResolver = async ({ params }) => {
	const { id } = params; // Извлекаем id из параметров
	console.log("Requested person ID:", id);

	// Искусственная задержка (убедитесь, что delayTime определено)
	await delay(delayTime);

	// Копируем данные (если это необходимо)
	const data = JSON.parse(JSON.stringify(personDetailData));

	// Ищем человека по id
	const person = data.find(el => el.id === id);

	// Если человек не найден, возвращаем ошибку 404
	if (!person) {
		return HttpResponse.json({ error: "Person not found" }, { status: 404 });
	}

	// Возвращаем найденного человека
	return HttpResponse.json(person);
};

const getPerson = http.get(API + "/person/current/profile", personResolver);
const getPersonList = http.get(API + "/person/list", personListResolver);
const getPersonDetail = http.get(API + "/person/:id/detail", personDetailResolver);

export default  [getPerson, getPersonList,getPersonDetail]

