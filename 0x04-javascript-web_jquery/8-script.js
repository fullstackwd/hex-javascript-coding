const $url = 'https://swapi-api.hbtn.io/api/films/?format=json';
$.get($url, (data) =>
  data.results.forEach((e) => {
    $('UL#list_movies').append(`<li>${e.title}</li>`);
  })
);
