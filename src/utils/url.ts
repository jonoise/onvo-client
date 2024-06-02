export const buildUrl = (
  baseUrl: string,
  path: string,
  queryParams?: Record<string, string>
): string => {
  const url = new URL(baseUrl + path)

  if (queryParams) {
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, value)
    })
  }

  console.log('BUILD URL', url.toString())

  return url.toString()
}
