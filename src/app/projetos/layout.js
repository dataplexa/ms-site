"use client";

import { ContactBanner } from "@/components/projects-contact-banner";

export default function ProjectsLayout({ children }) {
  return (
    <>
      {children}
      <ContactBanner />
    </>
  );
}
