import { lookupTracking } from "@/lib/tracking";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const id = new URL(request.url).searchParams.get("no")?.trim().toUpperCase() ?? "";
  if (!/^[A-Z0-9-]{4,40}$/.test(id)) {
    return NextResponse.json({ error: "Enter a valid tracking number." }, { status: 400 });
  }

  try {
    const result = await lookupTracking(id);
    if (!result) {
      return NextResponse.json({ error: "Tracking ID not found." }, { status: 404 });
    }
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: "Tracking is unavailable right now. Try again in a moment." },
      { status: 502 },
    );
  }
}
