export default function mapStatusHTTP(status: string): number {
  const statusHTTPMap: Record<string, number> = {
    SUCCESSFUL: 201,
  };

  return statusHTTPMap[status] ?? 500;
}