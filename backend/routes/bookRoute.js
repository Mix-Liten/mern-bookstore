import express from 'express'
import { Book } from '../models/bookModal'
import CustomError from '../utils/customError'

const router = express.Router()

// get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find({})

    return res.status(200).json({ data: books, count: books.length })
  } catch (error) {
    throw new CustomError(error, 500)
  }
})

// get a book by id
router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const book = await Book.findById(id)

    return res.status(200).json(book)
  } catch (error) {
    throw new CustomError(error, 500)
  }
})

// add book
router.post('/', async (req, res) => {
  const { title, author, publishYear } = req.body
  const newBook = { title, author, publishYear }

  try {
    const { error } = Book.saveValidate(newBook)
    if (error) {
      return res.status(400).json({ message: error })
    }

    const book = await Book.create(newBook)

    return res.status(201).json(book)
  } catch (error) {
    throw new CustomError(error, 500)
  }
})

// update a book by id
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { title, author, publishYear } = req.body
  const newBook = { title, author, publishYear }

  try {
    const { error } = Book.saveValidate(newBook)
    if (error) {
      return res.status(400).json({ message: error })
    }

    const result = await Book.findByIdAndUpdate(id, newBook)
    if (!result) {
      return res.status(404).json({ message: 'Book not found' })
    }

    return res.status(201).json({ message: 'Book updated successfully' })
  } catch (error) {
    throw new CustomError(error, 500)
  }
})

// delete a book by id
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const result = await Book.findByIdAndDelete(id)
    if (!result) {
      return res.status(404).json({ message: 'Book not found' })
    }

    return res.status(200).send({ message: 'Book deleted successfully' })
  } catch (error) {
    throw new CustomError(error, 500)
  }
})

export default router
