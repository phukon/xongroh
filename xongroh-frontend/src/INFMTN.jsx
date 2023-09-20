import React, { useEffect } from 'react'

const INFMTN = () => {
  useEffect(() => {
    const taglineOptions = ['Hi, this is Riki. https://github.com/phukon']
    const tagline =
      taglineOptions[Math.floor(Math.random() * taglineOptions.length)]

    let lineHeight = 32
    if (navigator.userAgent.includes('Firefox')) {
      lineHeight = 14
    }

    const message = {
      text: `%c${tagline}`,
      styles: [
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
        text: `%c\nThoroughly reading the documentation📜 and adhering to industry best practices is recommended. I built this project in a rush, juggling life's mundane affairs, as no developers were there to assist. Therefore, the presence of bugs is expected. ⚠Lots of optimization needed. \n %c`,
        styles: [`color: inherit; font-size: 14px;`, ''],
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

export default INFMTN
