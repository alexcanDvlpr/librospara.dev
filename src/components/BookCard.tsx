import { Book } from "@/types";

const BookCard = ({ book }: { book: Book }) => {

    return (
        <article>
            <img src={book.portrait} alt={book.title} />
            <h1>{book.title}</h1>
        </article>
    );
}

export default BookCard;