export function getRandomOrder(count: number) {
  // 배열을 초기화하고 0부터 n까지의 수를 순서대로 넣음
  const arr = Array.from({ length: count }, (_, index) => index);

  // Fisher-Yates 알고리즘을 사용하여 배열을 무작위 순서로 섞음
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

export function getShuffledArray(arr: any[]) {
  const shuffledArr = arr.slice(); // 원본 배열 복사

  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }

  return shuffledArr;
}
