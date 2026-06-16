export const themes = {
  saas: {
    nav: {
      brand: 'Segovia',
      links: [
        { label: 'Stack', href: '#features' },
        { label: 'About', href: '#about' },
        { label: 'Clients', href: '#team' },
        { label: 'Reviews', href: '#testimonials' },
      ],
      cta: 'Hire me',
    },
    hero: {
      badge: "Available for projects — let's talk",
      headline: 'I build things\nthat last.',
      subheadline:
        'Full-stack development — React, Node.js, Java, Python. Clean code. On time. Every project.',
      cta: { primary: 'See my work', secondary: 'Get in touch →' },
    },
    features: {
      headline: 'Stack & Capabilities',
      subheadline: 'Tools I reach for first — and know inside out.',
      items: [
        {
          title: 'React & TypeScript',
          description:
            'Production-grade frontend with React 19, TypeScript, Tailwind, Framer Motion. Component architecture that scales without pain.',
        },
        {
          title: 'Node.js & REST APIs',
          description:
            'Express, Fastify, Hono. REST and GraphQL APIs designed for clarity, tested for reliability.',
        },
        {
          title: 'Java & Spring Boot',
          description:
            'Enterprise-grade backend systems. Spring Boot, JPA, security patterns that hold under load.',
        },
        {
          title: 'Python & Automation',
          description:
            'FastAPI, Django, scripting. Data pipelines, automation tooling, backend services — whatever the job needs.',
        },
        {
          title: 'Database Design',
          description:
            "PostgreSQL, MongoDB, Redis. Schema design that doesn't come back to haunt you six months later.",
        },
        {
          title: 'DevOps & Delivery',
          description:
            "Docker, CI/CD pipelines, Vercel, Railway. Shipping is part of building — not someone else's problem.",
        },
      ],
    },
    about: {
      headline: 'Semi-senior by title,\nsenior by necessity.',
      body: "I came up through fullstack — not one side of the stack, both. Before code, I had a background in digital art with an established online community, which means I actually care about what things look like, not just whether they compile. Now I build on Upwork, where every delivery is a review and every review matters.",
      stats: [
        { value: '4+', label: 'Years building' },
        { value: '100%', label: 'On-time delivery' },
        { value: '5.0', label: 'Upwork rating' },
      ],
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&h=500&fit=crop',
    },
    team: {
      headline: "People I've worked with",
      subheadline: 'Clients and collaborators from startups to enterprise.',
      members: [
        {
          name: 'Alex Morgan',
          role: 'Startup founder',
          img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
        },
        {
          name: 'Sara Chen',
          role: 'Product manager',
          img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
        },
        {
          name: 'Jordan Lee',
          role: 'Tech lead',
          img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop&crop=face',
        },
        {
          name: 'Maya Patel',
          role: 'Engineering director',
          img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
        },
      ],
    },
    testimonials: {
      headline: 'What clients say',
      items: [
        {
          quote:
            "Delivered a full React dashboard in under two weeks, exactly as spec'd. No hand-holding required — he figures things out and ships.",
          author: 'Marcus T.',
          role: 'CTO at Fintara',
          avatar:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
        },
        {
          quote:
            "The code was so clean I thought he'd worked on our codebase before. Seriously impressive — and he hit every deadline.",
          author: 'Priya K.',
          role: 'Staff Engineer at Orbit',
          avatar:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
        },
        {
          quote:
            'Built our entire backend API from scratch in a month. Fast, well-documented, and he flagged scope issues before they became problems.',
          author: 'Chris W.',
          role: 'VP Engineering at Stackly',
          avatar:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
        },
      ],
    },
    cta: {
      headline: "Let's build something.",
      subheadline:
        "Got a project? I'm available for freelance work. Reach out and let's talk scope.",
      primary: 'Start a project',
      secondary: 'View GitHub →',
    },
    footer: {
      brand: 'Segovia',
      tagline: 'Full-stack development. Clean code. On time.',
      links: ['Stack', 'About', 'Reviews', 'GitHub', 'LinkedIn'],
      copyright: '© 2026 David Segovia. All rights reserved.',
    },
  },

  agency: null,
}
