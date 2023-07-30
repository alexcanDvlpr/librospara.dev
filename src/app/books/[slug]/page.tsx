import DificultStatus from "@/components/DifficultStatus";
import { NotionService } from "@/services/notion";
import Link from "next/link";

const notionService = new NotionService();

const BookSinglePage = async ({ params }: { params: { slug: string } }) => {
    const book = await notionService.getBookBySlug(params.slug);

    return (
        <main className="w-full flex flex-row justify-center gap-10 mt-24">
            <aside>
                <img src={book.portrait} alt={book.title} className="w-54 hover:grayscale-0" />
            </aside>
            <section className="w-1/2">
                <h1 className="text-4xl font-extrabold">{book.title}</h1>
                <p className="text-lg">{book.isbn} | {book.author}</p>
                <hr className="my-2" />
                <p>{book.description}</p>
                {
                    book.affiliateAw ? (
                        <Link target="_blank" href={book.affiliateAw} className="btn btn-primary">
                            Comprar en Amazon
                        </Link>
                    ) : null
                }
            </section>
            <DificultStatus difficult={book.difficult} />
        </main>
    )
}

export async function generateStaticParams() {
    const books = await notionService.getBooks();

    return books.map((book) => ({
        slug: book.slug,
    }))
}

export default BookSinglePage;