"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Loader2, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { portfolioData } from "@/data/portfolio";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Missing fields", description: "Please fill in all fields", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({ title: "Invalid email", description: "Please enter a valid email address", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const istTime = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: true,
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          time: istTime,
          message: formData.message,
          reply_to: formData.email,
          from_email: formData.email,
          subject: `New portfolio inquiry from ${formData.name}`,
        },
        PUBLIC_KEY
      );

      toast({ title: "Message sent", description: "Thank you for reaching out. I'll be in touch soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-black py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto rounded-2xl md:rounded-[2rem] bg-[#101010] p-8 md:p-16">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(225,224,204,0.6)" }}>
              Get in touch
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[0.95] mb-8" style={{ color: "#E1E0CC" }}>
              Let's make <span className="font-serif italic">something.</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-md">
              Have a project, an idea, or a role in mind? I'd love to hear about it. Reach out and I'll get back within a day or two.
            </p>

            <a href={`mailto:${portfolioData.email}`} className="inline-flex items-center gap-3 group">
              <span className="w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-primary" />
              </span>
              <span className="text-sm md:text-base text-primary">{portfolioData.email}</span>
              <ArrowRight
                className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1"
                style={{ transform: "rotate(-45deg)" }}
              />
            </a>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <Input
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-black/40 border-white/10 h-12 rounded-xl"
            />
            <Input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-black/40 border-white/10 h-12 rounded-xl"
            />
            <Textarea
              placeholder="Tell me about it..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-black/40 border-white/10 min-h-[160px] rounded-xl"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center gap-2 hover:gap-3 transition-all bg-primary rounded-full pl-5 pr-1.5 py-1.5 text-black font-medium text-sm sm:text-base disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  Sending
                  <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
                    <Loader2 className="w-4 h-4 animate-spin" style={{ color: "#E1E0CC" }} />
                  </span>
                </>
              ) : (
                <>
                  Send message
                  <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Send className="w-4 h-4" style={{ color: "#E1E0CC" }} />
                  </span>
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
