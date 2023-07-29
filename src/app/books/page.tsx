import BookCard from "@/components/BookCard";
import { NotionService } from "@/services/notion";
import { Book } from "@/types";

const BooksPage = async () => {
    const books = await getData();
    return (
        <main className="w-full min-h-screen flex flex-col justify-start items-center from-tsBlue-100 to-tsBlue-200">
            <h1 className="my-16 text-center font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-tsWhite-100 to-tsWhite-200">Libros</h1>
            <section className="w-ful px-16 flex flex-row gap-5 flex-wrap">
                {
                    books.map((book: Book) => (
                        <BookCard key={book.id} book={book} />
                    ))
                }
            </section>
        </main>
    )
}

async function getData() {
    const notionService = new NotionService();
    const books = await notionService.getBooks();

    return books;
}

export default BooksPage;