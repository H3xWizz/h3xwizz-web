import {NextResponse} from "next/server";
import {getRepos} from "@/app/actions";

export async function GET() {
    const data = await getRepos()

    return NextResponse.json(data)
}