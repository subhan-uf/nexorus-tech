import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to redirect to contact form on landing page
export function redirectToContact() {
  // Check if we're already on the home page
  if (window.location.pathname === '/') {
    // Scroll to the contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // Navigate to home page with contact hash
    window.location.href = '/#contact';
  }
}
