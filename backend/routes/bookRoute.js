import express from 'express'
import catchAsyncError from '../utils/catchAsyncError'
import bookController from '../controllers/bookController'

const router = express.Router()

// get all books
router.get('/', catchAsyncError(bookController.getAll))

// get a book by id
router.get('/:id', catchAsyncError(bookController.getOne))

// add book
router.post('/', catchAsyncError(bookController.addOne))

// update a book by id
router.put('/:id', catchAsyncError(bookController.updateOne))

// delete a book by id
router.delete('/:id', catchAsyncError(bookController.deleteOne))

export default router
