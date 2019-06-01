function findDay(fDay, totalKm, day = 0) {
  day += 1;
  if (fDay < totalKm) {
    totalKm -= fDay;
    fDay *= 1.7;
    return findDay(fDay, totalKm, day);
  } else {
    return day;
  }
}

console.log(findDay(10, 100));
