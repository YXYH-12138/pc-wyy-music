export function getSizeImage(url, size) {
  return url + `?param=${size}y${size}`;
}

export function getCount(count) {
  if (count < 10000) return count;
  const newCount = Math.floor(count / 10000) + '万';
  return newCount;
}