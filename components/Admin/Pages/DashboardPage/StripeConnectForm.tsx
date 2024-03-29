import axios from "axios"
import Button from "@/shared/Button"

const StripeConnectForm = () => {
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
  )
}

export default StripeConnectForm