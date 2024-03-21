const convertLink = (link: string) => (link.startsWith("https://") ? link : `https://${link}`)

export default convertLink
