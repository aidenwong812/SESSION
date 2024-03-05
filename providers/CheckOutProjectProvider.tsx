import { createContext, useContext, useState, useMemo, useCallback, useEffect } from "react"
import { PAYMENTS } from "@/lib/consts/global"
import { STEPS } from "@/lib/consts/checkout"

const CheckOutProjectContext = createContext(null)

const CheckOutProjectProvider = ({ children }) => {
  const [curStep, setCurStep] = useState(STEPS.PAYMENT_CHECKOUT)
  const [selectedPayment, setSelectedPayment] = useState(PAYMENTS.STRIPE)
  const [studioData, setStudioData] = useState(null)

  const getStudioData = useCallback(() => {}, [])

  useEffect(() => {
    getStudioData()
  }, [getStudioData])

  const value = useMemo(
    () => ({
      curStep,
      setCurStep,
      setSelectedPayment,
      selectedPayment,
      studioData,
    }),
    [curStep, setCurStep, setSelectedPayment, selectedPayment, studioData],
  )

  return <CheckOutProjectContext.Provider value={value}>{children}</CheckOutProjectContext.Provider>
}

export const useCheckOutProject = () => {
  const context = useContext(CheckOutProjectContext)
  if (!context) {
    throw new Error("useCheckOutProject must be used within a CheckOutProjectProvider")
  }
  return context
}

export default CheckOutProjectProvider
