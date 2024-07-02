import {useMemo} from "react"

const useFormattedMessage = (
    message,
    hasLightBackground,
    members
) => {
    const formattedMessage = useMemo(
        () =>
            formatMessage(message, hasLightBackground, members),
        [message, hasLightBackground, members]
    )

    return formattedMessage
}

export default useFormattedMessage

function stripPunctuation(str) {
    const match = str.match(/(.*?)([.,?!]*)$/)
    return match
        ? {word: match[1], punctuation: match[2] || ''}
        : {word: str, punctuation: ''}
}

function findMatch(atTag, members, segments, i) {
    let matchString = ''
    let punctuation = ''

    members.some((member) => {
        const atTagWithoutPunctuation = stripPunctuation(atTag).word

        if (atTagWithoutPunctuation === member.name) {
            matchString = member.name
            punctuation = stripPunctuation(segments[i]).punctuation
            return true
        }

        return false
    })

    return {matchString, punctuation}
}

function formatMessage(text, hasLightBackground, members) {
    const lines = text.split('\n')

    return lines.map((line, lineIndex) => {
        if (line.trim() === '') {
            return null
        }

        const elements = []
        let nonSpecialText = ''
        let elementIndex = 0

        const flushNonSpecialText = () => {
            if (nonSpecialText) {
                elements.push(
                    <span key={`${lineIndex}-${elementIndex}`}>
            {nonSpecialText.trim()}
          </span>
                )
                nonSpecialText = ''
                elementIndex += 1
            }
        }

        const segments = line.split(/\s+/)

        for (let i = 0; i < segments.length; i += 1) {
            const segment = segments[i]

            if (segment) {
                if (segment.startsWith('@') && members) {
                    flushNonSpecialText()

                    const atTag = segment.substring(1)

                    const {matchString, punctuation} = findMatch(
                        atTag,
                        members,
                        segments,
                        i
                    )

                    if (matchString) {
                        elements.push(
                            <span
                                key={`${lineIndex}-${elementIndex}`}
                                className={`${hasLightBackground ? 'text-pink-600' : 'text-blue-500'}`}
                            >
                @{matchString}
              </span>
                        )
                        if (punctuation) {
                            elements.push(
                                <span
                                    key={`${lineIndex}-${elementIndex}-punctuation`}
                                    className="!ml-0"
                                >
                  {punctuation}
                </span>
                            )
                        }
                        elementIndex += 1
                    } else {
                        nonSpecialText += ` ${segment}`
                    }
                } else {
                    nonSpecialText += ` ${segment}`
                }
            }
        }

        flushNonSpecialText()

        return (
            <p key={lineIndex} className="space-x-1">
                {elements}
            </p>
        )
    })
}
