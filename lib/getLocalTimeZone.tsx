const getLocalTimeZone = () => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  return userTimeZone
}
export default getLocalTimeZone
