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

    async getBooks(): Promise<any> {
        const result = await this.httpClient.get("/databases/", this.databaseId, {
            headers: { authorization: this.authKey }
        });
        console.log(result);
    }

}