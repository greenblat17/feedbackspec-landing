import React from "react";
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { FeedbackSpecLogo } from "./ui/FeedbackSpecLogo";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  companyName?: string;
  description?: string;
  sections?: FooterSection[];
  socialLinks?: SocialLink[];
  contactInfo?: {
    email: string;
    phone: string;
    address: string;
  };
  showNewsletter?: boolean;
}

const Footer: React.FC<FooterProps> = ({
  companyName = "FeedbackSpec",
  description = "Streamline your feedback collection and analysis with our comprehensive platform designed for modern teams.",
  sections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "How it Works", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
        { label: "Integrations", href: "/integrations" },
        { label: "API Docs", href: "/api" },
        { label: "Changelog", href: "/changelog" },
      ],
    },
    {
      title: "Use Cases",
      links: [
        { label: "For SaaS Founders", href: "/use-cases/saas" },
        { label: "For Indie Hackers", href: "/use-cases/indie-hackers" },
        { label: "For Solo Developers", href: "/use-cases/solo-devs" },
        { label: "For Agencies", href: "/use-cases/agencies" },
        { label: "Success Stories", href: "#testimonials" },
        { label: "Case Studies", href: "/case-studies" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Press Kit", href: "/press" },
        { label: "Contact", href: "/contact" },
        { label: "Partners", href: "/partners" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Documentation", href: "/docs" },
        { label: "Community Forum", href: "/community" },
        { label: "System Status", href: "https://status.feedbackspec.com" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ],
  socialLinks = [
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/feedbackspec",
      label: "Twitter",
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/feedbackspec",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/company/feedbackspec",
      label: "LinkedIn",
    },
  ],
  contactInfo = {
    email: "hello@feedbackspec.com",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation Drive, San Francisco, CA 94105",
  },
  showNewsletter = true,
}) => {
  const [email, setEmail] = React.useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-4">
              <div className="mb-6">
                <div className="mb-4">
                  <FeedbackSpecLogo size="lg" variant="default" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {description}
                </p>
                
                {/* Quick Links */}
                <div className="mb-6">
                  <p className="text-sm font-semibold mb-3">Quick Links</p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="#features"
                      className="text-xs px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-full transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Features
                    </a>
                    <a
                      href="#pricing"
                      className="text-xs px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-full transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Pricing
                    </a>
                    <a
                      href="#testimonials"
                      className="text-xs px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-full transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#testimonials')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Reviews
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 mr-3 text-primary" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 mr-3 text-primary" />
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-start text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-3 mt-0.5 text-primary flex-shrink-0" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Link Sections */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {sections.map((section, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-semibold text-foreground mb-4">
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                            onClick={(e) => {
                              if (link.href.startsWith('#')) {
                                e.preventDefault();
                                const element = document.querySelector(link.href);
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }
                              }
                            }}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            {showNewsletter && (
              <div className="lg:col-span-2">
                <h4 className="text-sm font-semibold text-foreground mb-4">
                  Stay Updated
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest updates and insights delivered to your inbox.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                  <Button type="submit" className="w-full" size="sm">
                    Subscribe
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>

        <Separator />

        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {companyName}. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </a>
              <a
                href="/security"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Security
              </a>
              <a
                href="https://status.feedbackspec.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Status
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
