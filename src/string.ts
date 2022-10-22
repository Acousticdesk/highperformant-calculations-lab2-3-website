export function snakeCaseToCamelCase(string: string) {
  return string.replace(/(_\w)/g, (match) => match.toUpperCase().replace('_', ''))
}

export function camelCaseToSnakeCase(string: string) {
  return string.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`)
}
