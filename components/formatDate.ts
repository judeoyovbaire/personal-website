// Post dates are plain YYYY-MM-DD strings; format them in UTC so the result
// never depends on the build machine's timezone.
export function formatDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
