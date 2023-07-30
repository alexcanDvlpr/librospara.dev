import { Book } from "@/types";
import Image from "next/image";

const BookPageMobile = ({ book }: { book: Book }) => {

    const truncateTitle = (title: string) =>
        title.length >= 50
            ? `${title.split("").splice(0, 47).join("")}...`
            : title;

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full pt-24 px-2 py-2">
                <h1 className="text-3xl font-extrabold pt-1">{truncateTitle(book.title)}</h1>
            </div>
            <div className="w-full px-2">
                <Image
                    width={387}
                    height={688}
                    className="bookImage"
                    src={book.portrait}
                    alt={book.title}
                    style={{ "view-transition-name": `${book.slug}-image` }}
                />
            </div>
        </div>
    )
}

export default BookPageMobile;