import { NextResponse } from "next/server";
export async function POST() { return NextResponse.json({ error: "Mock OTP is not available until Phase 6." }, { status: 501 }); }
