export interface EndptsRequest extends Request {
  query: URLSearchParams;
  params: Record<string, string>;
}

export interface Route {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  handler(req: EndptsRequest): Promise<Response>;
}
