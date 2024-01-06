"use server"
const nm = require('nodemailer')
export default async function sendMail(data: any) {
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
            from: data.email,
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