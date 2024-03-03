const getTokenIdsFromEvents = (events, address) => {
  const ownedTokenIds = []
  events.forEach((call) => {
    if (call.success && call.returnValues[0] === address) {
      ownedTokenIds.push(call.methodParameters[0])
    }
  })
  return ownedTokenIds
}
export default getTokenIdsFromEvents
