import { Book, NotionBook, NotionBookToFormat } from "@/types";
import { HttpClient } from "@/wrappers/HttpClient";

export class NotionService {
    databaseId: string;
    authKey: string;
    httpClient: HttpClient;

    constructor() {
        this.authKey = process.env.NEXT_PUBLIC_NOTION_SECRET ?? "";
        this.databaseId = process.env.NEXT_PUBLIC_NOTION_BOOKS_DATABASE ?? "";
        this.httpClient = HttpClient.getInstance();
    }

    async getBooks(): Promise<Array<Book>> {
        try {
            const result = await this.httpClient.post("/databases/", `${this.databaseId}/query`, {}, {
                headers: { authorization: this.authKey }
            });

            return result.results
                .map((result: NotionBook) => ({
                    id: result.id, book: result.properties
                }))
                .map(this.formatNotionBook);
        } catch (error: unknown) {
            throw new Error("Error retrieving books data");
        }
    }

    async getBookBySlug(slug: string): Promise<Book> {
        try {
            const result = await this.httpClient.post("/databases/", `${this.databaseId}/query`, {}, {
                headers: { authorization: this.authKey }
            });

            return result.results
                .filter((book: NotionBook) => book.properties.slug.rich_text[0].text.content === slug)
                .map((result: NotionBook) => ({
                    id: result.id, book: result.properties
                }))
                .map(this.formatNotionBook)[0];
        } catch (error: unknown) {
            throw new Error("Error retrieving books data");
        }
    }

    private formatNotionBook(notionBook: NotionBookToFormat): Book {
        return {
            id: notionBook.id,
            description: notionBook.book.description.rich_text[0].text.content,
            author: notionBook.book.author.rich_text[0].text.content,
            isbn: notionBook.book.isbn.rich_text[0].text.content,
            affiliateAw: notionBook.book.amazon_affiliate.url ?? "",
            portrait: notionBook.book.portrait.url ?? "",
            difficult: notionBook.book.dificult.select.name,
            title: notionBook.book.Name?.title[0].text.content,
            slug: notionBook.book.slug.rich_text[0].text.content,
        }
    }
}