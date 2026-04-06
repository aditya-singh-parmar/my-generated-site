import React from 'react'
import type { Config } from '@measured/puck'

// ---------------------------------------------------------------------------
// Component prop types
// ---------------------------------------------------------------------------

type Components = {
  // Layout
  Section: {
    bgColor: string
    padding: 'small' | 'medium' | 'large'
    maxWidth: 'narrow' | 'normal' | 'wide' | 'full'
  }
  Container: {
    maxWidth: 'narrow' | 'normal' | 'wide'
    paddingX: number
    paddingY: number
  }
  TwoColumns: {
    gap: number
    ratio: '50-50' | '60-40' | '40-60' | '70-30' | '30-70'
    verticalAlign: 'top' | 'center' | 'bottom'
  }
  ThreeColumns: {
    gap: number
  }
  Grid: {
    columns: number
    gap: number
  }
  // Content
  Heading: {
    text: string
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    align: 'left' | 'center' | 'right'
    color: string
    fontSize: number
  }
  Text: {
    content: string
    align: 'left' | 'center' | 'right'
    fontSize: 'small' | 'medium' | 'large'
    color: string
  }
  RichText: {
    content: string
    maxWidth: string
    align: 'left' | 'center' | 'right'
  }
  Image: {
    src: string
    alt: string
    width: string
    borderRadius: number
    caption: string
    objectFit: 'cover' | 'contain' | 'fill'
  }
  Video: {
    url: string
    autoplay: 'yes' | 'no'
    controls: 'yes' | 'no'
    aspectRatio: '16-9' | '4-3' | '1-1'
  }
  Spacer: {
    height: number
  }
  Divider: {
    color: string
    width: 'full' | 'half' | 'third'
    thickness: number
  }
  // Interactive
  Button: {
    label: string
    url: string
    variant: 'primary' | 'secondary' | 'outline'
    size: 'sm' | 'md' | 'lg'
    align: 'left' | 'center' | 'right'
    openInNewTab: 'yes' | 'no'
  }
  ButtonGroup: {
    buttons: Array<{ label: string; url: string; variant: 'primary' | 'secondary' | 'outline' }>
    align: 'left' | 'center' | 'right'
    gap: number
  }
  Accordion: {
    items: Array<{ question: string; answer: string }>
    accentColor: string
  }
  Tabs: {
    tabs: Array<{ title: string; content: string }>
    accentColor: string
  }
  // Sections
  Hero: {
    heading: string
    subheading: string
    ctaText: string
    ctaUrl: string
    secondaryCtaText: string
    secondaryCtaUrl: string
    bgColor: string
    textColor: string
    bgImageUrl: string
    overlay: 'none' | 'light' | 'dark'
    minHeight: number
    align: 'left' | 'center' | 'right'
  }
  Features: {
    heading: string
    subheading: string
    features: Array<{ icon: string; title: string; description: string }>
    columns: '2' | '3' | '4'
    accentColor: string
  }
  Testimonials: {
    heading: string
    testimonials: Array<{ quote: string; author: string; role: string; avatar: string }>
    bgColor: string
  }
  Pricing: {
    heading: string
    subheading: string
    plans: Array<{ name: string; price: string; period: string; features: string; ctaText: string; featured: 'yes' | 'no' }>
    accentColor: string
  }
  CTA: {
    heading: string
    description: string
    buttonText: string
    buttonUrl: string
    secondaryButtonText: string
    secondaryButtonUrl: string
    bgColor: string
    textColor: string
  }
  FAQ: {
    heading: string
    subheading: string
    items: Array<{ question: string; answer: string }>
    accentColor: string
  }
  Stats: {
    stats: Array<{ number: string; label: string; description: string }>
    bgColor: string
    textColor: string
  }
  Team: {
    heading: string
    subheading: string
    members: Array<{ name: string; role: string; imageUrl: string; bio: string }>
    columns: '2' | '3' | '4'
  }
  // Navigation
  Navbar: {
    logo: string
    logoUrl: string
    links: Array<{ label: string; url: string }>
    ctaText: string
    ctaUrl: string
    bgColor: string
    textColor: string
    sticky: 'yes' | 'no'
  }
  Footer: {
    logo: string
    description: string
    columns: Array<{ title: string; links: string }>
    copyright: string
    bgColor: string
    textColor: string
  }
  // Forms
  ContactForm: {
    heading: string
    subheading: string
    fields: Array<{ label: string; type: string; required: 'yes' | 'no' }>
    submitText: string
    bgColor: string
    accentColor: string
  }
  NewsletterSignup: {
    heading: string
    description: string
    buttonText: string
    placeholder: string
    bgColor: string
    accentColor: string
  }
  // Legacy (keep for backwards compat with existing saved data)
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
// Helpers
// ---------------------------------------------------------------------------

const FONT = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'

const paddingMap = {
  small: '32px 24px',
  medium: '64px 48px',
  large: '96px 64px',
}

const maxWidthMap = {
  narrow: '720px',
  normal: '1024px',
  wide: '1280px',
  full: '100%',
}

const fontSizeMap = {
  small: '14px',
  medium: '16px',
  large: '20px',
}

const ratioMap: Record<string, string> = {
  '50-50': '1fr 1fr',
  '60-40': '6fr 4fr',
  '40-60': '4fr 6fr',
  '70-30': '7fr 3fr',
  '30-70': '3fr 7fr',
}

// ---------------------------------------------------------------------------
// Config
// All renders use INLINE STYLES only. No Tailwind. The generated site has no
// Tailwind dependency — inline styles are the contract.
// ---------------------------------------------------------------------------

export const puckConfig: Config<Components> = {
  // -------------------------------------------------------------------------
  // Categories
  // -------------------------------------------------------------------------
  categories: {
    layout: {
      title: 'Layout',
      components: ['Section', 'Container', 'TwoColumns', 'ThreeColumns', 'Grid'],
      defaultExpanded: true,
    },
    content: {
      title: 'Content',
      components: ['Heading', 'Text', 'RichText', 'Image', 'Video', 'Spacer', 'Divider'],
    },
    interactive: {
      title: 'Interactive',
      components: ['Button', 'ButtonGroup', 'Accordion', 'Tabs'],
    },
    sections: {
      title: 'Sections',
      components: ['Hero', 'Features', 'Testimonials', 'Pricing', 'CTA', 'FAQ', 'Stats', 'Team'],
    },
    navigation: {
      title: 'Navigation',
      components: ['Navbar', 'Footer'],
    },
    forms: {
      title: 'Forms',
      components: ['ContactForm', 'NewsletterSignup'],
    },
  },

  // -------------------------------------------------------------------------
  // Root — SEO fields
  // -------------------------------------------------------------------------
  root: {
    fields: {
      title: { type: 'text', label: 'Page Title' },
      description: { type: 'textarea', label: 'Meta Description' },
      ogImage: { type: 'text', label: 'OG Image URL' },
      favicon: { type: 'text', label: 'Favicon URL' },
      headSnippet: { type: 'textarea', label: 'Custom <head> Code' },
    },
    defaultProps: {
      title: 'My Site',
      description: '',
      ogImage: '',
      favicon: '',
      headSnippet: '',
    },
    render: ({ children }) => <div style={{ fontFamily: FONT }}>{children}</div>,
  },

  components: {
    // =======================================================================
    // LAYOUT
    // =======================================================================

    Section: {
      fields: {
        bgColor: { type: 'text', label: 'Background Color' },
        padding: {
          type: 'select',
          label: 'Padding',
          options: [
            { label: 'Small (32px)', value: 'small' },
            { label: 'Medium (64px)', value: 'medium' },
            { label: 'Large (96px)', value: 'large' },
          ],
        },
        maxWidth: {
          type: 'select',
          label: 'Max Width',
          options: [
            { label: 'Narrow (720px)', value: 'narrow' },
            { label: 'Normal (1024px)', value: 'normal' },
            { label: 'Wide (1280px)', value: 'wide' },
            { label: 'Full Width', value: 'full' },
          ],
        },
      },
      defaultProps: {
        bgColor: '#ffffff',
        padding: 'medium',
        maxWidth: 'wide',
      },
      render: ({ bgColor, padding, maxWidth, puck: { renderDropZone } }) => (
        <section style={{ backgroundColor: bgColor, fontFamily: FONT }}>
          <div
            style={{
              maxWidth: maxWidthMap[maxWidth],
              margin: '0 auto',
              padding: paddingMap[padding],
            }}
          >
            {renderDropZone({ zone: 'content' })}
          </div>
        </section>
      ),
    },

    Container: {
      fields: {
        maxWidth: {
          type: 'select',
          label: 'Max Width',
          options: [
            { label: 'Narrow (720px)', value: 'narrow' },
            { label: 'Normal (1024px)', value: 'normal' },
            { label: 'Wide (1280px)', value: 'wide' },
          ],
        },
        paddingX: { type: 'number', label: 'Horizontal Padding (px)', min: 0, max: 120 },
        paddingY: { type: 'number', label: 'Vertical Padding (px)', min: 0, max: 120 },
      },
      defaultProps: {
        maxWidth: 'normal',
        paddingX: 48,
        paddingY: 40,
      },
      render: ({ maxWidth, paddingX, paddingY, puck: { renderDropZone } }) => (
        <div
          style={{
            maxWidth: maxWidthMap[maxWidth],
            margin: '0 auto',
            paddingLeft: `${paddingX}px`,
            paddingRight: `${paddingX}px`,
            paddingTop: `${paddingY}px`,
            paddingBottom: `${paddingY}px`,
            fontFamily: FONT,
          }}
        >
          {renderDropZone({ zone: 'content' })}
        </div>
      ),
    },

    TwoColumns: {
      fields: {
        gap: { type: 'number', label: 'Gap (px)', min: 0, max: 120 },
        ratio: {
          type: 'select',
          label: 'Column Ratio',
          options: [
            { label: '50 / 50', value: '50-50' },
            { label: '60 / 40', value: '60-40' },
            { label: '40 / 60', value: '40-60' },
            { label: '70 / 30', value: '70-30' },
            { label: '30 / 70', value: '30-70' },
          ],
        },
        verticalAlign: {
          type: 'radio',
          label: 'Vertical Alignment',
          options: [
            { label: 'Top', value: 'top' },
            { label: 'Center', value: 'center' },
            { label: 'Bottom', value: 'bottom' },
          ],
        },
      },
      defaultProps: {
        gap: 32,
        ratio: '50-50',
        verticalAlign: 'top',
      },
      render: ({ gap, ratio, verticalAlign, puck: { renderDropZone } }) => (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: ratioMap[ratio] ?? '1fr 1fr',
            gap: `${gap}px`,
            alignItems: verticalAlign === 'center' ? 'center' : verticalAlign === 'bottom' ? 'end' : 'start',
            fontFamily: FONT,
          }}
        >
          <div>{renderDropZone({ zone: 'left' })}</div>
          <div>{renderDropZone({ zone: 'right' })}</div>
        </div>
      ),
    },

    ThreeColumns: {
      fields: {
        gap: { type: 'number', label: 'Gap (px)', min: 0, max: 120 },
      },
      defaultProps: { gap: 32 },
      render: ({ gap, puck: { renderDropZone } }) => (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: `${gap}px`,
            fontFamily: FONT,
          }}
        >
          <div>{renderDropZone({ zone: 'col1' })}</div>
          <div>{renderDropZone({ zone: 'col2' })}</div>
          <div>{renderDropZone({ zone: 'col3' })}</div>
        </div>
      ),
    },

    Grid: {
      fields: {
        columns: { type: 'number', label: 'Columns', min: 1, max: 6 },
        gap: { type: 'number', label: 'Gap (px)', min: 0, max: 80 },
      },
      defaultProps: { columns: 3, gap: 24 },
      render: ({ columns, gap, puck: { renderDropZone } }) => (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: `${gap}px`,
            fontFamily: FONT,
          }}
        >
          {renderDropZone({ zone: 'content' })}
        </div>
      ),
    },

    // =======================================================================
    // CONTENT
    // =======================================================================

    Heading: {
      fields: {
        text: { type: 'text', label: 'Text' },
        level: {
          type: 'select',
          label: 'Heading Level',
          options: [
            { label: 'H1', value: 'h1' },
            { label: 'H2', value: 'h2' },
            { label: 'H3', value: 'h3' },
            { label: 'H4', value: 'h4' },
            { label: 'H5', value: 'h5' },
            { label: 'H6', value: 'h6' },
          ],
        },
        align: {
          type: 'radio',
          label: 'Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
        },
        color: { type: 'text', label: 'Color' },
        fontSize: { type: 'number', label: 'Font Size (px)', min: 12, max: 96 },
      },
      defaultProps: {
        text: 'Section Heading',
        level: 'h2',
        align: 'left',
        color: '#1e293b',
        fontSize: 36,
      },
      render: ({ text, level, align, color, fontSize }) => {
        const Tag = level as keyof JSX.IntrinsicElements
        return (
          <Tag
            style={{
              textAlign: align,
              color,
              fontSize: `${fontSize}px`,
              fontWeight: 700,
              lineHeight: 1.2,
              margin: '0 0 16px 0',
              fontFamily: FONT,
            }}
          >
            {text}
          </Tag>
        )
      },
    },

    Text: {
      fields: {
        content: { type: 'textarea', label: 'Content' },
        align: {
          type: 'radio',
          label: 'Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
        },
        fontSize: {
          type: 'select',
          label: 'Font Size',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
        },
        color: { type: 'text', label: 'Color' },
      },
      defaultProps: {
        content: 'Add your text content here.',
        align: 'left',
        fontSize: 'medium',
        color: '#374151',
      },
      render: ({ content, align, fontSize, color }) => (
        <p
          style={{
            textAlign: align,
            fontSize: fontSizeMap[fontSize],
            color,
            lineHeight: 1.7,
            margin: '0 0 16px 0',
            fontFamily: FONT,
          }}
        >
          {content}
        </p>
      ),
    },

    RichText: {
      fields: {
        content: { type: 'textarea', label: 'Content (one paragraph per line)' },
        maxWidth: { type: 'text', label: 'Max Width' },
        align: {
          type: 'radio',
          label: 'Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
        },
      },
      defaultProps: {
        content:
          'This is your first paragraph. Edit it freely.\n\nThis is the second paragraph. Each blank line creates a new paragraph.',
        maxWidth: '760px',
        align: 'left',
      },
      render: ({ content, maxWidth, align }) => (
        <div
          style={{
            maxWidth,
            margin: '0 auto',
            textAlign: align,
            fontFamily: FONT,
          }}
        >
          {content
            .split(/\n\n+/)
            .filter(Boolean)
            .map((paragraph, i) => (
              <p
                key={i}
                style={{
                  fontSize: '17px',
                  lineHeight: 1.75,
                  color: '#374151',
                  margin: '0 0 20px 0',
                }}
              >
                {paragraph.trim()}
              </p>
            ))}
        </div>
      ),
    },

    Image: {
      fields: {
        src: { type: 'text', label: 'Image URL' },
        alt: { type: 'text', label: 'Alt Text' },
        width: { type: 'text', label: 'Width (e.g. 100%, 600px)' },
        borderRadius: { type: 'number', label: 'Border Radius (px)', min: 0, max: 80 },
        caption: { type: 'text', label: 'Caption' },
        objectFit: {
          type: 'select',
          label: 'Object Fit',
          options: [
            { label: 'Cover', value: 'cover' },
            { label: 'Contain', value: 'contain' },
            { label: 'Fill', value: 'fill' },
          ],
        },
      },
      defaultProps: {
        src: 'https://placehold.co/1200x600/e2e8f0/64748b?text=Your+Image+Here',
        alt: 'Descriptive image alt text',
        width: '100%',
        borderRadius: 8,
        caption: '',
        objectFit: 'cover',
      },
      render: ({ src, alt, width, borderRadius, caption, objectFit }) => (
        <figure style={{ margin: 0, fontFamily: FONT }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            style={{
              width,
              maxWidth: '100%',
              height: 'auto',
              borderRadius: `${borderRadius}px`,
              display: 'block',
              objectFit,
            }}
          />
          {caption && (
            <figcaption
              style={{
                marginTop: '8px',
                fontSize: '14px',
                color: '#64748b',
                textAlign: 'center',
              }}
            >
              {caption}
            </figcaption>
          )}
        </figure>
      ),
    },

    Video: {
      fields: {
        url: { type: 'text', label: 'Video URL (YouTube, Vimeo, or direct)' },
        autoplay: {
          type: 'radio',
          label: 'Autoplay',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
        },
        controls: {
          type: 'radio',
          label: 'Show Controls',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
        },
        aspectRatio: {
          type: 'select',
          label: 'Aspect Ratio',
          options: [
            { label: '16:9 (Widescreen)', value: '16-9' },
            { label: '4:3 (Standard)', value: '4-3' },
            { label: '1:1 (Square)', value: '1-1' },
          ],
        },
      },
      defaultProps: {
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        autoplay: 'no',
        controls: 'yes',
        aspectRatio: '16-9',
      },
      render: ({ url, autoplay, controls, aspectRatio }) => {
        const paddingMap: Record<string, string> = {
          '16-9': '56.25%',
          '4-3': '75%',
          '1-1': '100%',
        }
        const isYouTubeOrVimeo =
          url.includes('youtube.com') || url.includes('youtu.be') || url.includes('vimeo.com')
        const embedUrl = isYouTubeOrVimeo
          ? `${url}${url.includes('?') ? '&' : '?'}autoplay=${autoplay === 'yes' ? 1 : 0}&controls=${controls === 'yes' ? 1 : 0}`
          : url

        return (
          <div
            style={{
              position: 'relative',
              paddingBottom: paddingMap[aspectRatio] ?? '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '8px',
              fontFamily: FONT,
            }}
          >
            {isYouTubeOrVimeo ? (
              <iframe
                src={embedUrl}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded video"
              />
            ) : (
              <video
                src={url}
                autoPlay={autoplay === 'yes'}
                controls={controls === 'yes'}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            )}
          </div>
        )
      },
    },

    Spacer: {
      fields: {
        height: { type: 'number', label: 'Height (px)', min: 4, max: 400 },
      },
      defaultProps: { height: 40 },
      render: ({ height }) => <div style={{ height: `${height}px` }} />,
    },

    Divider: {
      fields: {
        color: { type: 'text', label: 'Color' },
        width: {
          type: 'select',
          label: 'Width',
          options: [
            { label: 'Full', value: 'full' },
            { label: 'Half', value: 'half' },
            { label: 'Third', value: 'third' },
          ],
        },
        thickness: { type: 'number', label: 'Thickness (px)', min: 1, max: 16 },
      },
      defaultProps: {
        color: '#e2e8f0',
        width: 'full',
        thickness: 1,
      },
      render: ({ color, width, thickness }) => {
        const widthPercent = width === 'full' ? '100%' : width === 'half' ? '50%' : '33.33%'
        return (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '16px 0' }}>
            <hr
              style={{
                width: widthPercent,
                border: 'none',
                borderTop: `${thickness}px solid ${color}`,
                margin: 0,
              }}
            />
          </div>
        )
      },
    },

    // =======================================================================
    // INTERACTIVE
    // =======================================================================

    Button: {
      fields: {
        label: { type: 'text', label: 'Button Label' },
        url: { type: 'text', label: 'Link URL' },
        variant: {
          type: 'select',
          label: 'Variant',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
          ],
        },
        size: {
          type: 'select',
          label: 'Size',
          options: [
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
          ],
        },
        align: {
          type: 'radio',
          label: 'Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
        },
        openInNewTab: {
          type: 'radio',
          label: 'Open in New Tab',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
        },
      },
      defaultProps: {
        label: 'Click Here',
        url: '#',
        variant: 'primary',
        size: 'md',
        align: 'center',
        openInNewTab: 'no',
      },
      render: ({ label, url, variant, size, align, openInNewTab }) => {
        const sizeStyles: Record<string, React.CSSProperties> = {
          sm: { padding: '8px 20px', fontSize: '14px' },
          md: { padding: '12px 28px', fontSize: '16px' },
          lg: { padding: '16px 40px', fontSize: '18px' },
        }
        const variantStyles: Record<string, React.CSSProperties> = {
          primary: { backgroundColor: '#2563eb', color: '#ffffff', border: '2px solid #2563eb' },
          secondary: { backgroundColor: '#64748b', color: '#ffffff', border: '2px solid #64748b' },
          outline: { backgroundColor: 'transparent', color: '#2563eb', border: '2px solid #2563eb' },
        }
        return (
          <div style={{ textAlign: align, fontFamily: FONT }}>
            <a
              href={url}
              target={openInNewTab === 'yes' ? '_blank' : '_self'}
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                borderRadius: '8px',
                fontWeight: 600,
                textDecoration: 'none',
                ...sizeStyles[size],
                ...variantStyles[variant],
              }}
            >
              {label}
            </a>
          </div>
        )
      },
    },

    ButtonGroup: {
      fields: {
        buttons: {
          type: 'array',
          label: 'Buttons',
          arrayFields: {
            label: { type: 'text', label: 'Label' },
            url: { type: 'text', label: 'URL' },
            variant: {
              type: 'select',
              label: 'Variant',
              options: [
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Outline', value: 'outline' },
              ],
            },
          },
          defaultItemProps: { label: 'Button', url: '#', variant: 'primary' as const },
        },
        align: {
          type: 'radio',
          label: 'Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
        },
        gap: { type: 'number', label: 'Gap (px)', min: 4, max: 48 },
      },
      defaultProps: {
        buttons: [
          { label: 'Get Started', url: '#', variant: 'primary' as const },
          { label: 'Learn More', url: '#', variant: 'outline' as const },
        ],
        align: 'center',
        gap: 12,
      },
      render: ({ buttons, align, gap }) => {
        const variantStyles: Record<string, React.CSSProperties> = {
          primary: { backgroundColor: '#2563eb', color: '#ffffff', border: '2px solid #2563eb' },
          secondary: { backgroundColor: '#64748b', color: '#ffffff', border: '2px solid #64748b' },
          outline: { backgroundColor: 'transparent', color: '#2563eb', border: '2px solid #2563eb' },
        }
        return (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: `${gap}px`,
              justifyContent: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
              fontFamily: FONT,
            }}
          >
            {buttons.map((btn, i) => (
              <a
                key={i}
                href={btn.url}
                style={{
                  display: 'inline-block',
                  padding: '12px 28px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '16px',
                  textDecoration: 'none',
                  ...variantStyles[btn.variant],
                }}
              >
                {btn.label}
              </a>
            ))}
          </div>
        )
      },
    },

    Accordion: {
      fields: {
        items: {
          type: 'array',
          label: 'Items',
          arrayFields: {
            question: { type: 'text', label: 'Question' },
            answer: { type: 'textarea', label: 'Answer' },
          },
          defaultItemProps: {
            question: 'Frequently Asked Question',
            answer: 'This is the answer to the frequently asked question.',
          },
        },
        accentColor: { type: 'text', label: 'Accent Color' },
      },
      defaultProps: {
        items: [
          {
            question: 'What is your return policy?',
            answer: 'We offer a 30-day return policy on all items. No questions asked.',
          },
          {
            question: 'How long does shipping take?',
            answer: 'Standard shipping takes 3-5 business days. Express shipping is available at checkout.',
          },
          {
            question: 'Do you offer customer support?',
            answer: 'Yes! Our support team is available Monday through Friday, 9am to 6pm.',
          },
        ],
        accentColor: '#2563eb',
      },
      render: ({ items, accentColor }) => (
        <div style={{ fontFamily: FONT }}>
          {items.map((item, i) => (
            <details
              key={i}
              style={{
                borderBottom: '1px solid #e2e8f0',
                padding: '0',
              }}
            >
              <summary
                style={{
                  padding: '16px 0',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#1e293b',
                  cursor: 'pointer',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {item.question}
                <span
                  style={{
                    color: accentColor,
                    fontSize: '22px',
                    fontWeight: 300,
                    flexShrink: 0,
                    marginLeft: '16px',
                  }}
                >
                  +
                </span>
              </summary>
              <p
                style={{
                  padding: '0 0 16px 0',
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: '#64748b',
                  margin: 0,
                }}
              >
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      ),
    },

    Tabs: {
      fields: {
        tabs: {
          type: 'array',
          label: 'Tabs',
          arrayFields: {
            title: { type: 'text', label: 'Tab Title' },
            content: { type: 'textarea', label: 'Tab Content' },
          },
          defaultItemProps: { title: 'New Tab', content: 'Tab content goes here.' },
        },
        accentColor: { type: 'text', label: 'Accent Color' },
      },
      defaultProps: {
        tabs: [
          { title: 'Overview', content: 'This is the overview content for the first tab.' },
          { title: 'Features', content: 'This is the features content for the second tab.' },
          { title: 'Pricing', content: 'This is the pricing content for the third tab.' },
        ],
        accentColor: '#2563eb',
      },
      render: ({ tabs, accentColor }) => {
        // Static render — first tab shown, others hidden via CSS-only
        // For a JS-driven tab switcher the generated site would need client JS
        return (
          <div style={{ fontFamily: FONT }}>
            <div
              style={{
                display: 'flex',
                borderBottom: '2px solid #e2e8f0',
                gap: '0',
                marginBottom: '24px',
              }}
            >
              {tabs.map((tab, i) => (
                <div
                  key={i}
                  style={{
                    padding: '12px 24px',
                    fontSize: '15px',
                    fontWeight: i === 0 ? 600 : 400,
                    color: i === 0 ? accentColor : '#64748b',
                    borderBottom: i === 0 ? `2px solid ${accentColor}` : '2px solid transparent',
                    marginBottom: '-2px',
                    cursor: 'pointer',
                  }}
                >
                  {tab.title}
                </div>
              ))}
            </div>
            <div>
              {tabs[0] && (
                <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#374151' }}>
                  {tabs[0].content}
                </p>
              )}
            </div>
          </div>
        )
      },
    },

    // =======================================================================
    // SECTIONS
    // =======================================================================

    Hero: {
      fields: {
        heading: { type: 'text', label: 'Heading' },
        subheading: { type: 'text', label: 'Subheading' },
        ctaText: { type: 'text', label: 'Primary CTA Text' },
        ctaUrl: { type: 'text', label: 'Primary CTA URL' },
        secondaryCtaText: { type: 'text', label: 'Secondary CTA Text' },
        secondaryCtaUrl: { type: 'text', label: 'Secondary CTA URL' },
        bgColor: { type: 'text', label: 'Background Color' },
        textColor: { type: 'text', label: 'Text Color' },
        bgImageUrl: { type: 'text', label: 'Background Image URL' },
        overlay: {
          type: 'radio',
          label: 'Image Overlay',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
          ],
        },
        minHeight: { type: 'number', label: 'Min Height (px)', min: 200, max: 1000 },
        align: {
          type: 'radio',
          label: 'Content Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
        },
      },
      defaultProps: {
        heading: 'Build Something Amazing',
        subheading: 'Create stunning websites with an intuitive drag-and-drop editor. No code required.',
        ctaText: 'Get Started Free',
        ctaUrl: '#',
        secondaryCtaText: 'See Demo',
        secondaryCtaUrl: '#',
        bgColor: '#0f172a',
        textColor: '#ffffff',
        bgImageUrl: '',
        overlay: 'dark',
        minHeight: 600,
        align: 'center',
      },
      render: ({ heading, subheading, ctaText, ctaUrl, secondaryCtaText, secondaryCtaUrl, bgColor, textColor, bgImageUrl, overlay, minHeight, align }) => {
        const overlayBg =
          overlay === 'dark'
            ? 'rgba(0,0,0,0.55)'
            : overlay === 'light'
            ? 'rgba(255,255,255,0.55)'
            : 'transparent'

        return (
          <section
            style={{
              position: 'relative',
              backgroundColor: bgColor,
              backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: `${minHeight}px`,
              display: 'flex',
              alignItems: 'center',
              fontFamily: FONT,
            }}
          >
            {overlay !== 'none' && bgImageUrl && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: overlayBg,
                  zIndex: 1,
                }}
              />
            )}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '80px 48px',
                textAlign: align,
                width: '100%',
              }}
            >
              <h1
                style={{
                  fontSize: '56px',
                  fontWeight: 800,
                  color: textColor,
                  marginBottom: '20px',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                {heading}
              </h1>
              <p
                style={{
                  fontSize: '20px',
                  color: textColor,
                  opacity: 0.85,
                  marginBottom: '40px',
                  lineHeight: 1.6,
                  maxWidth: align === 'center' ? '640px' : '640px',
                  margin: align === 'center' ? '0 auto 40px' : '0 0 40px',
                }}
              >
                {subheading}
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap',
                  justifyContent: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
                }}
              >
                {ctaText && (
                  <a
                    href={ctaUrl}
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#2563eb',
                      color: '#ffffff',
                      padding: '16px 40px',
                      borderRadius: '8px',
                      fontSize: '17px',
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}
                  >
                    {ctaText}
                  </a>
                )}
                {secondaryCtaText && (
                  <a
                    href={secondaryCtaUrl}
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'transparent',
                      color: textColor,
                      padding: '16px 40px',
                      borderRadius: '8px',
                      fontSize: '17px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      border: `2px solid ${textColor}`,
                    }}
                  >
                    {secondaryCtaText}
                  </a>
                )}
              </div>
            </div>
          </section>
        )
      },
    },

    Features: {
      fields: {
        heading: { type: 'text', label: 'Heading' },
        subheading: { type: 'text', label: 'Subheading' },
        features: {
          type: 'array',
          label: 'Features',
          arrayFields: {
            icon: { type: 'text', label: 'Icon (emoji or text)' },
            title: { type: 'text', label: 'Title' },
            description: { type: 'textarea', label: 'Description' },
          },
          defaultItemProps: { icon: '✨', title: 'New Feature', description: 'Describe this feature.' },
        },
        columns: {
          type: 'select',
          label: 'Columns',
          options: [
            { label: '2 Columns', value: '2' },
            { label: '3 Columns', value: '3' },
            { label: '4 Columns', value: '4' },
          ],
        },
        accentColor: { type: 'text', label: 'Accent Color' },
      },
      defaultProps: {
        heading: 'Everything You Need',
        subheading: 'Powerful tools to build, launch, and grow your online presence.',
        features: [
          { icon: '⚡', title: 'Lightning Fast', description: 'Optimized for performance — your site loads in under a second.' },
          { icon: '🎨', title: 'Beautiful Design', description: 'Professionally designed components that look great out of the box.' },
          { icon: '📱', title: 'Mobile Responsive', description: 'Every layout adapts perfectly to any screen size, automatically.' },
          { icon: '🔒', title: 'Secure by Default', description: 'Built-in security best practices keep your site and users safe.' },
          { icon: '🚀', title: 'One-Click Deploy', description: 'Push your changes live in seconds with automated deployments.' },
          { icon: '📊', title: 'Analytics Ready', description: 'Integrate your analytics tools with zero configuration.' },
        ],
        columns: '3',
        accentColor: '#2563eb',
      },
      render: ({ heading, subheading, features, columns, accentColor }) => (
        <section
          style={{
            padding: '80px 48px',
            backgroundColor: '#ffffff',
            fontFamily: FONT,
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <h2
                style={{
                  fontSize: '40px',
                  fontWeight: 800,
                  color: '#1e293b',
                  marginBottom: '16px',
                  letterSpacing: '-0.02em',
                }}
              >
                {heading}
              </h2>
              <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
                {subheading}
              </p>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap: '32px',
              }}
            >
              {features.map((feat, i) => (
                <div
                  key={i}
                  style={{
                    padding: '28px',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    backgroundColor: '#fafafa',
                  }}
                >
                  <div
                    style={{
                      fontSize: '32px',
                      marginBottom: '12px',
                      display: 'inline-block',
                      padding: '8px',
                      backgroundColor: `${accentColor}15`,
                      borderRadius: '8px',
                    }}
                  >
                    {feat.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#1e293b',
                      marginBottom: '8px',
                    }}
                  >
                    {feat.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ),
    },

    Testimonials: {
      fields: {
        heading: { type: 'text', label: 'Heading' },
        testimonials: {
          type: 'array',
          label: 'Testimonials',
          arrayFields: {
            quote: { type: 'textarea', label: 'Quote' },
            author: { type: 'text', label: 'Author Name' },
            role: { type: 'text', label: 'Role / Company' },
            avatar: { type: 'text', label: 'Avatar URL' },
          },
          defaultItemProps: {
            quote: 'This product changed how we work completely.',
            author: 'Alex Johnson',
            role: 'CEO, Acme Inc.',
            avatar: '',
          },
        },
        bgColor: { type: 'text', label: 'Background Color' },
      },
      defaultProps: {
        heading: 'What Our Customers Say',
        testimonials: [
          {
            quote: 'This is the most intuitive website builder I\'ve ever used. I launched my site in under an hour.',
            author: 'Sarah Chen',
            role: 'Founder, DesignLab',
            avatar: 'https://placehold.co/80x80/dbeafe/2563eb?text=SC',
          },
          {
            quote: 'The drag-and-drop interface is flawless. Every component looks great and is easy to customize.',
            author: 'Marcus Williams',
            role: 'Marketing Director, TechCorp',
            avatar: 'https://placehold.co/80x80/dcfce7/16a34a?text=MW',
          },
          {
            quote: 'I went from idea to live website in one afternoon. The publish flow is genuinely magic.',
            author: 'Priya Patel',
            role: 'Freelance Designer',
            avatar: 'https://placehold.co/80x80/fce7f3/db2777?text=PP',
          },
        ],
        bgColor: '#f8fafc',
      },
      render: ({ heading, testimonials, bgColor }) => (
        <section
          style={{
            backgroundColor: bgColor,
            padding: '80px 48px',
            fontFamily: FONT,
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '40px',
                fontWeight: 800,
                color: '#1e293b',
                textAlign: 'center',
                marginBottom: '48px',
                letterSpacing: '-0.02em',
              }}
            >
              {heading}
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '28px',
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    padding: '32px',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <p
                    style={{
                      fontSize: '16px',
                      lineHeight: 1.7,
                      color: '#374151',
                      marginBottom: '24px',
                      fontStyle: 'italic',
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {t.avatar && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={t.avatar}
                        alt={t.author}
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                        }}
                      />
                    )}
                    <div>
                      <div style={{ fontWeight: 700, color: '#1e293b', fontSize: '15px' }}>{t.author}</div>
                      <div style={{ color: '#64748b', fontSize: '13px' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ),
    },

    Pricing: {
      fields: {
        heading: { type: 'text', label: 'Heading' },
        subheading: { type: 'text', label: 'Subheading' },
        plans: {
          type: 'array',
          label: 'Plans',
          arrayFields: {
            name: { type: 'text', label: 'Plan Name' },
            price: { type: 'text', label: 'Price' },
            period: { type: 'text', label: 'Period (e.g. /month)' },
            features: { type: 'textarea', label: 'Features (one per line)' },
            ctaText: { type: 'text', label: 'CTA Button Text' },
            featured: {
              type: 'radio',
              label: 'Featured Plan',
              options: [
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
              ],
            },
          },
          defaultItemProps: {
            name: 'New Plan',
            price: '$0',
            period: '/month',
            features: 'Feature One\nFeature Two\nFeature Three',
            ctaText: 'Get Started',
            featured: 'no' as const,
          },
        },
        accentColor: { type: 'text', label: 'Accent Color' },
      },
      defaultProps: {
        heading: 'Simple, Transparent Pricing',
        subheading: 'Choose the plan that fits your needs. No hidden fees.',
        plans: [
          {
            name: 'Starter',
            price: 'Free',
            period: 'forever',
            features: '1 website\n5 pages max\nBasic components\nCommunity support',
            ctaText: 'Start Free',
            featured: 'no' as const,
          },
          {
            name: 'Pro',
            price: '$29',
            period: '/month',
            features: 'Unlimited websites\nUnlimited pages\nAll components\nCustom domain\nPriority support',
            ctaText: 'Start Free Trial',
            featured: 'yes' as const,
          },
          {
            name: 'Business',
            price: '$79',
            period: '/month',
            features: 'Everything in Pro\nTeam collaboration\nAdvanced analytics\nSSO / SAML\nDedicated support',
            ctaText: 'Contact Sales',
            featured: 'no' as const,
          },
        ],
        accentColor: '#2563eb',
      },
      render: ({ heading, subheading, plans, accentColor }) => (
        <section style={{ padding: '80px 48px', backgroundColor: '#ffffff', fontFamily: FONT }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <h2
                style={{
                  fontSize: '40px',
                  fontWeight: 800,
                  color: '#1e293b',
                  marginBottom: '16px',
                  letterSpacing: '-0.02em',
                }}
              >
                {heading}
              </h2>
              <p style={{ fontSize: '18px', color: '#64748b' }}>{subheading}</p>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${plans.length}, 1fr)`,
                gap: '24px',
                alignItems: 'start',
              }}
            >
              {plans.map((plan, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: '16px',
                    padding: '36px 28px',
                    border: plan.featured === 'yes' ? `2px solid ${accentColor}` : '1px solid #e2e8f0',
                    backgroundColor: plan.featured === 'yes' ? accentColor : '#fafafa',
                    position: 'relative',
                  }}
                >
                  {plan.featured === 'yes' && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#f59e0b',
                        color: '#ffffff',
                        fontSize: '12px',
                        fontWeight: 700,
                        padding: '4px 12px',
                        borderRadius: '999px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      MOST POPULAR
                    </div>
                  )}
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: plan.featured === 'yes' ? '#ffffff' : '#1e293b',
                      marginBottom: '8px',
                    }}
                  >
                    {plan.name}
                  </h3>
                  <div style={{ marginBottom: '24px' }}>
                    <span
                      style={{
                        fontSize: '48px',
                        fontWeight: 800,
                        color: plan.featured === 'yes' ? '#ffffff' : '#1e293b',
                      }}
                    >
                      {plan.price}
                    </span>
                    <span
                      style={{
                        fontSize: '16px',
                        color: plan.featured === 'yes' ? 'rgba(255,255,255,0.8)' : '#64748b',
                      }}
                    >
                      {' '}{plan.period}
                    </span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0' }}>
                    {plan.features
                      .split('\n')
                      .filter(Boolean)
                      .map((feature, j) => (
                        <li
                          key={j}
                          style={{
                            padding: '6px 0',
                            fontSize: '15px',
                            color: plan.featured === 'yes' ? 'rgba(255,255,255,0.9)' : '#374151',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                          }}
                        >
                          <span style={{ color: plan.featured === 'yes' ? '#a5f3fc' : '#22c55e', fontWeight: 700 }}>✓</span>
                          {feature}
                        </li>
                      ))}
                  </ul>
                  <a
                    href="#"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontWeight: 700,
                      fontSize: '16px',
                      textDecoration: 'none',
                      backgroundColor: plan.featured === 'yes' ? '#ffffff' : accentColor,
                      color: plan.featured === 'yes' ? accentColor : '#ffffff',
                    }}
                  >
                    {plan.ctaText}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ),
    },

    CTA: {
      fields: {
        heading: { type: 'text', label: 'Heading' },
        description: { type: 'textarea', label: 'Description' },
        buttonText: { type: 'text', label: 'Primary Button Text' },
        buttonUrl: { type: 'text', label: 'Primary Button URL' },
        secondaryButtonText: { type: 'text', label: 'Secondary Button Text' },
        secondaryButtonUrl: { type: 'text', label: 'Secondary Button URL' },
        bgColor: { type: 'text', label: 'Background Color' },
        textColor: { type: 'text', label: 'Text Color' },
      },
      defaultProps: {
        heading: 'Ready to get started?',
        description: 'Join thousands of teams already building better websites.',
        buttonText: 'Start for Free',
        buttonUrl: '#',
        secondaryButtonText: 'Talk to Sales',
        secondaryButtonUrl: '#',
        bgColor: '#2563eb',
        textColor: '#ffffff',
      },
      render: ({ heading, description, buttonText, buttonUrl, secondaryButtonText, secondaryButtonUrl, bgColor, textColor }) => (
        <section
          style={{
            backgroundColor: bgColor,
            padding: '80px 48px',
            textAlign: 'center',
            fontFamily: FONT,
          }}
        >
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '44px',
                fontWeight: 800,
                color: textColor,
                marginBottom: '16px',
                letterSpacing: '-0.02em',
              }}
            >
              {heading}
            </h2>
            <p style={{ fontSize: '18px', color: textColor, opacity: 0.85, marginBottom: '40px', lineHeight: 1.6 }}>
              {description}
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {buttonText && (
                <a
                  href={buttonUrl}
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#ffffff',
                    color: bgColor,
                    padding: '14px 36px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  {buttonText}
                </a>
              )}
              {secondaryButtonText && (
                <a
                  href={secondaryButtonUrl}
                  style={{
                    display: 'inline-block',
                    backgroundColor: 'transparent',
                    color: textColor,
                    padding: '14px 36px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    border: `2px solid ${textColor}`,
                  }}
                >
                  {secondaryButtonText}
                </a>
              )}
            </div>
          </div>
        </section>
      ),
    },

    FAQ: {
      fields: {
        heading: { type: 'text', label: 'Heading' },
        subheading: { type: 'text', label: 'Subheading' },
        items: {
          type: 'array',
          label: 'FAQ Items',
          arrayFields: {
            question: { type: 'text', label: 'Question' },
            answer: { type: 'textarea', label: 'Answer' },
          },
          defaultItemProps: {
            question: 'New question',
            answer: 'Answer goes here.',
          },
        },
        accentColor: { type: 'text', label: 'Accent Color' },
      },
      defaultProps: {
        heading: 'Frequently Asked Questions',
        subheading: 'Everything you need to know about the product.',
        items: [
          { question: 'Is there a free plan?', answer: 'Yes, we offer a generous free tier. You can create one site with up to 5 pages at no cost, forever.' },
          { question: 'Can I use my own domain?', answer: 'Absolutely. Pro and Business plans include custom domain support via the Vercel integration.' },
          { question: 'Do I need to know how to code?', answer: 'Not at all. The drag-and-drop builder is designed for non-technical users. No code required.' },
          { question: 'How do I cancel my subscription?', answer: 'You can cancel at any time from your account settings. No cancellation fees.' },
          { question: 'Is my data secure?', answer: 'Yes. All data is encrypted at rest and in transit. We follow security best practices.' },
        ],
        accentColor: '#2563eb',
      },
      render: ({ heading, subheading, items, accentColor }) => (
        <section style={{ padding: '80px 48px', backgroundColor: '#ffffff', fontFamily: FONT }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '40px', fontWeight: 800, color: '#1e293b', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                {heading}
              </h2>
              <p style={{ fontSize: '18px', color: '#64748b' }}>{subheading}</p>
            </div>
            {items.map((item, i) => (
              <details
                key={i}
                style={{ borderBottom: '1px solid #e2e8f0' }}
              >
                <summary
                  style={{
                    padding: '20px 0',
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#1e293b',
                    cursor: 'pointer',
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {item.question}
                  <span style={{ color: accentColor, fontSize: '22px', fontWeight: 300, marginLeft: '16px', flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ padding: '0 0 20px 0', fontSize: '16px', lineHeight: 1.7, color: '#64748b', margin: 0 }}>
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      ),
    },

    Stats: {
      fields: {
        stats: {
          type: 'array',
          label: 'Stats',
          arrayFields: {
            number: { type: 'text', label: 'Number / Value' },
            label: { type: 'text', label: 'Label' },
            description: { type: 'text', label: 'Description' },
          },
          defaultItemProps: { number: '100+', label: 'New Stat', description: 'Describe this metric' },
        },
        bgColor: { type: 'text', label: 'Background Color' },
        textColor: { type: 'text', label: 'Text Color' },
      },
      defaultProps: {
        stats: [
          { number: '50K+', label: 'Active Users', description: 'Teams shipping faster with our platform' },
          { number: '2M+', label: 'Pages Built', description: 'Live websites powered by our builder' },
          { number: '99.9%', label: 'Uptime', description: 'Reliability you can depend on' },
          { number: '<1s', label: 'Load Time', description: 'Average page load across all sites' },
        ],
        bgColor: '#0f172a',
        textColor: '#ffffff',
      },
      render: ({ stats, bgColor, textColor }) => (
        <section
          style={{
            backgroundColor: bgColor,
            padding: '72px 48px',
            fontFamily: FONT,
          }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
              gap: '40px',
              textAlign: 'center',
            }}
          >
            {stats.map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: '52px', fontWeight: 800, color: textColor, letterSpacing: '-0.03em', lineHeight: 1 }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '18px', fontWeight: 600, color: textColor, opacity: 0.9, marginTop: '8px' }}>
                  {stat.label}
                </div>
                {stat.description && (
                  <div style={{ fontSize: '14px', color: textColor, opacity: 0.6, marginTop: '4px', lineHeight: 1.5 }}>
                    {stat.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ),
    },

    Team: {
      fields: {
        heading: { type: 'text', label: 'Heading' },
        subheading: { type: 'text', label: 'Subheading' },
        members: {
          type: 'array',
          label: 'Team Members',
          arrayFields: {
            name: { type: 'text', label: 'Name' },
            role: { type: 'text', label: 'Role / Title' },
            imageUrl: { type: 'text', label: 'Photo URL' },
            bio: { type: 'textarea', label: 'Bio' },
          },
          defaultItemProps: {
            name: 'Team Member',
            role: 'Role',
            imageUrl: 'https://placehold.co/240x240/e2e8f0/64748b?text=Photo',
            bio: 'Short bio about this team member.',
          },
        },
        columns: {
          type: 'select',
          label: 'Columns',
          options: [
            { label: '2 Columns', value: '2' },
            { label: '3 Columns', value: '3' },
            { label: '4 Columns', value: '4' },
          ],
        },
      },
      defaultProps: {
        heading: 'Meet Our Team',
        subheading: 'The people behind the product.',
        members: [
          {
            name: 'Jordan Lee',
            role: 'Co-Founder & CEO',
            imageUrl: 'https://placehold.co/240x240/dbeafe/2563eb?text=JL',
            bio: 'Product visionary with 10 years of experience building developer tools.',
          },
          {
            name: 'Taylor Kim',
            role: 'CTO',
            imageUrl: 'https://placehold.co/240x240/dcfce7/16a34a?text=TK',
            bio: 'Full-stack engineer passionate about performance and developer experience.',
          },
          {
            name: 'Morgan Rivera',
            role: 'Head of Design',
            imageUrl: 'https://placehold.co/240x240/fce7f3/db2777?text=MR',
            bio: 'Crafts delightful interfaces that are both beautiful and intuitive.',
          },
        ],
        columns: '3',
      },
      render: ({ heading, subheading, members, columns }) => (
        <section style={{ padding: '80px 48px', backgroundColor: '#f8fafc', fontFamily: FONT }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <h2 style={{ fontSize: '40px', fontWeight: 800, color: '#1e293b', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                {heading}
              </h2>
              <p style={{ fontSize: '18px', color: '#64748b' }}>{subheading}</p>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap: '32px',
              }}
            >
              {members.map((member, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      margin: '0 auto 16px',
                      display: 'block',
                    }}
                  />
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1e293b', marginBottom: '4px' }}>
                    {member.name}
                  </h3>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#2563eb', marginBottom: '8px' }}>
                    {member.role}
                  </div>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ),
    },

    // =======================================================================
    // NAVIGATION
    // =======================================================================

    Navbar: {
      fields: {
        logo: { type: 'text', label: 'Logo Text' },
        logoUrl: { type: 'text', label: 'Logo Link URL' },
        links: {
          type: 'array',
          label: 'Nav Links',
          arrayFields: {
            label: { type: 'text', label: 'Label' },
            url: { type: 'text', label: 'URL' },
          },
          defaultItemProps: { label: 'Link', url: '#' },
        },
        ctaText: { type: 'text', label: 'CTA Button Text' },
        ctaUrl: { type: 'text', label: 'CTA Button URL' },
        bgColor: { type: 'text', label: 'Background Color' },
        textColor: { type: 'text', label: 'Text Color' },
        sticky: {
          type: 'radio',
          label: 'Sticky Navigation',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
        },
      },
      defaultProps: {
        logo: 'Acme',
        logoUrl: '/',
        links: [
          { label: 'Features', url: '#features' },
          { label: 'Pricing', url: '#pricing' },
          { label: 'About', url: '#about' },
        ],
        ctaText: 'Get Started',
        ctaUrl: '#',
        bgColor: '#ffffff',
        textColor: '#1e293b',
        sticky: 'yes',
      },
      render: ({ logo, logoUrl, links, ctaText, ctaUrl, bgColor, textColor, sticky }) => (
        <nav
          style={{
            backgroundColor: bgColor,
            borderBottom: '1px solid #e2e8f0',
            position: sticky === 'yes' ? 'sticky' : 'relative',
            top: 0,
            zIndex: 100,
            fontFamily: FONT,
          }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '64px',
            }}
          >
            <a
              href={logoUrl}
              style={{
                fontSize: '20px',
                fontWeight: 800,
                color: textColor,
                textDecoration: 'none',
                letterSpacing: '-0.02em',
              }}
            >
              {logo}
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: textColor,
                    textDecoration: 'none',
                    opacity: 0.8,
                  }}
                >
                  {link.label}
                </a>
              ))}
              {ctaText && (
                <a
                  href={ctaUrl}
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#2563eb',
                    color: '#ffffff',
                    padding: '8px 20px',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  {ctaText}
                </a>
              )}
            </div>
          </div>
        </nav>
      ),
    },

    Footer: {
      fields: {
        logo: { type: 'text', label: 'Logo / Brand Name' },
        description: { type: 'textarea', label: 'Brand Description' },
        columns: {
          type: 'array',
          label: 'Link Columns',
          arrayFields: {
            title: { type: 'text', label: 'Column Title' },
            links: { type: 'textarea', label: 'Links (one "Label|URL" per line)' },
          },
          defaultItemProps: { title: 'Column', links: 'Link One|#\nLink Two|#' },
        },
        copyright: { type: 'text', label: 'Copyright Text' },
        bgColor: { type: 'text', label: 'Background Color' },
        textColor: { type: 'text', label: 'Text Color' },
      },
      defaultProps: {
        logo: 'Acme',
        description: 'Building better websites, faster. The drag-and-drop editor for modern teams.',
        columns: [
          { title: 'Product', links: 'Features|#\nPricing|#\nChangelog|#\nRoadmap|#' },
          { title: 'Company', links: 'About|#\nBlog|#\nCareers|#\nContact|#' },
          { title: 'Legal', links: 'Privacy Policy|#\nTerms of Service|#\nCookie Policy|#' },
        ],
        copyright: '© 2025 Acme Inc. All rights reserved.',
        bgColor: '#0f172a',
        textColor: '#94a3b8',
      },
      render: ({ logo, description, columns, copyright, bgColor, textColor }) => (
        <footer style={{ backgroundColor: bgColor, padding: '64px 48px 32px', fontFamily: FONT }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `2fr ${columns.map(() => '1fr').join(' ')}`,
                gap: '48px',
                marginBottom: '48px',
              }}
            >
              <div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                  {logo}
                </div>
                <p style={{ fontSize: '15px', color: textColor, lineHeight: 1.7, maxWidth: '280px' }}>
                  {description}
                </p>
              </div>
              {columns.map((col, i) => (
                <div key={i}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {col.title}
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {col.links
                      .split('\n')
                      .filter(Boolean)
                      .map((line, j) => {
                        const [label, url] = line.split('|')
                        return (
                          <li key={j} style={{ marginBottom: '8px' }}>
                            <a
                              href={url ?? '#'}
                              style={{
                                fontSize: '15px',
                                color: textColor,
                                textDecoration: 'none',
                                lineHeight: 1.5,
                              }}
                            >
                              {label}
                            </a>
                          </li>
                        )
                      })}
                  </ul>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
              <p style={{ fontSize: '14px', color: textColor, margin: 0, opacity: 0.7 }}>
                {copyright}
              </p>
            </div>
          </div>
        </footer>
      ),
    },

    // =======================================================================
    // FORMS
    // =======================================================================

    ContactForm: {
      fields: {
        heading: { type: 'text', label: 'Heading' },
        subheading: { type: 'text', label: 'Subheading' },
        fields: {
          type: 'array',
          label: 'Form Fields',
          arrayFields: {
            label: { type: 'text', label: 'Field Label' },
            type: { type: 'text', label: 'Input Type (text, email, tel, textarea)' },
            required: {
              type: 'radio',
              label: 'Required',
              options: [
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
              ],
            },
          },
          defaultItemProps: { label: 'New Field', type: 'text', required: 'yes' as const },
        },
        submitText: { type: 'text', label: 'Submit Button Text' },
        bgColor: { type: 'text', label: 'Background Color' },
        accentColor: { type: 'text', label: 'Accent Color' },
      },
      defaultProps: {
        heading: 'Get In Touch',
        subheading: "We'd love to hear from you. Send us a message and we'll respond within 24 hours.",
        fields: [
          { label: 'Full Name', type: 'text', required: 'yes' as const },
          { label: 'Email Address', type: 'email', required: 'yes' as const },
          { label: 'Phone Number', type: 'tel', required: 'no' as const },
          { label: 'Message', type: 'textarea', required: 'yes' as const },
        ],
        submitText: 'Send Message',
        bgColor: '#f8fafc',
        accentColor: '#2563eb',
      },
      render: ({ heading, subheading, fields: formFields, submitText, bgColor, accentColor }) => {
        const inputStyle: React.CSSProperties = {
          width: '100%',
          padding: '10px 14px',
          border: '1px solid #e2e8f0',
          borderRadius: '6px',
          fontSize: '15px',
          color: '#1e293b',
          backgroundColor: '#ffffff',
          boxSizing: 'border-box',
          fontFamily: FONT,
        }
        return (
          <section style={{ backgroundColor: bgColor, padding: '80px 48px', fontFamily: FONT }}>
            <div style={{ maxWidth: '640px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#1e293b', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                {heading}
              </h2>
              <p style={{ fontSize: '17px', color: '#64748b', marginBottom: '36px', lineHeight: 1.6 }}>
                {subheading}
              </p>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {formFields.map((field, i) => (
                  <div key={i}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                      {field.label}
                      {field.required === 'yes' && <span style={{ color: '#ef4444', marginLeft: '4px' }}>*</span>}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        placeholder={field.label}
                        rows={5}
                        style={{ ...inputStyle, resize: 'vertical' }}
                      />
                    ) : (
                      <input type={field.type} placeholder={field.label} style={inputStyle} />
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  style={{
                    backgroundColor: accentColor,
                    color: '#ffffff',
                    padding: '12px 32px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    marginTop: '4px',
                    alignSelf: 'flex-start',
                    fontFamily: FONT,
                  }}
                >
                  {submitText}
                </button>
              </form>
            </div>
          </section>
        )
      },
    },

    NewsletterSignup: {
      fields: {
        heading: { type: 'text', label: 'Heading' },
        description: { type: 'textarea', label: 'Description' },
        buttonText: { type: 'text', label: 'Button Text' },
        placeholder: { type: 'text', label: 'Input Placeholder' },
        bgColor: { type: 'text', label: 'Background Color' },
        accentColor: { type: 'text', label: 'Accent Color' },
      },
      defaultProps: {
        heading: 'Stay In The Loop',
        description: 'Get product updates, tips, and resources delivered to your inbox. No spam, ever.',
        buttonText: 'Subscribe',
        placeholder: 'Enter your email address',
        bgColor: '#eff6ff',
        accentColor: '#2563eb',
      },
      render: ({ heading, description, buttonText, placeholder, bgColor, accentColor }) => (
        <section
          style={{
            backgroundColor: bgColor,
            padding: '64px 48px',
            textAlign: 'center',
            fontFamily: FONT,
          }}
        >
          <div style={{ maxWidth: '520px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#1e293b', marginBottom: '12px', letterSpacing: '-0.02em' }}>
              {heading}
            </h2>
            <p style={{ fontSize: '17px', color: '#475569', marginBottom: '32px', lineHeight: 1.6 }}>
              {description}
            </p>
            <form
              style={{
                display: 'flex',
                gap: '8px',
                maxWidth: '440px',
                margin: '0 auto',
              }}
            >
              <input
                type="email"
                placeholder={placeholder}
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '15px',
                  color: '#1e293b',
                  backgroundColor: '#ffffff',
                  fontFamily: FONT,
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: accentColor,
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '15px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  fontFamily: FONT,
                }}
              >
                {buttonText}
              </button>
            </form>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '12px' }}>
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </section>
      ),
    },

    // =======================================================================
    // LEGACY COMPONENTS (backwards compat with existing saved Puck data)
    // =======================================================================

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
            fontFamily: FONT,
          }}
        >
          <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '16px', lineHeight: 1.2 }}>
            {heading}
          </h1>
          <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '32px', lineHeight: 1.6 }}>
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
            }}
          >
            {ctaText}
          </button>
        </section>
      ),
    },

    TextBlock: {
      fields: { content: { type: 'textarea' } },
      defaultProps: { content: 'Add your text here.' },
      render: ({ content }) => (
        <div style={{ padding: '40px 48px', maxWidth: '800px', margin: '0 auto', fontFamily: FONT }}>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#374151' }}>{content}</p>
        </div>
      ),
    },

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
        <div style={{ padding: '24px 48px', textAlign: 'center', fontFamily: FONT }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} style={{ width, maxWidth: '100%', height: 'auto', borderRadius: '8px', display: 'inline-block' }} />
        </div>
      ),
    },

    TwoColumnLayout: {
      fields: {
        leftContent: { type: 'textarea' },
        rightContent: { type: 'textarea' },
      },
      defaultProps: {
        leftContent: 'Left column content.',
        rightContent: 'Right column content.',
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
            fontFamily: FONT,
          }}
        >
          <div style={{ padding: '24px', backgroundColor: '#f8fafc', borderRadius: '8px', fontSize: '16px', lineHeight: 1.7, color: '#374151' }}>
            {leftContent}
          </div>
          <div style={{ padding: '24px', backgroundColor: '#f8fafc', borderRadius: '8px', fontSize: '16px', lineHeight: 1.7, color: '#374151' }}>
            {rightContent}
          </div>
        </div>
      ),
    },

    CardGrid: {
      fields: {
        cards: {
          type: 'array',
          arrayFields: {
            title: { type: 'text' },
            description: { type: 'textarea' },
          },
          defaultItemProps: { title: 'Card Title', description: 'Card description.' },
        },
      },
      defaultProps: {
        cards: [
          { title: 'Feature One', description: 'Describe your first key feature.' },
          { title: 'Feature Two', description: 'Describe your second key feature.' },
          { title: 'Feature Three', description: 'Describe your third key feature.' },
        ],
      },
      render: ({ cards }) => (
        <div style={{ padding: '40px 48px', fontFamily: FONT }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', maxWidth: '1200px', margin: '0 auto' }}>
            {cards.map((card, i) => (
              <div key={i} style={{ padding: '24px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: '#1e293b' }}>{card.title}</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#64748b', margin: 0 }}>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },

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
        <section style={{ backgroundColor: '#f1f5f9', padding: '64px 48px', textAlign: 'center', fontFamily: FONT }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '32px', color: '#1e293b' }}>{heading}</h2>
          <a href={buttonUrl} style={{ display: 'inline-block', backgroundColor: '#2563eb', color: '#ffffff', padding: '14px 36px', borderRadius: '8px', fontSize: '16px', fontWeight: 600, textDecoration: 'none' }}>
            {buttonText}
          </a>
        </section>
      ),
    },
  },
}
