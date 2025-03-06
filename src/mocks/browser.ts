import { setupWorker } from "msw/browser";

import personApi from "./person/apiPerson.ts"
import authUser from "./auth/apiAuth.ts"

export const handlers = [authUser, ...personApi];
export const worker  = setupWorker(...handlers);