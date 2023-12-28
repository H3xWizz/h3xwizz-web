import {octokit} from "@/lib/octokit";
import {NextResponse} from "next/server";
import {Project} from "@/types/project";

export async function GET() {
    try {
        const fetch = await octokit.request('GET /users/{username}/repos', {
            username: 'H3xWizz',
            type: 'owner',
            sort: 'updated',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })

        const data: Project[] = []

        fetch.data.map(repo => {
            data.push({
                id: repo.id,
                name: repo.name,
                description: repo.description ?? "",
                url: repo.html_url,
                updatedAt: repo.updated_at as string,
                language: repo.language ?? ""
            })
        })

        return NextResponse.json({
            status: true,
            data: data,
            message: 'OK'
        })
    } catch (e) {
        return NextResponse.json({
            status: false,
            message: e
        })
    }
}