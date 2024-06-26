import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const result = await fetch(
      "http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=2881650&count=100&maxlength=500&format=json",
    );
    const json = await result.json();

    return NextResponse.json({ ...json })
}