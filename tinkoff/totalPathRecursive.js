var day = 0;

function findDay(fDay, totalKm) {
  day += 1;
  if (fDay < totalKm) {
    totalKm -= fDay;
    fDay *= 1.7;
    return findDay(fDay, totalKm);
  } else {
    return day;
  }
}

console.log(findDay(10, 100));
