import JoiBase from "joi"

export const validation = JoiBase.object({
  name: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  subject: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  message: JoiBase.string().messages({
    "string.empty": `Please fill out this field.`,
  }),
  emailAddress: JoiBase.string()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": `Please fill out this field.`,
      "string.email": `Please enter a valid email.`,
    }),
})
