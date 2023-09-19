import mongoose from 'mongoose'
import Joi from 'joi'

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
)

bookSchema.methods.saveValidate = valObj => {
  const schema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    publishYear: Joi.number().required(),
  })

  return schema.validate(valObj)
}

export const Book = mongoose.model('book', bookSchema)
