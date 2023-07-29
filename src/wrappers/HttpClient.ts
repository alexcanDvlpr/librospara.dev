
export class HttpClient {
    private static instance: HttpClient;
    baseUrl: string;

    private constructor() {
        this.baseUrl = "https://api.notion.com/v1";
    }

    public static getInstance(): HttpClient {
        if (!HttpClient.instance) {
            HttpClient.instance = new HttpClient();
        }

        return HttpClient.instance;
    }

    public async get(resource: string, url: string, config: Record<string, unknown>): Promise<any> {
        const { headers = {} } = config;
        const response = await fetch(`${this.baseUrl}${resource}${url}`, {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
                "Access-Control-Max-Age": "86400",
                "Authorization": `Bearer ${(headers as any).authorization}`,
                "Notion-Version": "2022-06-28"
            }
        });

        if (response.status === 204) {
            return null;
        }

        return response.json();
    }

}