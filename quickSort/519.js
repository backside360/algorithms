// n - изначальное колво ошибок
// a[] - номера ошибок
// b[] - номера ошибок - 1
// с[] - номера ошибок - 2

const findResolvedIssues = (...compileErrors) =>
  compileErrors.reduce((acc, currentErrors, index) => {
    if (index === compileErrors.length - 1) {
      return acc;
    }

    const findedError = currentErrors.filter(
      error => !compileErrors[index + 1].find(nextError => error === nextError)
    );

    return [...acc, ...findedError];
  }, []);

document.write(
  findResolvedIssues([1, 5, 8, 123, 7], [123, 7, 5, 1], [5, 1, 7])
);

/*
  findResolvedIssues(compileErrors: [ [1, 5, 8, 123, 7], [123, 7, 5, 1], [5, 1, 7] ] )
    reduce(compileErrors): (acc: [], errors: [1, 5, 8, 123, 7], index: 0 )
      findedError: ([1, 5, 8, 123, 7], [123, 7, 5, 1]) -> 8
    
*/
