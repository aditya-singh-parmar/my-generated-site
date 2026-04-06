import React from 'react'
import type { Config } from '@measured/puck'

// ---------------------------------------------------------------------------
// Component prop types
// ---------------------------------------------------------------------------

type Components = {
  HeroSection: {
    heading: string
    subheading: string
    ctaText: string
    bgColor: string
  }
  TextBlock: {
    content: string
  }
  ImageBlock: {
    src: string
    alt: string
    width: string
  }
  TwoColumnLayout: {
    leftContent: string
    rightContent: string
  }
  CardGrid: {
    cards: Array<{ title: string; description: string }>
  }
  CTASection: {
    heading: string
    buttonText: string
    buttonUrl: string
  }
}

// ---------------------------------------------------------------------------
// Config
// All renders use inline styles so the generated site works without Tailwind.
// ---------------------------------------------------------------------------

export const puckConfig: Config<Components> = {
  components: {
    // -----------------------------------------------------------------------
    // Hero Section
    // -----------------------------------------------------------------------
    HeroSection: {
      fields: {
        heading: { type: 'text' },
        subheading: { type: 'text' },
        ctaText: { type: 'text' },
        bgColor: { type: 'text' },
      },
      defaultProps: {
        heading: 'Build Something Amazing',
        subheading: 'Create stunning websites with drag and drop',
        ctaText: 'Get Started',
        bgColor: '#1a1a2e',
      },
      render: ({ heading, subheading, ctaText, bgColor }) => (
        <section
          style={{
            backgroundColor: bgColor,
            color: '#ffffff',
            padding: '80px 48px',
            textAlign: 'center',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 700,
              marginBottom: '16px',
              lineHeight: 1.2,
            }}
          >
            {heading}
          </h1>
          <p
            style={{
              fontSize: '20px',
              opacity: 0.8,
              marginBottom: '32px',
              lineHeight: 1.6,
            }}
          >
            {subheading}
          </p>
          <button
            style={{
              backgroundColor: '#2563eb',
              color: '#ffffff',
              padding: '14px 32px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-block',
            }}
          >
            {ctaText}
          </button>
        </section>
      ),
    },

    // -----------------------------------------------------------------------
    // Text Block
    // -----------------------------------------------------------------------
    TextBlock: {
      fields: {
        content: { type: 'textarea' },
      },
      defaultProps: {
        content: 'Add your text here. This is a paragraph block you can edit freely.',
      },
      render: ({ content }) => (
        <div
          style={{
            padding: '40px 48px',
            maxWidth: '800px',
            margin: '0 auto',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: '#374151',
            }}
          >
            {content}
          </p>
        </div>
      ),
    },

    // -----------------------------------------------------------------------
    // Image Block
    // -----------------------------------------------------------------------
    ImageBlock: {
      fields: {
        src: { type: 'text' },
        alt: { type: 'text' },
        width: { type: 'text' },
      },
      defaultProps: {
        src: 'https://placehold.co/800x400/e2e8f0/64748b?text=Your+Image+Here',
        alt: 'Descriptive image alt text',
        width: '100%',
      },
      render: ({ src, alt, width }) => (
        <div
          style={{
            padding: '24px 48px',
            textAlign: 'center',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            style={{
              width: width,
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              display: 'inline-block',
            }}
          />
        </div>
      ),
    },

    // -----------------------------------------------------------------------
    // Two Column Layout
    // -----------------------------------------------------------------------
    TwoColumnLayout: {
      fields: {
        leftContent: { type: 'textarea' },
        rightContent: { type: 'textarea' },
      },
      defaultProps: {
        leftContent: 'Left column content goes here. Add your text, features, or other content.',
        rightContent:
          'Right column content goes here. Great for feature descriptions or supporting text.',
      },
      render: ({ leftContent, rightContent }) => (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            padding: '40px 48px',
            maxWidth: '1200px',
            margin: '0 auto',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <div
            style={{
              padding: '24px',
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#374151',
            }}
          >
            {leftContent}
          </div>
          <div
            style={{
              padding: '24px',
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#374151',
            }}
          >
            {rightContent}
          </div>
        </div>
      ),
    },

    // -----------------------------------------------------------------------
    // Card Grid
    // -----------------------------------------------------------------------
    CardGrid: {
      fields: {
        cards: {
          type: 'array',
          arrayFields: {
            title: { type: 'text' },
            description: { type: 'textarea' },
          },
          defaultItemProps: {
            title: 'Card Title',
            description: 'Card description goes here.',
          },
        },
      },
      defaultProps: {
        cards: [
          { title: 'Feature One', description: 'Describe your first key feature or benefit here.' },
          { title: 'Feature Two', description: 'Describe your second key feature or benefit here.' },
          { title: 'Feature Three', description: 'Describe your third key feature or benefit here.' },
        ],
      },
      render: ({ cards }) => (
        <div
          style={{
            padding: '40px 48px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                style={{
                  padding: '24px',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
                  border: '1px solid #e2e8f0',
                }}
              >
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    marginBottom: '8px',
                    color: '#1e293b',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.6,
                    color: '#64748b',
                    margin: 0,
                  }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    // -----------------------------------------------------------------------
    // CTA Section
    // -----------------------------------------------------------------------
    CTASection: {
      fields: {
        heading: { type: 'text' },
        buttonText: { type: 'text' },
        buttonUrl: { type: 'text' },
      },
      defaultProps: {
        heading: 'Ready to get started?',
        buttonText: 'Contact Us',
        buttonUrl: '#',
      },
      render: ({ heading, buttonText, buttonUrl }) => (
        <section
          style={{
            backgroundColor: '#f1f5f9',
            padding: '64px 48px',
            textAlign: 'center',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <h2
            style={{
              fontSize: '36px',
              fontWeight: 700,
              marginBottom: '32px',
              color: '#1e293b',
            }}
          >
            {heading}
          </h2>
          <a
            href={buttonUrl}
            style={{
              display: 'inline-block',
              backgroundColor: '#2563eb',
              color: '#ffffff',
              padding: '14px 36px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            {buttonText}
          </a>
        </section>
      ),
    },
  },
}
