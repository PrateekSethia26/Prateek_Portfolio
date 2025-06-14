import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = {
      access_key: "193bf89b-ed17-4fda-a6f3-61e02eab4972", // Replace with your actual Web3Forms access key
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      await axios.post("https://api.web3forms.com/submit", userData);

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" }); // This resets the form
    } catch (error) {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-dark-navy">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-light-slate mb-6 animate-fade-in">
          <span className="text-mint font-mono text-lg">04.</span> What's Next?
        </h2>

        <h3 className="text-4xl md:text-5xl font-bold text-light-slate mb-6">
          Get In Touch
        </h3>

        <p className="text-slate mb-12 leading-relaxed text-lg animate-fade-in-up">
          I'm always interested in new opportunities and exciting projects.
          Whether you have a question or just want to say hi, I'll do my best to
          get back to you promptly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 mb-16 animate-fade-in-up"
        >
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 bg-card border-border text-light-slate placeholder:text-slate focus:ring-2 focus:ring-mint focus:border-mint transition-all duration-200"
            />
          </div>

          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 bg-card border-border text-light-slate placeholder:text-slate focus:ring-2 focus:ring-mint focus:border-mint transition-all duration-200"
            />
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-4 bg-card border-border text-light-slate placeholder:text-slate focus:ring-2 focus:ring-mint focus:border-mint transition-all duration-200 resize-none"
            />
          </div>

          <Button
            type="submit"
            variant="outline"
            className="border-mint text-mint hover:bg-mint/10 py-4 px-8 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            Send Message
          </Button>
        </form>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/PrateekSethia26"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-mint transition-colors duration-200 hover:scale-110 transform"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/prateeksethia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-mint transition-colors duration-200 hover:scale-110 transform"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:prateeksethia2002@gmail.com"
            className="text-slate hover:text-mint transition-colors duration-200 hover:scale-110 transform"
          >
            <Mail size={28} />
          </a>
        </div>

        <div className="text-center pt-8 border-t border-border">
          <p className="text-slate font-mono">
            © 2025 Prateek Sethia. Built with passion and code.
          </p>
        </div>
      </div>
    </section>
  );
};
