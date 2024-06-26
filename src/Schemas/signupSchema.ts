import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "username must be atleast 2 characters")
  .max(20, "Username must be less than 20 characters")
  .regex(/^\S+@\S+\.\S+$/, "Username must not contain special character");


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(6,{message: "password at least 6 characters"})
})