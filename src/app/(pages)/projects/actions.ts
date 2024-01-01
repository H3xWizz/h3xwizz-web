"use server"

import {octokit} from "@/lib/octokit";
import {Project} from "@/types/project";
import {NextResponse} from "next/server";

export default async function getRepos() {
    try {
        const fetched = await fetch('https://api.github.com/users/H3xWizz/repos?type=owner&sort=updated', {
            cache: 'no-store'
        })
            .then(res => res.json())

        const data: Project[] = []

        console.log(fetched)

        fetched.map(repo => {
            data.push({
                id: repo.id,
                name: repo.name,
                description: repo.description ?? "",
                url: repo.html_url,
                updatedAt: repo.updated_at as string,
                language: repo.language ?? "None"
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