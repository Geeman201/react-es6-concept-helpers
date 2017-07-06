export const getPeople = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        [
          'James',
          'Permy',
          'Saf',
          'Sal'
        ]
      )
    }, 2000);
  })
};