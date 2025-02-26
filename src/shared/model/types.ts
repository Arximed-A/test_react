export interface ISimpleObject<T = string> {
  label: string;
  value: T;
}

export interface IPosition {
  id: string;
  legal_entity: {
    identifier: string;
    stext: string;
  };
  delete?: boolean;
  object_type: number;
  orgunit: IObjectType;
  photo: string;
  position: IObjectType;
  short: string;
  stext: string;
}

export interface IObjectType {
  id: string;
  object_type: number;
  stext: string;
}

export interface IProfile extends IPosition {
  accounts: IAccount[];
  certificates: unknown[];
  email: string;
  issue_request: null | IIssueBase;
  issue_status: ISimpleObject;
  phone: string;
  require_usig: boolean;
  user: IUserInfo;
}

export interface IAccount {
  id: string;
  is_active: boolean;
  legal_entity: { identifier: string; stext: string };
  object_type: number;
  short: string;
  stext: string;
}

export interface IIssueBase {
  current_deadline: ISimpleObject | null;
  creation_date: string;
  current_approvers: IPosition[];
  id: string;
  initiator: IPosition;
  permissions: IDetailPermissions;
  request_status: ISimpleObject;
  stext: string;
  subjects: ISubject[];
}

export interface IUserInfo {
  email: string;
  is_active: boolean;
  is_staff: boolean;
  language_code: ISimpleObject;
  username: string;
}

export interface ISubject {
  id?: string;
  legal_entity?: { identifier: string; stext: string };
  object_type?: number;
  orgunit?: {
    id: string;
    object_type: number;
    stext: string;
  };
  photo?: string;
  position?: {
    id: string;
    object_type: number;
    stext: string;
  } | null;
  short?: string;
  stext: string;
  label?: string;
  value?: ISubject;
}

export interface IDetailPermissions {
  can_add_step: boolean;
  can_delete_request: boolean;
  can_edit_request_stext: boolean;
  can_edit_request_type: boolean;
}

export interface IPagination<T> {
  count: number;
  next: null | string;
  previous: null | string;
  results: T;
}