import type {NextFetchEvent, NextRequest} from "next/server";
import {NextResponse} from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    // res.setPreviewData({})
    return NextResponse.rewrite("/underConstraction");
}