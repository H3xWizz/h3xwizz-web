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
import sendMail from "@/app/(pages)/contact/actons";

const formSchema = z
    .object({
        email: z.string().email(),
        name: z.string(),
        content: z.string()
    })
    .refine(
        (data) => {
            if (data.email === "" || data.email === " ") {
                return false;
            }
            return true;
        },
        {
            message: "Email is required",
            path: ["email"],
        }
    )
    .refine(
        (data) => {
            if (data.name === "" || data.name === " ") {
                return false;
            }
            return true;
        },
        {
            message: "Name is required",
            path: ["name"],
        }
    )
    .refine(
        (data) => {
            if (data.content === "" || data.content === " ") {
                return false;
            }
            return true;
        },
        {
            message: "Content is required",
            path: ["content"],
        }
    )

export default function Home() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            name: "",
            content: ""
        },
    });

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        sendMail(values)
    };

    return (
        <Card className={'border-border pt-4 h-max w-max'}>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="max-w-md w-full flex flex-col"
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
                                                className={'w-[20vw]'}
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
                                                className={'w-[20vw]'}
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
                                            <Textarea className={'resize-none h-[20vh] w-[20vw]'} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" variant={"outline"} className="w-full">
                            Submit
                        </Button>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    );
}
