import BookPageDesktop from "@/components/BookPage/Desktop";
import BookPageMobile from "@/components/BookPage/Mobile";
import { NotionService } from "@/services/notion";
import { Metadata, ResolvingMetadata } from "next";

const notionService = new NotionService();
interface IProps { params: { slug: string } };

const BookSinglePage = async ({ params }: IProps) => {
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

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
    const slug = params.slug;

    const book = await notionService.getBookBySlug(slug);

    return {
        title: `${book.title} | librospara.dev`,
        description: `Si quieres aprender o aumentar tus conocimientos en desarrollo web o desarrollo de software, librospara.dev es tu sitio ideal. Te presentamos ${book.title} para que puedas mejorar en el sector IT como profesional`,
        openGraph: {
            images: [book.portrait],
        },
    }
}

export default BookSinglePage;