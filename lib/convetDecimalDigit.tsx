const convertDecimalDigit = (digit) => {
  const paddedDigit = String(digit).padStart(2, "0")
  return paddedDigit
}

export default convertDecimalDigit
