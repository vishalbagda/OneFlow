import { NextResponse } from "next/server";
export async function POST() { return NextResponse.json({ error: "Mock payment is not available until Phase 5." }, { status: 501 }); }
