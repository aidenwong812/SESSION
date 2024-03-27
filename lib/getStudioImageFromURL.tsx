const getStudioImageFromURL = (studio) =>
  studio?.photo.includes("https://")
    ? studio?.photo
    : `https://session-pied.vercel.app${studio?.photo}`

export default getStudioImageFromURL
