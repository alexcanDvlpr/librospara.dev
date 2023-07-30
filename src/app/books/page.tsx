import BookCard from "@/components/BookCard";
import { NotionService } from "@/services/notion";
import { Book } from "@/types";

const notionService = new NotionService();

const BooksPage = async () => {
    const books = await notionService.getBooks();

    return (
        <main className="w-full min-h-screen flex flex-col justify-start items-center from-tsBlue-100 to-tsBlue-200">
            <h1
                className="mt-28 mb-7 md:mt-24 text-center font-extrabold text-transparent text-4xl md:text-6xl bg-clip-text bg-gradient-to-r from-tsWhite-100 to-tsWhite-200"
                style={{ "view-transition-name": "title" }}
            >
                #librosParaDevs
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-5 md:grid-rows-3 gap-10 p-3 md:p-0">
                {
                    books.map((book: Book) => (
                        <BookCard key={book.id} book={book} />
                    ))
                }
            </div>
        </main>
    )
}

export default BooksPage;