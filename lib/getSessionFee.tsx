const getSessionFee = (sessionPrice: number, engineerPrice: number) =>
  parseFloat(((sessionPrice + engineerPrice) * 0.05).toFixed(2))

export default getSessionFee
