import Link from "next/link";
import DificultStatus from "../DifficultStatus";
import { Book } from "@/types";

const BookPageDesktop = ({ book }: { book: Book }) => {

    return (
        <div className="w-full flex flex-row justify-center gap-10 mt-24">
            <aside>
                <img
                    style={{ "view-transition-name": `${book.slug}-image` }}
                    src={book.portrait}
                    alt={book.title}
                    className="w-54 hover:grayscale-0"
                />
            </aside>
            <section className="w-1/2">
                <h1 className="text-4xl font-extrabold">{book.title}</h1>
                <p className="text-lg">{book.isbn} | {book.author}</p>
                <hr className="my-2" />
                <p className="book-description">{book.description}</p>
                {
                    book.affiliateAw ? (
                        <Link target="_blank" href={book.affiliateAw} className="btn btn-primary">
                            Comprar en Amazon
                        </Link>
                    ) : null
                }
            </section>
            <DificultStatus difficult={book.difficult} />
        </div>
    )
}

export default BookPageDesktop;