import { usePayment } from "@/providers/PaymentProvider"
import { PAYMENTS } from "@/lib/consts/global"
import CheckCard from "../CheckCard"
import PaymentIcon from "../PaymentIcon"

const PaymentSelector = () => {
  const { selectedPayment, setSelectedPayment } = usePayment()

  return (
    <div className="w-full">
      <p
        className="pb-[10px] 
            font-urwgeometric_bold text-[24px] text-gray_1 md:text-[19.2px] 
            lg:text-[25.6px] xl:text-[32px]"
      >
        Pay With
      </p>
      <div className="flex flex-col gap-y-[12px]">
        <CheckCard
          checked={selectedPayment === PAYMENTS.STRIPE}
          id="stripe-payment"
          onClick={() => setSelectedPayment(PAYMENTS.STRIPE)}
        >
          <PaymentIcon
            link="/images/Common/credit-card.svg"
            blurLink="/images/Common/credit-card.png"
            containerClasses="w-[45px] md:w-[19.2px] lg:w-[25.6px] xl:w-[32px] aspect-[1/1]"
          />
          <p
            className="font-urwgeometric_bold leading-[100%]
                      text-gray_1 md:text-[9.6px] lg:text-[12.8px]
                      xl:text-[16px]"
          >
            Credit Card
          </p>
        </CheckCard>
        <CheckCard
          checked={selectedPayment === PAYMENTS.PAYPAL}
          id="paypal-payment"
          onClick={() => setSelectedPayment(PAYMENTS.PAYPAL)}
        >
          <PaymentIcon
            link="/images/Common/paypal.svg"
            blurLink="/images/Common/paypal.png"
            containerClasses="w-[50px] md:w-[30.6px] lg:w-[40.8px] xl:w-[51px] aspect-[51/13]"
          />
          <p
            className="font-urwgeometric_bold leading-[100%]
                      text-gray_1 md:text-[9.6px] lg:text-[12.8px]
                      xl:text-[16px]"
          >
            Paypal
          </p>
        </CheckCard>
      </div>
    </div>
  )
}

export default PaymentSelector
