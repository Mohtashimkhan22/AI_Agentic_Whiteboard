import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { db, users } from "@/db";
// import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
    try {
        const user = await currentUser();

        if (!user) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 404 }
            );
        }

        const email = user.primaryEmailAddress?.emailAddress;

        if (!email) {
            return NextResponse.json(
                { message: "Email not found" },
                { status: 400 }
            );
        }

        const userData = await db
            .select()
            .from(users)
            .where(eq(users.email, email));

        if (userData.length > 0) {
            return NextResponse.json(userData[0]);
        }

        const newUser = await db
            .insert(users)
            .values({
                name: user.fullName,
                email: user.primaryEmailAddress?.emailAddress?? "",
                credits: 3,
            })
            .returning();

        return NextResponse.json(newUser[0]);
    } catch (error) {
        console.error("Error creating/fetching user:", error);

        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}