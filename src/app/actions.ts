"use server"

import {Project} from "@/types/project";

const nm = require('nodemailer')
export async function sendMail(data: any) {
    try {
        const transporter = nm.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_APP_PASS,
            },
        })

        const mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: process.env.SMTP_EMAIL_REC,
            subject: `${data.name} <${data.email}>`,
            text: data.content,
        };

        transporter.sendMail(mailOptions)
        return {
            status: true,
            message: "OK"
        }
    } catch (e) {
        return {
            status: false,
            message: e
        }
    }
}

export async function getRepos() {
    try {
        const fetched = await fetch('https://api.github.com/users/H3xWizz/repos?type=owner&sort=updated', {
            next: {
                revalidate: 600
            }
        })
            .then(res => res.json())

        const data: Project[] = []

        fetched.map((repo: any) => {
            if (repo.name !== 'H3xWizz') {
                data.push({
                    id: repo.id,
                    name: repo.name,
                    description: repo.description ?? "",
                    url: repo.html_url,
                    updatedAt: repo.updated_at as string,
                    language: repo.language ?? "None"
                })
            }
        })

        return {
            status: true,
            data: data,
        }
    } catch (e) {
        return {
            status: false,
            message: e
        }
    }
}