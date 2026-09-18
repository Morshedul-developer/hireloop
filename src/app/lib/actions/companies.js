"use server";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const createCompany = async (payload) => {
    const res = await fetch(`${baseUrl}/api/companies`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    return res.json();
}