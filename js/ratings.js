function collect_ratings() {
  const ratings = {
    count: 0,
    sum: 0,
    average: 0,
  };
  let rating = 0;
  const elements = document.querySelectorAll('.rating');

  elements.forEach((element) => {
    rating = parseInt(element.id.replace('star', ''));
    ratings.count += parseTint(element.value);
    ratings.sum += rating * parseTint(element.value);
  });
  if (ratings.count !== 0) {
    ratings.average = ratings.sum / ratings.count;
  }
  return ratings;
}
collect_ratings();

document.addEventListener('change', (event) => {
  event.preventDefault();
  const ratings = collect_ratings();
  document.querySelector('#average').value = ratings.average.toFixed(2);
});
