export const themes = {
  saas: {
    nav: {
      brand: 'Nexus',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'About', href: '#about' },
        { label: 'Team', href: '#team' },
        { label: 'Testimonials', href: '#testimonials' },
      ],
      cta: 'Get started free',
    },
    hero: {
      badge: 'Now in public beta — free forever for small teams',
      headline: 'Ship faster,\nscale smarter',
      subheadline:
        'The all-in-one platform that helps engineering teams move from idea to production without the overhead.',
      cta: { primary: 'Get started free', secondary: 'See how it works →' },
    },
    features: {
      headline: 'Everything you need to ship',
      subheadline: 'Built for teams that move fast and care about quality.',
      items: [
        {
          icon: '⚡',
          title: 'Lightning fast deploys',
          description:
            'Deploy in seconds, not hours. Our infrastructure is built for speed at every layer of the stack.',
        },
        {
          icon: '🔒',
          title: 'Secure by default',
          description:
            'SOC 2 compliant with end-to-end encryption. Your data never leaves your control.',
        },
        {
          icon: '📊',
          title: 'Real-time analytics',
          description:
            "See exactly what's happening in your app with dashboards that update as it happens.",
        },
        {
          icon: '🔧',
          title: 'Zero config',
          description:
            "Works out of the box. Sensible defaults that get out of your way when you need them to.",
        },
        {
          icon: '🤝',
          title: 'Team collaboration',
          description:
            'Share, review, and ship together with integrated workflows designed for async-first teams.',
        },
        {
          icon: '🌐',
          title: 'Global edge network',
          description:
            'Serve your users from the edge, anywhere in the world, with automatic failover and rollback.',
        },
      ],
    },
    about: {
      headline: 'Built by engineers,\nfor engineers',
      body: "We got tired of tools that slowed us down. So we built one that doesn't. After years at high-growth startups, we knew exactly what was missing — and we built it. Nexus is the platform we always wished existed.",
      stats: [
        { value: '10k+', label: 'Teams using Nexus' },
        { value: '99.99%', label: 'Uptime SLA' },
        { value: '4.9/5', label: 'G2 rating' },
      ],
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop',
    },
    team: {
      headline: 'The team behind it',
      subheadline: 'A small, focused team with a big mission.',
      members: [
        {
          name: 'Alex Morgan',
          role: 'Co-founder & CEO',
          img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
        },
        {
          name: 'Sara Chen',
          role: 'Co-founder & CTO',
          img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
        },
        {
          name: 'Jordan Lee',
          role: 'Head of Design',
          img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop&crop=face',
        },
        {
          name: 'Maya Patel',
          role: 'Head of Engineering',
          img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
        },
      ],
    },
    testimonials: {
      headline: 'Loved by engineering teams',
      items: [
        {
          quote:
            "Nexus cut our deploy time by 80%. I genuinely can't imagine going back to how we worked before.",
          author: 'Marcus T.',
          role: 'CTO at Fintara',
          avatar:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
        },
        {
          quote:
            "The best developer experience I've had in 10 years of building software products.",
          author: 'Priya K.',
          role: 'Staff Engineer at Orbit',
          avatar:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
        },
        {
          quote:
            'We went from 3-hour deploys to 12 minutes. That single change unblocked our entire roadmap.',
          author: 'Chris W.',
          role: 'VP Engineering at Stackly',
          avatar:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
        },
      ],
    },
    cta: {
      headline: 'Ready to ship faster?',
      subheadline:
        'Join 10,000+ teams already using Nexus. Free to start, scales with you.',
      primary: 'Start for free',
      secondary: 'Talk to sales',
    },
    footer: {
      brand: 'Nexus',
      tagline: 'Ship faster, scale smarter.',
      links: ['Features', 'About', 'Pricing', 'Docs', 'Blog'],
      copyright: '© 2026 Nexus, Inc. All rights reserved.',
    },
  },

  // Agency theme content — added in Phase 6
  agency: null,
}
