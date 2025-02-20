import { ISimpleObject } from "@/shared/model/types";

export interface IStaffItem {
	certificates: string[];
	email: string;
	id: string;
	issue_status: ISimpleObject;
	legal_entity: { identifier: string; stext: string };
	object_type: number;
	orgunit: {
		id: string;
		object_type: number;
		stext: string;
	};
	phone: string;
	photo: string;
	position: {
		id: string;
		object_type: number;
		stext: string;
	};
	require_usig: null;
	short: string;
	stext: string;
	user: null;
}