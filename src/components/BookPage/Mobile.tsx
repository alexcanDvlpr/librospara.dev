import { Book } from "@/types";
import { translateDifficultStatus, truncateTitle } from "@/utils";
import Image from "next/image";
import AmazonAffiliateFloatingButton from "../AmazonAffiliateFloatingButton";
import BackButton from "../shared/BackButton";

const BookPageMobile = ({ book }: { book: Book }) => {

    return (
        <div className="w-full flex flex-col justify-center items-center relative">
            <div className="w-full pt-28 py-2 px-2">
                <BackButton />
            </div>
            <div className="w-full px-2 py-2">
                <h1 className="text-3xl font-extrabold pt-1">{truncateTitle(book.title)}</h1>
            </div>
            <div className="w-full px-2 pb-8">
                <Image
                    width={387}
                    height={688}
                    className="bookImage"
                    src={book.portrait}
                    alt={book.title}
                    style={{ "view-transition-name": `${book.slug}-image` }}
                />
                <hr className="pt-2" />
                <div className="book-data py-3 flex flex-col">
                    <p className="text-lg font-bold">Dificultad: {translateDifficultStatus(book.difficult)}</p>
                    <p className="text-lg font-bold">{book.author} | {book.isbn}</p>
                </div>
                <div className="description">
                    <h2 className="text-3xl font-bold pb-3">Descripción</h2>
                    <p>{book.description}</p>
                </div>
            </div>
            {book.affiliateAw ? <AmazonAffiliateFloatingButton url={book.affiliateAw} /> : null}
        </div>
    )
}

export default BookPageMobile;