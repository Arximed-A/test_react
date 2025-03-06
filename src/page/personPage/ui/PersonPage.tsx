import { memo, useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchPersonDetail } from "../api/apiPerson";

interface Person {
	id: string;
	stext: string;
}

const PersonPage = memo(function PersonPage() {
	const [person, setPerson] = useState<Person | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const { id } = useParams<{ id: string }>();

	// Функция для загрузки данных
	const fetchData = async (id: string) => {
		setIsLoading(true);
		setError(null);

		try {
			const res = await fetchPersonDetail(id);
			if (res) {
				setPerson(res);
			}
		} catch (err) {
			setError("Ошибка при загрузке данных");
			console.error("Error fetching person details:", err);
		} finally {
			setIsLoading(false);
		}
	};

	// Загрузка данных при изменении id
	useEffect(() => {
		if (id) {
			fetchData(id);
		}

		// Очистка (отмена запроса, если компонент размонтируется)
		return () => {
			// Здесь можно добавить отмену запроса, если fetchPersonDetail поддерживает AbortController
		};
	}, [id]);

	// Отображение состояния загрузки
	if (isLoading) {
		return <div>Загрузка...</div>;
	}

	// Отображение ошибки
	if (error) {
		return <div>{error}</div>;
	}

	// Отображение данных
	return (
		<div>
			<h1>Информация о человеке</h1>
			<p>ID: {id}</p>
			{person ? (
				<div>Имя: {person.stext}</div>
			) : (
				<div>Данные не найдены</div>
			)}
		</div>
	);
});

export default PersonPage;