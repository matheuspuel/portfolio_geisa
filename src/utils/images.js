export const getTransformedImage = (url, transformation) => {
  const searchString = '/image/upload/'
  const insertIndex = url.indexOf(searchString) + searchString.length
  return url.slice(0, insertIndex) + transformation + '/' + url.slice(insertIndex);
}