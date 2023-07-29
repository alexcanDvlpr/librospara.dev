import { NotionBook } from './NotionBook';

interface NotionBookToFormat {
    id: string,
    book: Record<string, any>
};

type ReadingDifficult = "Low" | "Normal" | "Hight"

interface Book {
    id: string;
    description: string;
    author: string;
    isbn: string;
    affiliateAw: string;
    portrait: string;
    difficult: ReadingDifficult;
    title: string;
}

export type {
    NotionBook,
    NotionBookToFormat,
    ReadingDifficult,
    Book,
}