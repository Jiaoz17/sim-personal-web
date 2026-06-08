'use client'

import { useState } from 'react'
import { Download } from 'lucide-react'

const tabs = [
  { id: 'bio', label: 'Bio' },
  { id: 'thesis', label: 'Thesis' },
] as const

type TabId = (typeof tabs)[number]['id']

export function ProfileTabs() {
  const [active, setActive] = useState<TabId>('bio')

  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        <div className="flex items-center gap-8 border-b border-border mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative pb-4 text-sm uppercase tracking-wider transition-colors ${
                active === tab.id
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
              {active === tab.id && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-px bg-foreground" />
              )}
            </button>
          ))}
        </div>

        {active === 'bio' && (
          <div className="animate-in fade-in duration-300">
            <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-8 text-balance">
              Introduction
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              [Bio placeholder] Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent fermentum, nisi vitae aliquet tincidunt, nunc nisl ultricies nunc,
              vitae aliquet nisl nunc vitae nisl. Sed euismod, nisi vitae aliquet tincidunt,
              nunc nisl ultricies nunc, vitae aliquet nisl nunc vitae nisl. Donec sit amet
              urna eget mauris venenatis tincidunt. Curabitur in sapien vitae sem volutpat
              consequat. Replace this paragraph with your own introduction.
            </p>
          </div>
        )}

        {active === 'thesis' && (
          <div className="animate-in fade-in duration-300">
            <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-8 text-balance">
              Thesis
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-10">
              [Thesis placeholder] A short description of the thesis goes here. Summarize the
              core idea, scope, and contribution in a few sentences before inviting readers to
              download the full document.
            </p>
            <a
              href="/thesis.pdf"
              download
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 text-sm uppercase tracking-wider hover:bg-accent transition-colors"
            >
              <Download className="size-4" />
              Download PDF
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
