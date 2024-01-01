import getRepos from "@/app/(pages)/projects/actions";

export async function GET() {
    const data = getRepos()
    return data
}