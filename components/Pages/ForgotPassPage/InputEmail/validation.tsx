import JoiBase from "joi"

const validation = JoiBase.object({
  useremail: JoiBase.string()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": `Please enter a valid email. Example: example@email.com`,
      "string.email": `Please enter a valid email. Example: example@email.com`,
    }),
})

export { validation }
