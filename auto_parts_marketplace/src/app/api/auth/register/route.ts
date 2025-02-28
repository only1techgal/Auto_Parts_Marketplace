import { NextResponse } from "next/server";

// Simulating a database (Replace this with actual database logic)
const users: any[] = [];

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // Basic validation
    if (!name || !email || !password) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Check if the email already exists
    if (users.some((user) => user.email === email)) {
      return NextResponse.json({ error: "Email is already in use." }, { status: 400 });
    }

    // Store user (In a real-world scenario, save to a database)
    users.push({ name, email, password });

    return NextResponse.json({ message: "User registered successfully." }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
