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
              Bio
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Jiao Zhao is a recent MIT Master of City Planning graduate who focuses on grid
              policy, infrastructure siting, and local energy and climate planning. Drawing on
              data analytics, community engagement, and design thinking, she is passionate
              about advancing an equitable energy transition.
            </p>
          </div>
        )}

        {active === 'thesis' && (
          <div className="animate-in fade-in duration-300">
            <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-8 text-balance">
              Rationing the Interconnection Queue: Governing Uncertainty under Reliability Urgency
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-10">
              Queue-rationing policies such as PJM&apos;s RRI and MISO&apos;s ERAS prioritize
              certain resources and customers rather than improving interconnection for all
              market participants. Based on dockets, queue data, and interviews with clean
              energy experts, Jiao Zhao&apos;s MIT thesis finds that uncertainties surrounding
              these policies were either deferred to RTO expertise or excluded from the formal
              FERC debate. Expedited tracks resulted in project mixes different from the
              standard queue, with a concentration of gas, utility-led, and data center-driven
              projects. The takeaway is that the limited, short-term reliability used to justify
              rationing is inadequate for managing interconnection during the energy transition.
              We need broader reliability governance&mdash;one that clarifies the public-interest
              scope of reliability, embeds it alongside affordability and sustainability, and
              creates more inclusive processes beyond technocratic institutions.
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
