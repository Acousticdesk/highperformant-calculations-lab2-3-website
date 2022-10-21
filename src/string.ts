export function snakeCaseToCamelCase(string: string) {
  return string.replace(/(_\w)/g, (match) => match.toUpperCase().replace('_', ''))
}
