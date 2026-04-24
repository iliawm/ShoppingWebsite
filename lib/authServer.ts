import { getAuth } from "./auth";
import { headers } from "next/headers";
import { cache } from "react";

export const getSession = cache(async () => {
    try {
        const auth = await getAuth();
        return await auth.api.getSession({
            headers: await headers(),
        });
    } catch (error) {
        console.error("Session error:", error);
        return null;
    }
});
