import { NextResponse } from "next/server";
import configuration from "/CONFIG.json"

export function middleware(req) {
    const { pathname } = req.nextUrl;

    if (pathname === "/") {
        return NextResponse.redirect(
            new URL(configuration.global.home_route || "/home", req.url),
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/",
};