import PropTypes from 'prop-types'
import BookSingleCard from './BookSingleCard'

BooksCard.propTypes = {
  books: PropTypes.array,
}

const BooksCard = props => {
  const { books } = props

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map(item => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  )
}

export default BooksCard
