function minDiv(n, i = 2) {
  if (n % i === 0) {
    return i;
  } else {
    return minDiv(n, i + 1);
  }
}
