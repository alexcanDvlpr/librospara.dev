/* eslint-disable @next/next/no-img-element */
import { Book } from "@/types";
import Link from "next/link";

const BookCard = ({ book }: { book: Book }) => {

    return (
        <Link href={`/books/${book.slug}`}>
            <article className="w-full sm:w-52 cursor-pointer">
                <img src={book.portrait} alt={book.title} className="w-full sm:w-52 shadow-lg hover:rounded-lg hover:animate-wiggle transition-all" />
            </article>
        </Link>
    );
}

export default BookCard;