import { motion } from "framer-motion"

const RadialGradient = ({ isHovered }) => (
  <>
    <div
      className="absolute left-0 top-0
          z-[1] size-full rounded-full
          bg-gradient_s_1
          opacity-[0.6]"
    />
    <div
      className="absolute left-0 top-0
        z-[1] size-full rounded-full
        bg-gradient_s_1
        opacity-[0.4]"
    />
    <div
      className="absolute left-0 top-0 z-[2]
        flex size-full justify-center rounded-full"
    >
      <motion.div
        className="h-full
          rounded-full bg-gradient_s_1
          opacity-[0.4]"
        animate={{
          width: isHovered ? "100%" : "91%",
        }}
        initial={{
          width: "91%",
        }}
        transition={{
          duration: 0.2,
        }}
      />
    </div>
    <div
      className="absolute left-0 top-0 z-[3]
        flex size-full justify-center rounded-full"
    >
      <motion.div
        className="h-full
          rounded-full bg-gradient_s_1
          opacity-[0.4]"
        animate={{
          width: isHovered ? "100%" : "79%",
        }}
        initial={{
          width: "79%",
        }}
        transition={{
          duration: 0.2,
        }}
      />
    </div>
    <div
      className="absolute left-0 top-0 z-[4]
        flex size-full justify-center rounded-full"
    >
      <motion.div
        className="h-full
          rounded-full bg-gradient_s_1"
        animate={{
          width: isHovered ? "100%" : "61.15%",
        }}
        initial={{
          width: "61.15%",
        }}
        transition={{
          duration: 0.2,
        }}
      />
    </div>
  </>
)

export default RadialGradient
