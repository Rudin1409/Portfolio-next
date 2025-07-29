"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const contactInfo = [
  { icon: Mail, title: "Email", value: "contact@radiant.dev", href: "mailto:contact@radiant.dev" },
  { icon: Phone, title: "Phone", value: "+1 234 567 890", href: "tel:+1234567890" },
  { icon: MapPin, title: "Location", value: "Cyberspace", href: "#" },
];

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12 animate-in fade-in-0 slide-in-from-bottom-12 duration-500">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Contact Me</h2>
          <p className="text-muted-foreground">Get in touch</p>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-12 duration-500">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{info.title}</h3>
                  <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">{info.value}</a>
                </div>
              </div>
            ))}
          </div>
          <div className="animate-in fade-in slide-in-from-right-12 duration-500">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
