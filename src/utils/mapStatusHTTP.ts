export default function mapStatusHTTP(status: string): number {
  const statusHTTPMap: Record<string, number> = {
    SUCCESSFUL: 201,
    INVALID_DATA: 400,
    UNPROCESSABLE_CONTENT: 422,
  };

  return statusHTTPMap[status] ?? 500;
}