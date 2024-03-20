import { createContext, useContext, useState, useMemo, useCallback, useEffect } from "react"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import { DEFAULT_STUDIO_ID, PAYMENTS } from "@/lib/consts/global"
import { STEPS } from "@/lib/consts/checkout"
import getProjectByRequestId from "@/lib/firebase/getProjectByRequestId"
import deleteRequest from "@/lib/firebase/deleteRequest"

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

  const cancelProject = async () => {
    await deleteRequest(projectId)
    setCurStep(STEPS.CANCEL_REQUEST)
  }

  const getProjectData = useCallback(async () => {
    if (!projectId) return
    const response: any = await getProjectByRequestId(projectId)
    if (response.error || !response.projectName) {
      toast.error("project data does not exist.")
      router.push(`/${DEFAULT_STUDIO_ID}/booktype`)
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
      cancelProject,
    }),
    [
      curStep,
      setCurStep,
      setSelectedPayment,
      selectedPayment,
      projectData,
      loading,
      startProject,
      cancelProject,
    ],
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
