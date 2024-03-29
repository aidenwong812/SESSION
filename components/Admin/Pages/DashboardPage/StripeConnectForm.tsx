import { loadConnectAndInitialize } from "@stripe/connect-js"
import { ConnectAccountOnboarding, ConnectComponentsProvider } from "@stripe/react-connect-js"
import Button from "@/shared/Button"
import { createPaymentIntent } from "@/lib/stripe/createPaymentIntent"
import axios from "axios"

const StripeConnectForm = () => {
  const fetchClientSecret = async () => {
    // Fetch the AccountSession client secret by making an API call to your service
    const response = await createPaymentIntent(1)
    return response.client_secret
  }
  const connectInstance = loadConnectAndInitialize({
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PK,
    fetchClientSecret: fetchClientSecret,
    appearance: {
      variables: {
        colorPrimary: "#228403", // Optional appearance parameter
      },
    }
  })
  const handleClick = async () => {
    const res = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/account`,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_SK}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        type: "standard",
        capabilities: {
          card_payments: {
            requested: true,
          },
          transfers: {
            requested: true,
          },
        },
      },
    })
    console.log(res)
  }

  return (
    <Button
      id="stripe-connect"
      type="submit"
      className="aspect-[200/45] w-[200px] rounded-full font-urwgeometric_bold text-[16px] text-black
            md:aspect-[335/48] md:w-[201px]
            md:text-[9.6px] lg:w-[268px] lg:text-[12.8px] xl:w-[335px] xl:text-[16px]"
      pulseColor="white"
      onClick={handleClick}
    >
      Connect Stripe
    </Button>
    // <ConnectComponentsProvider connectInstance={connectInstance}>
    //   <ConnectAccountOnboarding onExit={() => { }} />
    // </ConnectComponentsProvider>
  )
}

export default StripeConnectForm