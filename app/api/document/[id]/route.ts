import { NextResponse } from "next/server";
export async function GET() { return NextResponse.json({ error: "Documents are not available until Phase 7." }, { status: 501 }); }
