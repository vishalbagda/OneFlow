import { NextResponse } from "next/server";
export async function POST() { return NextResponse.json({ error: "Stamp duty calculation is not available until Phase 4." }, { status: 501 }); }
