import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const verifyToken = (token: string, secret: string) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
};

export async function GET(request: NextRequest) {
  try {
    // Extract token value as a string
    const token = request.cookies.get("token")?.value || ''; 
    
    if (!token) {
      return NextResponse.json({ loggedIn: false }, { status: 401 });
    }

    // Verify the token
    const decoded = await verifyToken(token, process.env.TOKEN_SECRET!);
    // Token is valid
    return NextResponse.json({ loggedIn: true, user: decoded });
    
  } catch (error: any) {
    return NextResponse.json({ loggedIn: false, error: error.message }, { status: 500 });
  }
}
