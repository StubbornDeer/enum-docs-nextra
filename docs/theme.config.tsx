import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const logo = (
    <div className="nx-flex nx-items-center">
        <img style={{height:'16px', width: '16px'}} src="https://www.enumhq.com/images/logo.png"/>
        <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
            enum
        </span>
    </div>
)

const config: DocsThemeConfig = {
  /*project: {
    link: 'https://enumhq.com'
  },*/
  logoLink: 'https://enumhq.com',
  //docsRepositoryBase: 'https://github.com/shuding/nextra/tree/main/docs',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Enum'
      }
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://nextra.site/og.jpeg'
        : `https://nextra.site/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        
        <meta property="og:url" content="https://www.enumhq.com/" />
        <meta property="og:type"               content="article" />
        <meta property="og:title"              content="Enum. Explore, research, and ask questions of your data from any source." />
        <meta property="og:description"        content="Explore, research, and ask questions of your data from any source - plain text, files, websites, and more." />
        <meta property="og:image"              content="https://www.enumhq.com/images/twitter-preview.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.enumhq.com/images/twitter-preview.jpg" />
        <meta name="twitter:site:domain" content="enumhq.com" />
        <meta name="twitter:url" content="https://enumhq.com" />

        <meta name="apple-mobile-web-app-title" content="Enum" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  // banner: {
  //   key: '2.0-release',
  //   text: (
  //     <a href="https://nextra.site" target="_blank" rel="noreferrer">
  //       🎉 Nextra 2.0 is released. Read more →
  //     </a>
  //   )
  // },
  /*editLink: {
    text: 'Edit this page on GitHub →'
  },*/
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            title="Enum Tech"
            href="https://enumhq.com"
          >
            <div className="nx-flex nx-items-center">
                <img style={{height:'16px', width: '16px'}} src="https://www.enumhq.com/images/logo.png"/>
                <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
                    enum
                </span>
                <span>
                    © {new Date().getFullYear()} Enum Tech.
                </span>
            </div>
          </a>
        </div>
      </div>
    )
  }
}

export default config
