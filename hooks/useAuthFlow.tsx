import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useRouter } from "next/router"
import userRegister from "@/lib/firebase/userRegister"
import userLogin from "@/lib/firebase/userLogin"
import sendResetPassLink from "@/lib/firebase/sendResetPassLink"
import { auth } from "@/lib/firebase/db"
import handleTxError from "@/lib/handleTxError"
import { STATUS } from "@/lib/consts/authStatus"
import { STEPS } from "@/lib/consts/authStep"
import getUserDataByEmail from "@/lib/firebase/getUserDataByEmail"
import createUserFromCredential from "@/lib/createUserFromCredential"
import useSocialLogin from "./useSocialLogin"
import useIsMobile from "./useIsMobile"

const useAuthFlow = () => {
  const isMobile = useIsMobile()
  const { push, pathname } = useRouter()
  const [loading, setLoading] = useState(false)
  const [authStatus, setAuthStatus] = useState(STATUS.LOADING)
  const socialLogins = useSocialLogin()

  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [isPolicyApproved, setIsPolicyApproved] = useState(false)
  const [curStep, setCurStep] = useState(null)
  const [userData, setUserData] = useState(null)

  const isSignUpPage = pathname.includes("/signup") || pathname === "/"
  const isSignInPage = pathname.includes("/signin")
  const isResetPage = pathname.includes("/forgotpass")

  const isAuthenticated = userData

  const initStep = () => {
    if (isResetPage) {
      setCurStep(STEPS.INPUT_EMAIL)
      return
    }
    if (isMobile) {
      setCurStep(STEPS.LANDING)
    } else {
      if (isSignInPage) setCurStep(STEPS.INPUT_EMAIL_PASSWORD)
      if (isSignUpPage) setCurStep(STEPS.INPUT_EMAIL)
    }
  }

  const updatePassword = async () => {
    const response: any = await sendResetPassLink(userEmail)
    if (response?.error) initStep()
    else setCurStep(STEPS.SENT_REST_EMAIL)
  }

  const register = async () => {
    setLoading(true)
    const response = await userRegister(userEmail, userPassword)
    if (response?.error) {
      initStep()
    } else {
      toast.success("Please, check your email box to verify your email!")
      push("/signin")
    }
    setLoading(false)
  }

  const checkEmail = async () => {
    const response: any = await getUserDataByEmail(userEmail)

    if (response) {
      toast.error("Already registered!")
      push("/signin")
      return
    }

    setCurStep(STEPS.CREATE_PASSWORD)
  }

  const login = async () => {
    setLoading(true)
    const response: any = await userLogin(userEmail, userPassword)
    if (!response?.error) {
      toast.success("Sign in successful")
      push("/mkDfxshbbVnhsHU4CVag/booktype")
    }
    setLoading(false)
  }

  const logout = () => {
    try {
      auth.signOut()
    } catch (err) {
      handleTxError(err)
    }
  }

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const data = await createUserFromCredential(user)
        setUserData(data)
        setAuthStatus(STATUS.AUTHORIZED)
        return
      }

      setUserData(null)
      setAuthStatus(STATUS.UNAUTHORIZED)
    })
  }, [])

  useEffect(() => {
    initStep()
  }, [pathname, isMobile])

  return {
    userEmail,
    setUserEmail,
    curStep,
    setCurStep,
    STEPS,
    userPassword,
    setUserPassword,
    userName,
    setUserName,
    isPolicyApproved,
    setIsPolicyApproved,
    register,
    login,
    loading,
    updatePassword,
    isAuthenticated,
    userData,
    authStatus,
    logout,
    ...socialLogins,
    checkEmail,
  }
}

export default useAuthFlow
