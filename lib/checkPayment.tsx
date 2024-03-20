const checkPayment = (request) =>
  !request.booked && (request.sessionPrice > 0 || request.engineerPrice > 0)

export default checkPayment
