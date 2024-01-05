"use server"

export default async function sendMail(data: any) {
    try {
        console.log(data)
    } catch (e) {
        return {
            status: false,
            message: e
        }
    }
}