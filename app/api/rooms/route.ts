import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";
import { allRooms } from "@/backend/controllers/roomController";
import dbConnect from "@/backend/config/dbConnect"

interface RequestContext {
    params: {
        id:string
    }
}

const router = createEdgeRouter<NextRequest, RequestContext>()

dbConnect();

router.get(allRooms);

export async function GET(request: NextRequest, ctx:RequestContext) {
    return router.run(request, ctx);
}
