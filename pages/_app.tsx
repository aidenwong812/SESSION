import "../styles/globals.css"
import "react-toastify/dist/ReactToastify.css"
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css"

import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import { SessionProvider } from "next-auth/react"
import * as React from "react"
import { Analytics } from "@vercel/analytics/react"
import AuthProvider from "@/providers/AuthProvider"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <SessionProvider>
        <Component {...pageProps} />
        <ToastContainer />
        <Analytics />
      </SessionProvider>
    </AuthProvider>
  )
}
export default MyApp
