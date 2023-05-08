// lets try an example endpoint

import { NextResponse } from "next/server";

// what is the endpoint URL of this endpoint ?
// http://localhost:3000/login/api

export async function GET() {
  return NextResponse.json({
    message: "Hello World",
  });
}

export function POST() {}

export function PUT() {}

export function DELETE() {}
