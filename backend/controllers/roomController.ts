import { NextRequest, NextResponse } from "next/server"

export const allRooms = async(req: NextRequest) => {
    return NextResponse.json({
        data: "Welcome to the GhostLand!!!",
    })
}