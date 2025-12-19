export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GORETOV",
    url: "https://goretov.dev",
    logo: "https://goretov.dev/icon.svg",
    description: "IT-студия по разработке Telegram-ботов, Mini Apps и автоматизации бизнеса",
    founder: {
      "@type": "Person",
      name: "Игорь Горетов",
      url: "https://t.me/aflerlyf3",
    },
    sameAs: [
      "https://t.me/aflerlyf3",
      "https://github.com/preffco/goretov",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "igorone23@yandex.ru",
      availableLanguage: ["Russian"],
    },
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Игорь Горетов",
    url: "https://goretov.dev",
    jobTitle: "Founder & Solo Developer",
    worksFor: {
      "@type": "Organization",
      name: "GORETOV",
    },
    email: "igorone23@yandex.ru",
    sameAs: [
      "https://t.me/aflerlyf3",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GORETOV",
    url: "https://goretov.dev",
    description: "IT-студия по разработке Telegram-ботов, Mini Apps и автоматизации бизнеса",
    inLanguage: "ru-RU",
    publisher: {
      "@type": "Organization",
      name: "GORETOV",
    },
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "IT Development Services",
    provider: {
      "@type": "Organization",
      name: "GORETOV",
    },
    areaServed: {
      "@type": "Country",
      name: "Russia",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Разработка Telegram-ботов",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Разработка Mini Apps",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Автоматизация бизнеса",
          },
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}

