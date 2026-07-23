import { APIRequestContext, APIResponse } from "@playwright/test";

import { config } from "../config/config";

export class ApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async get(url: string): Promise<APIResponse> {
    console.log("\n========== GET REQUEST ==========");
    console.log("BASE URL :", config.baseURL);
    console.log("ENDPOINT :", url);

    const response = await this.request.get(url, {
      headers: config.headers,
    });

    console.log("FINAL URL :", response.url());
    console.log("STATUS    :", response.status());
    console.log("BODY      :");
    console.log(await response.text());
    console.log("=================================\n");

    return response;
  }

  async post(url: string, body: unknown): Promise<APIResponse> {
    console.log("================================");
    console.log("REQUEST METHOD : POST");
    console.log("REQUEST URL    :", url);
    console.log("REQUEST HEADER :", JSON.stringify(config.headers, null, 2));
    console.log("REQUEST BODY   :", JSON.stringify(body, null, 2));
    console.log("================================");

    const response = await this.request.post(url, {
      headers: config.headers,
      data: body,
    });

    console.log("================================");
    console.log("FINAL URL :", response.url());
    console.log("STATUS    :", response.status());
    console.log("HEADERS   :", response.headers());
    console.log("BODY      :", await response.text());
    console.log("================================");

    return response;
  }

  async put(url: string, body: unknown): Promise<APIResponse> {
    console.log("\n========== PUT REQUEST ==========");

    const response = await this.request.put(url, {
      data: body,
      headers: config.headers,
    });

    console.log("FINAL URL :", response.url());
    console.log("STATUS    :", response.status());
    console.log("BODY      :");
    console.log(await response.text());

    return response;
  }

  async delete(url: string): Promise<APIResponse> {
    console.log("\n========== DELETE REQUEST ==========");

    const response = await this.request.delete(url, {
      headers: config.headers,
    });

    console.log("FINAL URL :", response.url());
    console.log("STATUS    :", response.status());
    console.log("BODY      :");
    console.log(await response.text());

    return response;
  }
}
