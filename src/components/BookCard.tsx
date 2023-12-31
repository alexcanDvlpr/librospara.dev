/* eslint-disable @next/next/no-img-element */
import { Book } from "@/types";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }: { book: Book }) => {

    return (
        <Link href={`/books/${book.slug}`}>
            <article className="w-full sm:w-52 cursor-pointer">
                <Image
                    width={208}
                    height={117}
                    style={{ "view-transition-name": `${book.slug}-image` }}
                    src={book.portrait}
                    alt={book.title}
                    className="bookImage w-full sm:w-52 shadow-lg hover:rounded-lg hover:animate-wiggle transition-all" />
            </article>
        </Link>
    );
}

export default BookCard;