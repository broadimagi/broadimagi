import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Package, Cloud, CheckCircle2, Users, Lightbulb, Workflow } from "lucide-react";
import { useState } from "react";

/**
 * Broadimagi IT Solutions - Home Page
 * Design: Dark Minimalist with Brand Philosophy Integration
 * Services: Custom System Development, IT & Digital Consulting, Warehouse Management System, Cloud Infrastructure
 * Philosophy: "Broad imagination, combined with technical expertise, transforms ideas into powerful digital systems"
 */

export default function Home() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    {
      id: "custom-dev",
      icon: Code,
      title: "Custom System Development",
      description: "Tailored software solutions built from the ground up to solve your unique business challenges and drive innovation.",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "consulting",
      icon: Lightbulb,
      title: "IT & Digital Consulting",
      description: "Strategic guidance to transform your business through technology, digital strategy, and organizational optimization.",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "wms",
      icon: Package,
      title: "Warehouse Management System",
      description: "Intelligent warehouse operations platform that streamlines inventory, automates workflows, and optimizes logistics.",
      color: "from-amber-500 to-amber-600",
    },
    {
      id: "cloud",
      icon: Cloud,
      title: "Cloud Infrastructure Services",
      description: "Scalable, secure cloud solutions that modernize your infrastructure and enable seamless business growth.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      id: "myguest",
      icon: Users,
      title: "MyGuest - Guest Check-In System",
      description: "Smart guest management and check-in solution designed for hotels, events, and hospitality venues with real-time tracking.",
      color: "from-green-500 to-green-600",
    },
    {
      id: "google-automation",
      icon: Workflow,
      title: "Google Workspace Automation",
      description: "Streamline your business processes with intelligent automation for Gmail, Sheets, Docs, and other Google Workspace tools.",
      color: "from-red-500 to-red-600",
    },
  ];

  const whyChoose = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals combining broad imagination with deep technical expertise"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile methodology ensures quick turnaround without compromising quality"
    },
    {
      icon: CheckCircle2,
      title: "Proven Results",
      description: "Track record of transforming businesses through innovative digital solutions"
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/images/broadimagi-logo.png" alt="Broadimagi" className="h-10" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition text-sm">
              Services
            </a>
            <a href="#why-us" className="text-foreground hover:text-primary transition text-sm">
              Why Us
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition text-sm">
              Contact
            </a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white text-sm">Get In Touch</Button>
        </div>
      </nav>

      {/* Hero Section - Minimalist with Philosophy */}
      <section className="relative overflow-hidden py-24 lg:py-40">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {/* Brand Philosophy */}
            <div className="space-y-4">
              <p className="text-primary font-medium text-sm tracking-wide uppercase">IT Solutions & Digital Transformation</p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Broad Imagination Meets Technical Expertise
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We transform ideas into powerful digital systems that empower organizations to operate smarter and move confidently into the future.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 group">
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-card">
                Learn More
              </Button>
            </div>

            {/* Tagline */}
            <div className="pt-8 border-t border-border/30">
              <p className="text-muted-foreground italic">
                "Broad imagination, combined with technical expertise, transforms ideas into powerful digital systems"
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-20 relative">
            <div className="rounded-2xl overflow-hidden border border-border/30 backdrop-blur-sm">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663199310716/eAtrcppVT5qHyKhRcZfLdr/hero-banner-2h5GwERTD2V958fRecsH3C.webp"
                alt="IT Solutions"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Services Section - What We Offer */}
      <section id="services" className="py-20 lg:py-32 border-t border-border/30">
        <div className="container">
          <div className="max-w-2xl mb-16 text-center mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive IT solutions designed to transform your business and drive digital innovation.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
            {services.map((service) => {
              const Icon = service.icon;
              const isHovered = hoveredService === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group p-8 bg-card rounded-xl border border-border/30 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:bg-card/80"
                >
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-lg mb-6 transition-all duration-300 ${
                    isHovered ? "bg-primary text-white" : "bg-primary/10 text-primary"
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 lg:py-32 border-t border-border/30">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Choose Broadimagi</h2>
            <p className="text-lg text-muted-foreground">
              We don't just build software. We partner with you to transform how your business operates and innovates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {whyChoose.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-card rounded-xl border border-border/30 hover:border-primary/30 transition-all"
                >
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Additional Benefits */}
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
            {[
              "Custom solutions tailored to your unique business needs",
              "End-to-end support from strategy through implementation and beyond",
              "Cutting-edge technology combined with creative problem-solving",
              "Transparent communication and collaborative partnership approach",
              "Proven track record of successful digital transformations",
              "Scalable solutions that grow with your business"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg border border-border/20 hover:border-primary/30 transition-all">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Showcase with Image */}
      <section className="py-20 lg:py-32 border-t border-border/30">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative h-96 lg:h-full min-h-96 order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-background to-transparent rounded-2xl overflow-hidden border border-border/30">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663199310716/eAtrcppVT5qHyKhRcZfLdr/services-hero-GNfL8A8mjzAguhW2AwtaBX.webp"
                alt="Digital Solutions"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Geometric Accent */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-primary/20 rounded-full" />
          </div>

          {/* Right: Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">Transforming Ideas Into Reality</h2>
              <p className="text-lg text-muted-foreground">
                From concept to deployment, we guide you through every step of your digital transformation journey. Our approach combines strategic thinking with technical excellence to deliver solutions that truly matter.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Strategic planning and requirements analysis",
                "Agile development and iterative delivery",
                "Quality assurance and rigorous testing",
                "Seamless deployment and ongoing support",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 group w-full sm:w-auto">
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 lg:py-32 border-t border-border/30">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how Broadimagi can help you achieve your digital goals. Our team is ready to turn your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 group">
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-card">
              Schedule Consultation
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border/30">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Email</p>
              <p className="font-medium text-foreground">broadimagi@gmail.com</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Phone</p>
              <p className="font-medium text-foreground">+639158853399</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Location</p>
              <p className="font-medium text-foreground">Taguig City, Philippines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border/30 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/images/broadimagi-logo.png" alt="Broadimagi" className="h-8 mb-4" />
              <p className="text-sm text-muted-foreground">Broad imagination, combined with technical expertise, transforms ideas into powerful digital systems.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition">Custom Development</a></li>
                <li><a href="#services" className="hover:text-primary transition">IT Consulting</a></li>
                <li><a href="#services" className="hover:text-primary transition">WMS Solutions</a></li>
                <li><a href="https://myguest.broadimagi.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">MyGuest Check-In</a></li>
                <li><a href="#services" className="hover:text-primary transition">Google Workspace</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">About</a></li>
                <li><a href="#" className="hover:text-primary transition">Blog</a></li>
                <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2025 Broadimagi. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition text-sm">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition text-sm">LinkedIn</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition text-sm">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
