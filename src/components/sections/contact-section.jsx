import { Fade } from "react-awesome-reveal";

export function ContactSection() {
    return (
        <section id="contact" className="relative py-24 bg-[#0A121A] overflow-hidden">
            <div 
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                    backgroundSize: '2rem 2rem',
                }}
            />
            <div className="relative container mx-auto px-4 md:px-6 text-center">
                <Fade direction="up" triggerOnce>
                    <h2 className="text-6xl md:text-8xl font-bold font-headline uppercase tracking-tight">
                        <span className="bg-gradient-to-r from-cyan-400 to-teal-600 bg-clip-text text-transparent">
                            Get In
                        </span>
                        <span className="text-white"> Touch</span>
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-foreground/70 font-code">
                        Mari berkolaborasi dan ciptakan sesuatu yang amazing!
                    </p>
                </Fade>
            </div>
        </section>
    );
}
