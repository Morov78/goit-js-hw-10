const BASE_URL = 'https://restcountries.com/v2/';
function fetchCountries(name) {
  return fetch(
    `${BASE_URL}name/${name}?fields=name,flags,languages,capital,population`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
export { fetchCountries };

// function fetchCountries(name) {
//   return fetch(
//     `https://restcountries.com/v2/name/${name}?fields=name,flags,languages,capital,population`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
// }
