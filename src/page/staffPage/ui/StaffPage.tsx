import { useEffect } from "react";
import { fetchStaffPage } from "../api/apiStaffPage";
const StaffPage = () => {
	
	useEffect(() => {
		fetchStaffPage();
	}, []);
	return (
		<>
			staff
		</>
	);
}

export default StaffPage;