import { useState } from 'react';
import { Palette, Type, Layout, Code, Check, X, ChevronDown, Search, Bell, User } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h5 className="font-bold">Modern Minimal</h5>
              <div className="flex gap-6">
                <button className="text-sm hover:text-primary transition-colors">Components</button>
                <button className="text-sm hover:text-primary transition-colors">Primitives</button>
                <button className="text-sm hover:text-primary transition-colors">Documentation</button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <Search className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <Bell className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <User className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-secondary text-foreground text-xs font-medium rounded-full mb-6">
              Design System v2.0
            </div>
            <h1 className="mb-6">Modern Minimal UI Kit</h1>
            <p className="text-lg text-muted-foreground mb-8">
              A clean, professional design system built with Lato, Libre Baskerville, and Fira Code.
              Featuring OKLCH color space, precise spacing (0.21rem base unit), refined typography with
              -0.025em letter spacing, and a vibrant purple primary accent.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Get Started
              </button>
              <button className="border border-border px-6 py-3 rounded-lg hover:bg-secondary transition-colors">
                View on GitHub
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="border-b border-border sticky top-0 bg-background z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-6">
            {['overview', 'typography', 'colors', 'components', 'primitives'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 border-b-2 transition-colors capitalize ${
                  activeTab === tab
                    ? 'border-primary text-foreground'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {activeTab === 'overview' && (
          <div className="space-y-16">
            <section>
              <h2 className="mb-8">Design Principles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-border rounded-lg p-8">
                  <h4 className="mb-3">Minimal & Clean</h4>
                  <p className="text-muted-foreground">
                    Every element serves a purpose. No decoration without function.
                    Clean lines and purposeful whitespace guide the eye.
                  </p>
                </div>
                <div className="border border-border rounded-lg p-8">
                  <h4 className="mb-3">Precise Spacing</h4>
                  <p className="text-muted-foreground">
                    Custom spacing unit (0.21rem) and radius (0.475rem) create
                    mathematical harmony across all components.
                  </p>
                </div>
                <div className="border border-border rounded-lg p-8">
                  <h4 className="mb-3">Typography First</h4>
                  <p className="text-muted-foreground">
                    Lato for UI, Libre Baskerville for content, Fira Code for code.
                    Letter spacing of -0.02em for optimal legibility.
                  </p>
                </div>
                <div className="border border-border rounded-lg p-8">
                  <h4 className="mb-3">Refined Color</h4>
                  <p className="text-muted-foreground">
                    Neutral grays provide the foundation with a vibrant purple primary
                    for interactive elements. Color used purposefully, not decoratively.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-8">OKLCH Color Space</h2>
              <div className="border border-border rounded-lg p-8">
                <div className="max-w-3xl">
                  <p className="text-muted-foreground mb-4">
                    This design system uses OKLCH (Oklab Lightness Chroma Hue), a perceptually uniform color
                    space that ensures consistent lightness across all hues. Unlike HSL or RGB, OKLCH produces
                    colors that feel equally bright to the human eye, making it ideal for accessible design systems.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-secondary rounded-lg p-4">
                      <h5 className="text-sm mb-2">Perceptual Uniformity</h5>
                      <p className="text-xs text-muted-foreground">
                        Colors with the same L value appear equally light
                      </p>
                    </div>
                    <div className="bg-secondary rounded-lg p-4">
                      <h5 className="text-sm mb-2">Wider Gamut</h5>
                      <p className="text-xs text-muted-foreground">
                        Access to more vibrant colors than sRGB
                      </p>
                    </div>
                    <div className="bg-secondary rounded-lg p-4">
                      <h5 className="text-sm mb-2">Better Gradients</h5>
                      <p className="text-xs text-muted-foreground">
                        Smooth transitions without muddy middle tones
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-8">Quick Specs</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-secondary rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Type className="w-5 h-5" />
                    <h5>Typography</h5>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sans-serif:</span>
                      <span>Lato</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Serif:</span>
                      <span>Libre Baskerville</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monospace:</span>
                      <span>Fira Code</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Letter Spacing:</span>
                      <span>-0.02em</span>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Layout className="w-5 h-5" />
                    <h5>Layout</h5>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Base Radius:</span>
                      <span>0.475rem</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Spacing Unit:</span>
                      <span>0.21rem</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Max Width:</span>
                      <span>1280px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Grid Columns:</span>
                      <span>12</span>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Palette className="w-5 h-5" />
                    <h5>Colors</h5>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Primary:</span>
                      <span className="text-xs">oklch(0.62 0.19 259)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Background:</span>
                      <span className="text-xs">oklch(1.00 0 0)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Border:</span>
                      <span className="text-xs">oklch(0.93 0.01 261)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Muted:</span>
                      <span className="text-xs">oklch(0.98 0 0)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'typography' && (
          <div className="space-y-16">
            <section>
              <h2 className="mb-8">Type Scale</h2>
              <div className="space-y-8 border border-border rounded-lg p-8">
                <div className="border-b border-border pb-6">
                  <h1>Heading 1 - Lato Bold 700</h1>
                  <p className="text-sm text-muted-foreground mt-2">36px / 2.25rem / Line height 1.1</p>
                </div>
                <div className="border-b border-border pb-6">
                  <h2>Heading 2 - Lato Semibold 600</h2>
                  <p className="text-sm text-muted-foreground mt-2">30px / 1.875rem / Line height 1.2</p>
                </div>
                <div className="border-b border-border pb-6">
                  <h3>Heading 3 - Lato Semibold 600</h3>
                  <p className="text-sm text-muted-foreground mt-2">24px / 1.5rem / Line height 1.3</p>
                </div>
                <div className="border-b border-border pb-6">
                  <h4>Heading 4 - Lato Medium 500</h4>
                  <p className="text-sm text-muted-foreground mt-2">20px / 1.25rem / Line height 1.4</p>
                </div>
                <div className="border-b border-border pb-6">
                  <h5>Heading 5 - Lato Medium 500</h5>
                  <p className="text-sm text-muted-foreground mt-2">18px / 1.125rem / Line height 1.5</p>
                </div>
                <div className="border-b border-border pb-6">
                  <p className="text-base">Body text - Libre Baskerville Regular 400</p>
                  <p className="text-sm text-muted-foreground mt-2">16px / 1rem / Line height 1.7</p>
                </div>
                <div>
                  <code className="text-base">Code text - Fira Code Regular 400</code>
                  <p className="text-sm text-muted-foreground mt-2">16px / 1rem / Monospace</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-8">Font Families</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-border rounded-lg p-8">
                  <p style={{ fontFamily: 'Lato' }} className="text-4xl mb-4">Aa</p>
                  <h5>Lato</h5>
                  <p className="text-sm text-muted-foreground mt-2">
                    Primary sans-serif for headings, UI elements, buttons, and labels.
                  </p>
                  <div className="mt-4 space-y-1 text-sm" style={{ fontFamily: 'Lato' }}>
                    <div>Light 300</div>
                    <div className="font-normal">Regular 400</div>
                    <div className="font-medium">Medium 500</div>
                    <div className="font-semibold">Semibold 600</div>
                    <div className="font-bold">Bold 700</div>
                    <div className="font-black">Black 900</div>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-8">
                  <p style={{ fontFamily: 'Libre Baskerville' }} className="text-4xl mb-4">Aa</p>
                  <h5>Libre Baskerville</h5>
                  <p className="text-sm text-muted-foreground mt-2">
                    Serif typeface for body text, long-form content, and quotations.
                  </p>
                  <div className="mt-4 space-y-1 text-sm" style={{ fontFamily: 'Libre Baskerville' }}>
                    <div>Regular 400</div>
                    <div className="italic">Italic 400</div>
                    <div className="font-bold">Bold 700</div>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-8">
                  <p style={{ fontFamily: 'Fira Code' }} className="text-4xl mb-4">Aa</p>
                  <h5>Fira Code</h5>
                  <p className="text-sm text-muted-foreground mt-2">
                    Monospace font for code blocks, technical documentation, and data display.
                  </p>
                  <div className="mt-4 space-y-1 text-sm" style={{ fontFamily: 'Fira Code' }}>
                    <div className="font-light">Light 300</div>
                    <div>Regular 400</div>
                    <div className="font-medium">Medium 500</div>
                    <div className="font-semibold">Semibold 600</div>
                    <div className="font-bold">Bold 700</div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-8">Content Example</h2>
              <div className="border border-border rounded-lg p-12 max-w-3xl">
                <h3 className="mb-6">The Principles of Modern Design</h3>
                <p className="mb-4">
                  In the realm of contemporary digital design, minimalism has emerged as more than a mere aesthetic
                  choice—it represents a fundamental philosophy of purposeful simplicity. Each element must earn its
                  place through function, not decoration.
                </p>
                <p className="mb-4">
                  The careful selection of typography plays a crucial role in this approach. By pairing geometric
                  sans-serif headlines with traditional serif body text, we create a visual hierarchy that guides
                  the reader through complex information with ease and elegance.
                </p>
                <blockquote className="border-l-2 border-border pl-6 my-6 italic text-muted-foreground">
                  "Design is not just what it looks like and feels like. Design is how it works."
                  <span className="block mt-2 not-italic text-sm">— Steve Jobs</span>
                </blockquote>
                <p>
                  The mathematics of spacing—our custom 0.21rem unit and 0.475rem radius—create subtle rhythms
                  that the eye perceives as harmony. These precise measurements aren't arbitrary; they're calculated
                  to work together across all screen sizes and contexts.
                </p>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'colors' && (
          <div className="space-y-16">
            <section>
              <h2 className="mb-8">Color Palette</h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="border border-border rounded-lg p-8">
                  <h4 className="mb-6">Foundation Colors</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="w-full h-24 bg-primary rounded-lg border border-border mb-3"></div>
                      <p className="text-sm font-medium">Primary</p>
                      <code className="text-xs text-muted-foreground">oklch(0.62 0.19 259.76)</code>
                    </div>
                    <div>
                      <div className="w-full h-24 bg-background rounded-lg border border-border mb-3"></div>
                      <p className="text-sm font-medium">Background</p>
                      <code className="text-xs text-muted-foreground">oklch(1.00 0 0)</code>
                    </div>
                    <div>
                      <div className="w-full h-24 bg-foreground rounded-lg border border-border mb-3"></div>
                      <p className="text-sm font-medium">Foreground</p>
                      <code className="text-xs text-muted-foreground">oklch(0.32 0 0)</code>
                    </div>
                    <div>
                      <div className="w-full h-24 bg-secondary rounded-lg border border-border mb-3"></div>
                      <p className="text-sm font-medium">Secondary</p>
                      <code className="text-xs text-muted-foreground">oklch(0.97 0 0)</code>
                    </div>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-8">
                  <h4 className="mb-6">Chart Colors</h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div>
                      <div className="w-full h-24 rounded-lg border border-border mb-3" style={{ backgroundColor: 'var(--chart-1)' }}></div>
                      <p className="text-sm font-medium">Chart 1</p>
                      <code className="text-xs text-muted-foreground">oklch(0.62 0.19 259)</code>
                    </div>
                    <div>
                      <div className="w-full h-24 rounded-lg border border-border mb-3" style={{ backgroundColor: 'var(--chart-2)' }}></div>
                      <p className="text-sm font-medium">Chart 2</p>
                      <code className="text-xs text-muted-foreground">oklch(0.55 0.22 262)</code>
                    </div>
                    <div>
                      <div className="w-full h-24 rounded-lg border border-border mb-3" style={{ backgroundColor: 'var(--chart-3)' }}></div>
                      <p className="text-sm font-medium">Chart 3</p>
                      <code className="text-xs text-muted-foreground">oklch(0.49 0.22 264)</code>
                    </div>
                    <div>
                      <div className="w-full h-24 rounded-lg border border-border mb-3" style={{ backgroundColor: 'var(--chart-4)' }}></div>
                      <p className="text-sm font-medium">Chart 4</p>
                      <code className="text-xs text-muted-foreground">oklch(0.42 0.18 265)</code>
                    </div>
                    <div>
                      <div className="w-full h-24 rounded-lg border border-border mb-3" style={{ backgroundColor: 'var(--chart-5)' }}></div>
                      <p className="text-sm font-medium">Chart 5</p>
                      <code className="text-xs text-muted-foreground">oklch(0.38 0.14 265)</code>
                    </div>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-8">
                  <h4 className="mb-6">Semantic Colors</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="w-full h-24 bg-destructive rounded-lg border border-border mb-3"></div>
                      <p className="text-sm font-medium">Destructive</p>
                      <code className="text-xs text-muted-foreground">oklch(0.64 0.21 25.39)</code>
                    </div>
                    <div>
                      <div className="w-full h-24 bg-border rounded-lg border border-border mb-3"></div>
                      <p className="text-sm font-medium">Border</p>
                      <code className="text-xs text-muted-foreground">oklch(0.93 0.01 261)</code>
                    </div>
                    <div>
                      <div className="w-full h-24 bg-muted rounded-lg border border-border mb-3"></div>
                      <p className="text-sm font-medium">Muted</p>
                      <code className="text-xs text-muted-foreground">oklch(0.98 0 0)</code>
                    </div>
                    <div>
                      <div className="w-full h-24 bg-accent rounded-lg border border-border mb-3"></div>
                      <p className="text-sm font-medium">Accent</p>
                      <code className="text-xs text-muted-foreground">oklch(0.95 0.03 233)</code>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-8">Usage Guidelines</h2>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-1"></div>
                    <div>
                      <p className="font-medium mb-1">Primary oklch(0.62 0.19 259.76)</p>
                      <p className="text-sm text-muted-foreground">
                        A vibrant purple/indigo for primary CTAs, interactive elements, and focus states.
                        Creates visual interest while maintaining professional aesthetics.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-1"></div>
                    <div>
                      <p className="font-medium mb-1">Secondary oklch(0.97 0 0)</p>
                      <p className="text-sm text-muted-foreground">
                        Subtle background for cards, alternate sections, and UI chrome.
                        Creates depth without adding visual weight.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-1"></div>
                    <div>
                      <p className="font-medium mb-1">Accent oklch(0.95 0.03 233.56)</p>
                      <p className="text-sm text-muted-foreground">
                        Light accent color for highlights and subtle emphasis.
                        Pairs with accent-foreground for accessible contrast.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-muted-foreground rounded-full mt-1"></div>
                    <div>
                      <p className="font-medium mb-1">Muted Foreground oklch(0.55 0.02 264.41)</p>
                      <p className="text-sm text-muted-foreground">
                        Secondary text, captions, and metadata. Maintains readability while
                        establishing clear information hierarchy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'components' && (
          <div className="space-y-16">
            <section>
              <h2 className="mb-8">Buttons</h2>
              <div className="border border-border rounded-lg p-8 space-y-8">
                <div>
                  <h5 className="mb-4">Primary Buttons</h5>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                      Primary Button
                    </button>
                    <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity opacity-50">
                      Disabled
                    </button>
                    <button className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">
                      Small
                    </button>
                    <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity">
                      Large
                    </button>
                  </div>
                </div>

                <div>
                  <h5 className="mb-4">Secondary Buttons</h5>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-muted transition-colors">
                      Secondary Button
                    </button>
                    <button className="border border-border px-6 py-3 rounded-lg hover:bg-secondary transition-colors">
                      Outline Button
                    </button>
                    <button className="text-foreground px-6 py-3 rounded-lg hover:bg-secondary transition-colors">
                      Ghost Button
                    </button>
                  </div>
                </div>

                <div>
                  <h5 className="mb-4">Destructive</h5>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-destructive text-destructive-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                      Delete
                    </button>
                    <button className="border border-destructive text-destructive px-6 py-3 rounded-lg hover:bg-destructive hover:text-destructive-foreground transition-colors">
                      Remove
                    </button>
                  </div>
                </div>

                <div>
                  <h5 className="mb-4">Icon Buttons</h5>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-primary text-primary-foreground p-3 rounded-lg hover:opacity-90 transition-opacity">
                      <Search className="w-5 h-5" />
                    </button>
                    <button className="border border-border p-3 rounded-lg hover:bg-secondary transition-colors">
                      <Bell className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-lg hover:bg-secondary transition-colors">
                      <User className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-8">Form Controls</h2>
              <div className="border border-border rounded-lg p-8 space-y-8">
                <div className="max-w-md">
                  <label className="block mb-2">Text Input</label>
                  <input
                    type="text"
                    placeholder="Enter your text..."
                    className="w-full px-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="max-w-md">
                  <label className="block mb-2">Textarea</label>
                  <textarea
                    placeholder="Enter your message..."
                    rows={4}
                    className="w-full px-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>

                <div className="max-w-md">
                  <label className="block mb-2">Select</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring appearance-none">
                      <option>Select an option...</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 rounded border-input" />
                    <span>Checkbox option</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 rounded border-input" />
                    <span>Another checkbox option</span>
                  </label>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="radio" className="w-5 h-5" />
                    <span>Radio option 1</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="radio" className="w-5 h-5" />
                    <span>Radio option 2</span>
                  </label>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-8">Cards</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-border rounded-lg p-6">
                  <h4 className="mb-3">Simple Card</h4>
                  <p className="text-muted-foreground">
                    A basic card with border, padding, and rounded corners. Perfect for content grouping.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="mb-3">Hover Card</h4>
                  <p className="text-muted-foreground">
                    Interactive card with shadow on hover. Great for clickable content.
                  </p>
                </div>

                <div className="bg-secondary rounded-lg p-6">
                  <h4 className="mb-3">Secondary Card</h4>
                  <p className="text-muted-foreground">
                    Card with secondary background. Useful for highlighting sections.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-8">Alerts & Notifications</h2>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-6 flex items-start gap-4">
                  <div className="w-5 h-5 border-2 border-primary rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Information</p>
                    <p className="text-sm text-muted-foreground">
                      This is an informational message to keep you updated.
                    </p>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-6 flex items-start gap-4 bg-secondary">
                  <Check className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Success</p>
                    <p className="text-sm text-muted-foreground">
                      Your action was completed successfully.
                    </p>
                  </div>
                </div>

                <div className="border border-destructive rounded-lg p-6 flex items-start gap-4 bg-destructive/5">
                  <X className="w-5 h-5 text-destructive mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Error</p>
                    <p className="text-sm text-muted-foreground">
                      Something went wrong. Please try again.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-8">Badges</h2>
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                  Primary
                </span>
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                  Secondary
                </span>
                <span className="border border-border px-3 py-1 rounded-full text-sm">
                  Outline
                </span>
                <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm">
                  Destructive
                </span>
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-lg text-sm">
                  Square
                </span>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'primitives' && (
          <div className="space-y-16">
            <section>
              <h2 className="mb-8">Layout Primitives</h2>
              <div className="space-y-8">
                <div className="border border-border rounded-lg p-8">
                  <h4 className="mb-4">Container</h4>
                  <div className="border-2 border-dashed border-border rounded-lg p-6">
                    <p className="text-sm text-muted-foreground text-center">
                      Max-width container (1280px) with responsive padding
                    </p>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-8">
                  <h4 className="mb-4">Grid System</h4>
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 bg-secondary rounded-lg p-4 text-center text-sm">12 columns</div>
                    <div className="col-span-6 bg-secondary rounded-lg p-4 text-center text-sm">6 columns</div>
                    <div className="col-span-6 bg-secondary rounded-lg p-4 text-center text-sm">6 columns</div>
                    <div className="col-span-4 bg-secondary rounded-lg p-4 text-center text-sm">4 columns</div>
                    <div className="col-span-4 bg-secondary rounded-lg p-4 text-center text-sm">4 columns</div>
                    <div className="col-span-4 bg-secondary rounded-lg p-4 text-center text-sm">4 columns</div>
                    <div className="col-span-3 bg-secondary rounded-lg p-4 text-center text-sm">3</div>
                    <div className="col-span-3 bg-secondary rounded-lg p-4 text-center text-sm">3</div>
                    <div className="col-span-3 bg-secondary rounded-lg p-4 text-center text-sm">3</div>
                    <div className="col-span-3 bg-secondary rounded-lg p-4 text-center text-sm">3</div>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-8">
                  <h4 className="mb-4">Flex Layouts</h4>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-1 bg-secondary rounded-lg p-4 text-center text-sm">Flex 1</div>
                      <div className="flex-1 bg-secondary rounded-lg p-4 text-center text-sm">Flex 1</div>
                      <div className="flex-1 bg-secondary rounded-lg p-4 text-center text-sm">Flex 1</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1 bg-secondary rounded-lg p-4 text-center text-sm">Flex 1</div>
                      <div className="flex-2 bg-secondary rounded-lg p-4 text-center text-sm">Flex 2</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-8">Spacing Scale</h2>
              <div className="border border-border rounded-lg p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <code className="w-20 text-sm">0.21rem</code>
                    <div className="bg-primary" style={{ width: '0.21rem', height: '1rem' }}></div>
                    <span className="text-sm text-muted-foreground">Base unit</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <code className="w-20 text-sm">0.42rem</code>
                    <div className="bg-primary" style={{ width: '0.42rem', height: '1rem' }}></div>
                    <span className="text-sm text-muted-foreground">2x base unit</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <code className="w-20 text-sm">0.63rem</code>
                    <div className="bg-primary" style={{ width: '0.63rem', height: '1rem' }}></div>
                    <span className="text-sm text-muted-foreground">3x base unit</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <code className="w-20 text-sm">0.84rem</code>
                    <div className="bg-primary" style={{ width: '0.84rem', height: '1rem' }}></div>
                    <span className="text-sm text-muted-foreground">4x base unit</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <code className="w-20 text-sm">1.05rem</code>
                    <div className="bg-primary" style={{ width: '1.05rem', height: '1rem' }}></div>
                    <span className="text-sm text-muted-foreground">5x base unit</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-8">Border Radius</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-secondary border border-border mx-auto mb-3" style={{ borderRadius: 'calc(0.475rem - 4px)' }}></div>
                  <p className="text-sm font-medium">Small</p>
                  <code className="text-xs text-muted-foreground">0.475rem - 4px</code>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-secondary border border-border mx-auto mb-3" style={{ borderRadius: 'calc(0.475rem - 2px)' }}></div>
                  <p className="text-sm font-medium">Medium</p>
                  <code className="text-xs text-muted-foreground">0.475rem - 2px</code>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-secondary border border-border mx-auto mb-3" style={{ borderRadius: '0.475rem' }}></div>
                  <p className="text-sm font-medium">Base</p>
                  <code className="text-xs text-muted-foreground">0.475rem</code>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-secondary border border-border mx-auto mb-3" style={{ borderRadius: 'calc(0.475rem + 4px)' }}></div>
                  <p className="text-sm font-medium">Large</p>
                  <code className="text-xs text-muted-foreground">0.475rem + 4px</code>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-8">Shadows & Elevation</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-card border border-border rounded-lg p-6 text-center" style={{ boxShadow: 'var(--shadow-xs)' }}>
                  <p className="text-sm font-medium">XS</p>
                  <p className="text-xs text-muted-foreground mt-1">Subtle lift</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 text-center" style={{ boxShadow: 'var(--shadow-sm)' }}>
                  <p className="text-sm font-medium">Small</p>
                  <p className="text-xs text-muted-foreground mt-1">Card depth</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 text-center" style={{ boxShadow: 'var(--shadow-md)' }}>
                  <p className="text-sm font-medium">Medium</p>
                  <p className="text-xs text-muted-foreground mt-1">Elevated cards</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 text-center" style={{ boxShadow: 'var(--shadow-lg)' }}>
                  <p className="text-sm font-medium">Large</p>
                  <p className="text-xs text-muted-foreground mt-1">Modal overlay</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="bg-card border border-border rounded-lg p-6 text-center" style={{ boxShadow: 'var(--shadow-xl)' }}>
                  <p className="text-sm font-medium">XL</p>
                  <p className="text-xs text-muted-foreground mt-1">Popovers</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 text-center" style={{ boxShadow: 'var(--shadow-2xl)' }}>
                  <p className="text-sm font-medium">2XL</p>
                  <p className="text-xs text-muted-foreground mt-1">Dropdown menus</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-8">Letter Spacing (Tracking)</h2>
              <div className="border border-border rounded-lg p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-6">
                    <code className="w-32 text-sm">tighter</code>
                    <p style={{ letterSpacing: 'var(--tracking-tighter)' }}>
                      The quick brown fox jumps over the lazy dog
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <code className="w-32 text-sm">tight</code>
                    <p style={{ letterSpacing: 'var(--tracking-tight)' }}>
                      The quick brown fox jumps over the lazy dog
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <code className="w-32 text-sm">normal</code>
                    <p style={{ letterSpacing: 'var(--tracking-normal)' }}>
                      The quick brown fox jumps over the lazy dog
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <code className="w-32 text-sm">wide</code>
                    <p style={{ letterSpacing: 'var(--tracking-wide)' }}>
                      The quick brown fox jumps over the lazy dog
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <code className="w-32 text-sm">wider</code>
                    <p style={{ letterSpacing: 'var(--tracking-wider)' }}>
                      The quick brown fox jumps over the lazy dog
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <code className="w-32 text-sm">widest</code>
                    <p style={{ letterSpacing: 'var(--tracking-widest)' }}>
                      The quick brown fox jumps over the lazy dog
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-8">Code Blocks</h2>
              <div className="border border-border rounded-lg p-8">
                <div className="bg-foreground text-background rounded-lg p-6 overflow-x-auto">
                  <pre className="text-sm" style={{ fontFamily: 'Fira Code' }}>
                    <code>{`import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6">
      <h1>Modern Minimal</h1>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-8">Dividers</h2>
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-muted-foreground mb-4">Horizontal Divider</p>
                  <div className="border-t border-border"></div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-4">With Text</p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 border-t border-border"></div>
                    <span className="text-sm text-muted-foreground">OR</span>
                    <div className="flex-1 border-t border-border"></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-4">Vertical Divider</p>
                  <div className="flex items-center gap-4 h-12">
                    <span>Left</span>
                    <div className="border-l border-border h-full"></div>
                    <span>Right</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="mb-4">Modern Minimal</h5>
              <p className="text-sm text-muted-foreground">
                A comprehensive design system for modern web applications.
              </p>
            </div>
            <div>
              <p className="font-medium mb-3">Resources</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Components</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Templates</a></li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-3">Community</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-3">Legal</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">License</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2026 Modern Minimal UI Kit. Built with precision.
          </div>
        </div>
      </footer>
    </div>
  );
}
