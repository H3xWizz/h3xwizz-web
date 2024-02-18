"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {Textarea} from "@/components/ui/textarea";
import {sendMail} from "@/app/actions";
import {toast} from "react-toastify";
import {useRef, useState} from "react";
import {Loader2} from "lucide-react";

const formSchema = z
    .object({
        email: z.string().email(),
        name: z.string(),
        content: z.string()
    })
    .refine(
        (data) => {
            return !(data.email === "" || data.email === " ");
        },
        {
            message: "Email is required",
            path: ["email"],
        }
    )
    .refine(
        (data) => {
            return !(data.name === "" || data.name === " ");
        },
        {
            message: "Name is required",
            path: ["name"],
        }
    )
    .refine(
        (data) => {
            return !(data.content === "" || data.content === " ");
        },
        {
            message: "Content is required",
            path: ["content"],
        }
    )

export default function ContactForm() {
    const [disabled, setDisabled] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            name: "",
            content: ""
        },
    });

    const toastId = useRef<any>(null)
    const notify = () => toastId.current = toast("Sending message...", {autoClose: false, icon: () => <Loader2 className={'animate-spin'}/> })
    const update = (status: boolean) => status ?
        toast.update(toastId.current, { render: "Message sending success", icon: true, type: toast.TYPE.SUCCESS, autoClose: 5000 })
        : toast.update(toastId.current, { render: "Message sending error", icon: true, type: toast.TYPE.ERROR, autoClose: 5000 })

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        setDisabled(true)
        notify()
        const sendRes = await sendMail(values)
        update(sendRes.status)
        setDisabled(false)
    };

    return (
        <Card className={'border-border pt-4 h-max w-1/2'}>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="w-full flex flex-col"
                >
                    <CardContent className={'flex flex-col gap-3'}>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel className={'text-accent-foreground'}>Contact email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel className={'text-accent-foreground'}>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel className={'text-accent-foreground'}>Message</FormLabel>
                                        <FormControl>
                                            <Textarea className={'resize-none h-[20vh]'} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                    </CardContent>
                    <CardFooter>
                        <Button disabled={disabled} type="submit" variant={"outline"} className="w-full">
                            Send
                        </Button>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    );
}