import { getMongoDb } from "@/lib/db";
import { betterAuth, type Auth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { createAuthClient } from "better-auth/react";

let authInstance: Auth | null = null;  

export async function getAuth() {
    if (authInstance) {
        return authInstance;
    }

    const db = await getMongoDb();

    authInstance = betterAuth({
        database: mongodbAdapter(db),
        emailAndPassword: { enabled: true },
        user: {
            additionalFields: {
                role: {
                    type: "string",
                    required: true,
                    enum: ["User", "Admin", "Owner"],
                    defaultValue: "User",
                    input: false,
                }
            }
        },
        plugins: [nextCookies()],
        secret: process.env.BETTER_AUTH_SECRET!,
        baseURL: process.env.BETTER_AUTH_URL,
        trustedOrigins: ["http://localhost:3000", "http://192.168.1.*:3000"],
    });

    return authInstance;
}

export const auth = new Proxy({} as any, {
    get(_, prop) {
        throw new Error("Use getAuth() instead of auth directly");
    }
});

export const authClient = createAuthClient();
export const { useSession, signIn, signOut, signUp } = authClient;
