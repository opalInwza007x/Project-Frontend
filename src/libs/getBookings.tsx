import BACKEND_URL from "./geturl";

export default async function getBookings(token: string, lastID: number = 0, limit: number = 25) {
    try {
        const url = new URL(`${BACKEND_URL}/api/v1/bookings`);

        url.searchParams.append("lastID", lastID.toString());
        url.searchParams.append("limit", limit.toString());

        const response = await fetch(url.toString(), {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Failed to fetch bookings");
        }

        return data;
    } 
    catch (error: any) {
        console.error("Bookings fetch error:", error.message || error);
        return null;
    }
};