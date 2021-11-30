/**
 * Retrieves a list of image search results from Google
 * @param (String) searchTerm
 * @param (Number) -optional- start (starting from what result)
 * @param (Number) -optional- num (how many results to return, 1 - 10)
 *
 * @return (Object)
 *
 */
// API key AIzaSyDckjTiJQyYSWo2Nd0_pCNDR8Ndd_PKAPY
// Serach id b78fcea813ddf1066
// Serach URL  https://cse.google.com/cse?cx=b78fcea813ddf1066/search/images?
function getImageSearchResults(searchTerm, start, num) {
  start = start < 0 || start > 90 || typeof start === "undefined" ? 0 : start;
  num = num < 1 || num > 10 || typeof num === "undefined" ? 10 : num;

  if (!searchTerm) {
    console.error("No search term");
  }

  let parameters = "&q=" + encodeURIComponent(searchTerm);
  parameters += "&searchType=image";
  parameters += start ? "&start=" + start : "";
  parameters += "&num=" + num;
  parameters += "&fields=" + "items";
  let host = "https://www.googleapis.com";
  //https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures
  let path =
    "/customsearch/v1?key=" +
    "AIzaSyDckjTiJQyYSWo2Nd0_pCNDR8Ndd_PKAPY" +
    "&cx=" +
    "b78fcea813ddf1066" +
    parameters;
  console.log(host + path);
  return host + path;
}

export default getImageSearchResults;
