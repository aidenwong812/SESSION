import { useRouter } from "next/router"
import signInWithGoogle from "@/lib/firebase/signInWithGoogle"
import signInWithTwitter from "@/lib/firebase/signWithTwitter"
import { DEFAULT_STUDIO_ID } from "@/lib/consts/global"

const useSocialLogin = () => {
  const router = useRouter()

  const twitterSign = async () => {
    const response: any = await signInWithTwitter()
    if (response?.error) return

    router.push(`/${DEFAULT_STUDIO_ID}/booktype`)
  }

  const googleSign = async () => {
    const response: any = await signInWithGoogle()
    if (response?.error) return

    router.push(`/${DEFAULT_STUDIO_ID}/booktype`)
  }

  return {
    twitterSign,
    googleSign,
  }
}

export default useSocialLogin
