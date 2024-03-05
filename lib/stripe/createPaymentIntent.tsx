import axios from "axios"
import qs from "qs"
import handleTxError from "../handleTxError"

export const createPaymentIntent = async (amount) => {
  try {
    const data = {
      amount: Number(amount * 100).toFixed(),
      currency: "usd",
      "automatic_payment_methods[enabled]": "true",
      "transfer_data[destination]": process.env.NEXT_PUBLIC_FINANCIAL_ACCOUNT,
      "transfer_data[amount]": Number(amount * 100).toFixed(),
      "metadata[created_at]": new Date().getTime(),
    }

    const dataStringify = qs.stringify(data)

    const res = await axios({
      method: "post",
      url: `https://api.stripe.com/v1/payment_intents`,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_SK}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: dataStringify,
    })

    return res.data
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}
