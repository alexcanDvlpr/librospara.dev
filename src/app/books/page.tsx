"use client"
import { NotionService } from "@/services/notion";
import { useEffect } from "react";

const BooksPage = () => {

    useEffect(() => {
        const notionService = new NotionService();
        notionService.getBooks();
    }, []);

    return (
        <h1>Books</h1>
    )
}

export default BooksPage;