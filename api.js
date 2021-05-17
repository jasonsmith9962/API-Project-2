const key = 'T993Z7zFgfyLLCYhT9jWmpxiTTsHraX6';
let searchBtn= document.querySelector("#search");
let searchInput=document.getElementById("searchTerm");
//let searchValue= searchInput.value;
// var searchValue=document.getElementById("searchTerm").value;
// console.log(searchValue);
let div = document.querySelector(".results")
// const URL = `http://api.giphy.com/v1/gifs/search?api_key=${key}&limit=10&offset=0&rating=pg-13&lang=en&q=${searchValue}`;
function fetchResults() {
  console.log("fetchResults called", searchInput.value);

  var searchValue=searchInput.value;

  const URL = `http://api.giphy.com/v1/gifs/search?api_key=${key}&limit=10&offset=0&rating=pg-13&lang=en&q=${searchValue}`;
  console.log(URL);

  fetch(URL)
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(data => display(data.data))
  .catch(function(json) {
  })
}
searchBtn.addEventListener("click", fetchResults);
function display(data){
  console.log(data)
 data.forEach(item => {
   
   let image= document.createElement("img")
   image.src=item.images.original.url
   image.setAttribute("width","200px")
   div.appendChild(image)
  });
}