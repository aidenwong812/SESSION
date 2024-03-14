import { createContext, useContext, useState, useMemo, useCallback, useEffect } from "react"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import { PAYMENTS } from "@/lib/consts/global"
import { STEPS } from "@/lib/consts/checkout"
import getProjectByRequestId from "@/lib/firebase/getProjectByRequestId"

const CheckOutProjectContext = createContext(null)

const CheckOutProjectProvider = ({ children }) => {
  const [curStep, setCurStep] = useState(STEPS.PAYMENT_CHECKOUT)
  const [selectedPayment, setSelectedPayment] = useState(PAYMENTS.STRIPE)
  const [projectData, setProjectData] = useState(null)
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const projectId = router.query.id

  const startProject = async () => {
    setCurStep(STEPS.BOOKED_SUCCESS)
  }

  const getProjectData = useCallback(async () => {
    if (!projectId) return
    const response: any = await getProjectByRequestId(projectId)
    if (response.error) {
      toast.error("project data is not existed!")
      router.push("/booktype")
      return
    }

    setProjectData(response)
  }, [projectId])

  useEffect(() => {
    getProjectData()
  }, [getProjectData])

  const value = useMemo(
    () => ({
      curStep,
      setCurStep,
      setSelectedPayment,
      selectedPayment,
      projectData,
      loading,
      setLoading,
      startProject,
    }),
    [curStep, setCurStep, setSelectedPayment, selectedPayment, projectData, loading, startProject],
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
