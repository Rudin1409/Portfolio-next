
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Fade } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Send } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});


export function ContactSection() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values) {
        // TODO: Implement form submission logic
        console.log(values);
    }

    return (
        <section id="contact" className="relative py-24 bg-[#0A121A] overflow-hidden">
            <div 
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                    backgroundSize: '2rem 2rem',
                }}
            />
            <div className="relative container mx-auto px-4 md:px-6">
                <Fade direction="up" triggerOnce>
                    <div className="text-center">
                        <h2 className="text-6xl md:text-8xl font-bold font-headline uppercase tracking-tight">
                            <span className="text-primary text-glow">
                                Get In
                            </span>
                            <span className="text-foreground"> Touch</span>
                        </h2>
                        <p className="mt-4 text-lg md:text-xl text-foreground/70 font-headline uppercase tracking-wider">
                            Have a project in mind or want to collaborate? Let's talk.
                        </p>
                    </div>
                </Fade>

                <Fade direction="up" triggerOnce delay={200}>
                    <div className="max-w-2xl mx-auto mt-16">
                        <h3 className="text-3xl font-bold text-center mb-8 font-headline uppercase text-glow">Contact Me</h3>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-headline uppercase tracking-wider text-foreground/80">Your name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter your name" {...field} className="bg-secondary border-border focus:border-primary focus:ring-primary" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-headline uppercase tracking-wider text-foreground/80">Email address</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter your email" {...field} className="bg-secondary border-border focus:border-primary focus:ring-primary" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-headline uppercase tracking-wider text-foreground/80">Your Message</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="How can I help you?" {...field} className="bg-secondary border-border focus:border-primary focus:ring-primary" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="text-center">
                                    <Button type="submit" size="lg" className="font-headline uppercase tracking-wider cursor-target w-full md:w-auto">
                                        Send Message
                                        <Send className="ml-2 h-5 w-5" />
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </Fade>
            </div>
        </section>
    );
}
