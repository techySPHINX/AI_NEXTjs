import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "shimon123universe@gmail.com",
      to: email,
      subject: "Verification Code || Mystery Message",
      react: VerificationEmail({ username, otp: verifyCode }),
    });

    return { success: true, message: "Successfully Sent verification Email." };
  } catch (emailError) {
    console.log("Error sending verifciaction email", emailError);

    return { success: false, message: "Fail to Send verification Email." };
  }
}
