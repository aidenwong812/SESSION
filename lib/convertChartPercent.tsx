const convertChartPercent = (revenue) => {
  const total = revenue.reduce((a, b) => a + b.amount, 0)
  return revenue.reduce((acc, curr, index) => {
    if (index === 0) {
      return [(curr.amount / total) * 100]
    }
    return [...acc, (curr.amount / total) * 100 + acc[index - 1]]
  }, [])
}

export default convertChartPercent
