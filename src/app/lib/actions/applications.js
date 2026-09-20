import { serverMutation } from "../core/server"

export const createApplication = async (payload) => {
    return serverMutation("/api/applications",payload);
}