const getDateTimeString = (liveTime) =>
  `${new Date(liveTime).toLocaleDateString()} ${new Date(liveTime).toLocaleTimeString()}`

export default getDateTimeString
