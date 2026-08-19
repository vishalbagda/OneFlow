import { NextResponse } from "next/server";
export async function POST() { return NextResponse.json({ error: "Agreement records are not available until Phase 2." }, { status: 501 }); }
