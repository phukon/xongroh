import React, { useEffect } from 'react'

const Int = () => {
  useEffect(() => {
    const taglineOptions = ['Xongroh']
    const tagline =
      taglineOptions[Math.floor(Math.random() * taglineOptions.length)]

    let lineHeight = 32
    if (navigator.userAgent.includes('Firefox')) {
      lineHeight = 14
    }

    const message = {
      text: `%c${tagline}`,
      styles: [
        // Add a background color to the styles using ANSI escape codes
        `color: inherit; font-size: 20px; font-weight: 900; margin-bottom: 12px; line-height: 24px;`,
      ],
      logo: {
        text: '%c📌 %c',
        styles: [
          `font-size: 34px; margin-right: 0px; line-height: ${lineHeight}px;`,
          '',
        ],
      },
      line: {
        text: `%c\n\u2022Adhere to industry best practices.\n  https://github.com/alan2207/bulletproof-react\n\n\u2022Excessive use of Git Merge is not recommended. Rebase the HEADs instead.\n\n\u2022Don't use experimental features and/or packages with vulnerabilities. \n  Don't use ES6 modules for Node, stick to CJS.(Stability Index: 1)\n  It once crashed the serverless function on Vercel.\n  https://nodejs.org/docs/v12.13.0/api/esm.html#esm_ecmascript_modules\n\n\u2022Read the documentation thoroughly.\n📜https://github.com/teamxongroh\n\n\n📢Riki https://github.com/phukon\n %c`,
        styles: [`color: #87CEEB; font-size: 14px;`, ''],
      },
    }

    let logoStyles
    let textStyles
    message.text = `${message.logo.text}${message.text}${message.line.text}`
    ;(logoStyles = message.styles).unshift.apply(
      logoStyles,
      message.logo.styles
    )
    ;(textStyles = message.styles).push.apply(textStyles, message.line.styles)

    console.log.apply(this, [`\n${message.text}`].concat(message.styles))
  }, [])

  return null // This component doesn't render anything in the DOM
}

export default Int
