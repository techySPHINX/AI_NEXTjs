import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";

import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { username, email, password } = await request.json();
    const existingUserVerifiedbyUsername = await UserModel.findOne({
      username,
      isVerified: true,
    });

    if (existingUserVerifiedbyUsername) {
      return Response.json(
        {
          success: false,
          message: "Username is already taken"
        },
        
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error reistering User", error);
    return Response.json(
      {
        success: false,
        message: "Error regsitering User",
      },
      {
        status: 500,
      }
    );
  }
}
