import { z } from "zod";

//identifier is required as username, email

export const loginSchema = z.object({
    identifier: z.string(),
    password: z.string(),
})