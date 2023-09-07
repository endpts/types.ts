export interface EndptsRequest extends Request {
  query: URLSearchParams;
  params: Record<string, string>;
}

export interface Route {
  method:
    | "ALL"
    | "GET"
    | "POST"
    | "PUT"
    | "PATCH"
    | "DELETE"
    | "HEAD"
    | "OPTIONS";
  path: string;
  handler(req: EndptsRequest): Promise<Response>;
}
