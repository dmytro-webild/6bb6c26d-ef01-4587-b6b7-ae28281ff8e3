"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroBillboardGallery from "@/components/sections/hero/HeroBillboardGallery";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import TestimonialCardSixteen from "@/components/sections/testimonial/TestimonialCardSixteen";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { AlertTriangle, Clock, Phone, Truck, Wrench } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="smallMedium"
      sizing="largeSizeMediumTitles"
      background="circleGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="solid"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Paul's Automotive"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Reviews", id: "testimonials" },
            { name: "Service Area", id: "location" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" },
          ]}
          button={{
            text: "Call Now",            href: "tel:(405)285-2238"}}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="24 Hour Towing and Trusted Auto Help in Edmond OKC"
          description="Fast arrival, friendly service, and honest work. From emergency towing to getting you back on the road, Paul's Automotive is the local team people call first."
          background={{ variant: "plain" }}
          tag="Open 24 Hours"
          tagIcon={Clock}
          buttons={[
            { text: "Call (405) 285-2238", href: "tel:(405)285-2238" },
            { text: "Request a Quote", href: "#contact" },
          ]}
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/emergency-auto-mechanic-changing-flat-tire-road_651396-3559.jpg",              imageAlt: "Paul's tow truck ready for emergency service"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/emergency-auto-mechanic-repairing-woman-vehicle-street_651396-2803.jpg",              imageAlt: "Professional towing in action"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/employee-listens-client-car-request_482257-76086.jpg",              imageAlt: "Trusted auto repair service"},
          ]}
          mediaAnimation="slide-up"
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="5 Star Local Reputation"
          description="Join hundreds of satisfied Edmond and OKC customers who trust Paul's for emergency and routine service."
          names={[
            "Arrived within 15 minutes",            "Honest, trustworthy",            "Best towing in town",            "Great mechanic and friendly service",            "Fair pricing, no surprise charges",            "Emergency response experts",            "24/7 availability you can count on"]}
          textboxLayout="default"
          useInvertedBackground={false}
          speed={50}
          showCard={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureBorderGlow
          title="What We Do"
          description="From emergency towing to vehicle diagnostics, Paul's Automotive handles every situation with speed and professionalism."
          features={[
            {
              icon: Truck,
              title: "24 Hour Towing",              description: "Quick dispatch for breakdowns, dead batteries, no-starts, and safe transport. We're always ready."},
            {
              icon: AlertTriangle,
              title: "Recovery and Pull Outs",              description: "Stuck in mud, roadside recovery, storm response, and difficult situations handled calmly and efficiently."},
            {
              icon: Wrench,
              title: "Auto Repair Help",              description: "Reliable repairs and diagnostics when you need something checked out ASAP. Expert service on all makes."},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Luxury-Level Service With Small-Town Care"
          description={[
            "Fast ETA When It Matters — We dispatch quickly and keep you updated every step of the way.",            "Friendly Team, No Judgment — Whether you need towing or repair advice, we treat you like family.",            "Honest Pricing and Clear Answers — No hidden fees. We'll explain everything upfront.",            "Works on Domestic, Foreign, and Classics — Whatever you drive, we know how to help.",            "Trusted During Emergencies and Storms — When disaster strikes, Paul's Automotive is the call you're glad you made."]}
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          title="Customers Don't Just Recommend Us They Stick With Us"
          description="Real feedback from people across Edmond and the OKC metro who've experienced Paul's Automotive firsthand."
          testimonials={[
            {
              id: "1",              name: "James Mitchell",              role: "Local Business Owner",              company: "Mitchell's Auto Parts",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg",              imageAlt: "professional portrait male customer business person satisfied customer"},
            {
              id: "2",              name: "Sarah Chen",              role: "Mom of Two",              company: "Edmond Resident",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman-sitting-cafe-with-closed-laptop_1262-1151.jpg",              imageAlt: "professional portrait female customer woman happy client"},
            {
              id: "3",              name: "David Torres",              role: "Fleet Manager",              company: "Local Delivery Service",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-car-mechanic-auto-repair-shop-looking-camera_637285-7794.jpg",              imageAlt: "professional portrait male mechanic service person friendly face"},
            {
              id: "4",              name: "Emily Rodriguez",              role: "Professional Driver",              company: "OKC Commuter",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-working_23-2149908159.jpg",              imageAlt: "professional portrait female driver woman client satisfied person"},
          ]}
          kpiItems={[
            { value: "15+", label: "Years Trusted Service" },
            { value: "96%", label: "Customer Satisfaction" },
            { value: "24/7", label: "Always Available" },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="location" data-section="location">
        <TextSplitAbout
          title="Find Us in Downtown Edmond"
          description={[
            "26 W 4th St #A, Edmond, OK 73003",            "Open 24 hours — Always ready to help, day or night.",            "Service Area: Edmond and the OKC Metro",            "Quick response times backed by professional equipment and experienced technicians."]}
          buttons={[
            {
              text: "Get Directions",              href: "https://maps.google.com/?q=26+W+4th+St+Edmond+OK+73003"},
          ]}
          useInvertedBackground={false}
          showBorder={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Quick answers to common questions about Paul's Automotive services and process."
          faqs={[
            {
              id: "1",              title: "Do you accept credit cards?",              content: "Yes, we accept all major credit cards. We also accept cash and checks for your convenience."},
            {
              id: "2",              title: "Are you open 24 hours?",              content: "Yes, absolutely. Paul's Automotive operates 24 hours a day, 7 days a week. No matter when you need help, we're here."},
            {
              id: "3",              title: "How fast can you get here?",              content: "Response time depends on traffic and demand, but we dispatch quickly and keep you updated. Most calls in Edmond see arrival within 15-30 minutes."},
            {
              id: "4",              title: "Is it towing only or towing plus repair?",              content: "We provide both towing and auto help. Call us and we'll confirm what's best for your situation and get you back on the road safely."},
            {
              id: "5",              title: "Do you handle emergency roadside service?",              content: "Yes, we handle jump-starts, flat tire changes, lockouts, fuel delivery, and other emergency roadside assistance."},
            {
              id: "6",              title: "Can you tow specialty vehicles?",              content: "We have experience with domestic, foreign, and classic vehicles. Just let us know the details when you call and we'll make sure we're equipped to help."},
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Need Help Now"
          tagIcon={Phone}
          title="Call Paul's Automotive for Fast Towing and Trustworthy Service"
          description="Don't wait. Get the reliable, friendly help you deserve. Available anytime, day or night across Edmond and the OKC metro."
          buttons={[
            { text: "Call (405) 285-2238", href: "tel:(405)285-2238" },
            { text: "Get a Quote", href: "#contact" },
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Paul's Automotive"
          columns={[
            {
              title: "Services",              items: [
                { label: "24 Hour Towing", href: "#services" },
                { label: "Recovery & Pull Outs", href: "#services" },
                { label: "Auto Repair Help", href: "#services" },
              ],
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Customer Reviews", href: "#testimonials" },
                { label: "Service Area", href: "#location" },
              ],
            },
            {
              title: "Contact",              items: [
                { label: "Call (405) 285-2238", href: "tel:(405)285-2238" },
                {
                  label: "26 W 4th St, Edmond, OK 73003",                  href: "https://maps.google.com/?q=26+W+4th+St+Edmond+OK+73003"},
                { label: "Open 24 Hours", href: "#location" },
              ],
            },
            {
              title: "Support",              items: [
                { label: "FAQ", href: "#faq" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ],
            },
          ]}
          copyrightText="© 2025 Paul's Automotive | 24-Hour Towing & Auto Help | Edmond, Oklahoma"
        />
      </div>
    </ThemeProvider>
  );
}
