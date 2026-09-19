import { serverFetch } from "../core/server";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getCompanyJobs = async (companyId, status = "active") => {
  const res = await fetch(
    `${baseUrl}/api/jobs?companyId=${companyId}&status=${status}`,
  );
  return res.json();
};

export const getJobs = async (path) => {
  return serverFetch(path)
}
