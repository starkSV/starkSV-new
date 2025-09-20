import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import FeaturedProjects from '../components/FeaturedProjects';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero
        id="home"
        name="Shekhar Vaidya"
        title="Blogger. Tech Writer. Builder."
        ctaWorkHref="#projects"
        ctaContactHref="#contact"
        image="/assets/hero-photo.jpg"
        resumeHref="/assets/ShekharResume.pdf"
      />
      
      <Skills />

      <Blogs itemsPerFeed={5} />      
      
      <FeaturedProjects />
      
      <Contact 
        emailjsConfig={{
          serviceId: "service_swubjt9",     // Replace with your actual Service ID from EmailJS
          templateId: "template_xl5505m",   // Replace with your actual Template ID from EmailJS  
          publicKey: "h9ZA1tIrtzGXLl1lK"      // Replace with your actual Public Key from EmailJS
        }}
        fallbackEmail="shekhar@tech-latest.com"
      />
    </>
  );
}