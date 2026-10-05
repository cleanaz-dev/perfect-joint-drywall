import { NextResponse } from "next/server";
import { chat } from "@/lib/novita/services";

export async function POST(req: Request) {
    const { chatMessages } = await req.json();
    const response = await chat(chatMessages);
    return NextResponse.json({ message: response });
}