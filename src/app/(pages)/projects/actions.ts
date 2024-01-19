"use server"

import {Project} from "@/types/project";

export default async function getRepos() {
    try {
        const fetched = await fetch('https://api.github.com/users/H3xWizz/repos?type=owner&sort=updated', {
            next: {
                revalidate: 600
            }
        })
            .then(res => res.json())

        const data: Project[] = []

        console.log(fetched)

        fetched.map((repo: any) => {
            data.push({
                id: repo.id,
                name: repo.name,
                description: repo.description ?? "",
                url: repo.html_url,
                updatedAt: repo.updated_at as string,
                language: repo.language ?? "None"
            })
        })

        return {
            status: true,
            data: data,
            message: 'OK'
        }
    } catch (e) {
        return {
            status: false,
            message: e
        }
    }
}