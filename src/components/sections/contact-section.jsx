
"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Fade } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Heart, MessageSquare, Camera, Trash2 } from "lucide-react";

const commentSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  comment: z.string().min(3, { message: "Comment must be at least 3 characters." }),
});

export function ContactSection() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    try {
      const storedComments = localStorage.getItem("comments");
      if (storedComments) {
        setComments(JSON.parse(storedComments));
      }
    } catch (error) {
      console.error("Failed to parse comments from localStorage", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("comments", JSON.stringify(comments));
    } catch (error) {
      console.error("Failed to save comments to localStorage", error);
    }
  }, [comments]);

  const form = useForm({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      name: "",
      comment: "",
    },
  });

  function onSubmit(values) {
    const newComment = {
      id: Date.now(),
      name: values.name,
      avatar: values.name.substring(0, 1).toUpperCase(),
      date: new Date().toLocaleString("id-ID", { dateStyle: 'long', timeStyle: 'short' }).replace('pukul', 'pukul'),
      text: values.comment,
      likes: 0,
    };
    setComments([newComment, ...comments]);
    form.reset();
  }

  const handleLike = (id) => {
    setComments(comments.map(c => c.id === id ? { ...c, likes: c.likes + 1 } : c));
  };

  const handleDelete = (id) => {
    setComments(comments.filter(c => c.id !== id));
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
      <div className="relative container mx-auto px-4 md:px-6">
        <Fade direction="up" triggerOnce>
          <div className="text-center">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold font-headline uppercase tracking-tight">
              <span className="text-foreground text-glow">
                Get In
              </span>
              <span className="text-primary"> Touch</span>
            </h2>
            <p className="mt-4 text-base md:text-xl text-foreground/70 font-headline uppercase tracking-wider">
              Have a project in mind or want to collaborate? Let's talk.
            </p>
          </div>
        </Fade>

        <div className="max-w-7xl mx-auto mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <Fade direction="left" triggerOnce delay={200}>
            <div className="bg-secondary/50 p-6 md:p-8 rounded-lg border border-border">
              <div className="flex items-center gap-4 mb-6">
                <MessageSquare className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold font-headline text-foreground">Leave a Comment</h3>
                  <p className="text-sm md:text-base text-foreground/70">Share your thoughts!</p>
                </div>
              </div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="relative cursor-pointer group">
                      <Avatar className="h-12 w-12 border-2 border-dashed border-border group-hover:border-primary transition-colors">
                        <AvatarFallback className="bg-transparent">
                          <Camera className="h-6 w-6 text-foreground/50 group-hover:text-primary transition-colors" />
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="w-full space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Your Name" {...field} className="bg-background/70 border-border focus:border-primary focus:ring-primary" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="comment"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea placeholder="Write your comment..." {...field} className="bg-background/70 border-border focus:border-primary focus:ring-primary min-h-[100px]" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <Button type="submit" size="lg" className="font-headline uppercase tracking-wider cursor-target w-full">
                    Post Comment
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Form>
            </div>
          </Fade>
          <Fade direction="right" triggerOnce delay={200}>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <h3 className="text-xl md:text-2xl font-bold font-headline text-foreground">Comments ({comments.length})</h3>
              </div>
              <div className="space-y-6 max-h-[350px] overflow-y-auto pr-2 sm:pr-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex items-start gap-4 bg-secondary/50 p-4 md:p-6 rounded-lg border border-border">
                    <Avatar>
                      <AvatarImage src={`https://placehold.co/40x40.png?text=${comment.avatar}`} />
                      <AvatarFallback>{comment.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-foreground text-sm md:text-base">{comment.name}</p>
                        <p className="text-xs text-foreground/50">{comment.date}</p>
                      </div>
                      <p className="mt-2 text-foreground/80 text-sm md:text-base">{comment.text}</p>
                      <div className="mt-4 flex items-center gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleLike(comment.id)} className="h-8 w-8 text-foreground/60 hover:text-primary hover:bg-primary/10 cursor-target">
                          <Heart className={`h-4 w-4 ${comment.likes > 0 ? 'text-primary fill-current' : ''}`} />
                        </Button>
                        <span className="text-sm text-foreground/60">{comment.likes}</span>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(comment.id)} className="h-8 w-8 text-foreground/60 hover:text-destructive hover:bg-destructive/10 cursor-target ml-auto">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                {comments.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-full text-center text-foreground/50 p-8 bg-secondary/20 rounded-lg">
                    <MessageSquare className="h-10 w-10 mb-4" />
                    <p className="font-bold text-lg">No comments yet.</p>
                    <p>Be the first to leave a comment!</p>
                  </div>
                )}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
