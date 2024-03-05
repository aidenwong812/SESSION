const getPeriodTime = (startDateTime, endDateTime) =>
  endDateTime.getTime() - startDateTime.getTime()

export default getPeriodTime
