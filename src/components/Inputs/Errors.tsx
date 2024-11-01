export function Errors({ errors }: { errors: string | undefined }) {
  return <span className="text-xs text-red-600 dark:text-red-400">{errors}</span>
}
