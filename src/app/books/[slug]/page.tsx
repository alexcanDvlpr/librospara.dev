import BookPageDesktop from "@/components/BookPage/Desktop";
import BookPageMobile from "@/components/BookPage/Mobile";
import { NotionService } from "@/services/notion";

const notionService = new NotionService();

const BookSinglePage = async ({ params }: { params: { slug: string } }) => {
    const book = await notionService.getBookBySlug(params.slug);

    return (
        <main className="w-full">
            <div className="hidden md:block">
                <BookPageDesktop book={book} />
            </div>
            <div className="block md:hidden">
                <BookPageMobile book={book} />
            </div>
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