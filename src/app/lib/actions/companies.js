"use server";

import { serverMutation } from "../core/server";

export const createCompany = async (payload) => {
  return serverMutation("/api/companies", payload);
};
