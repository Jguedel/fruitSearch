const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

//return matches array
function search(str) {
  let results = [];
  //look through the fruit array to find any that match the input if input length greater then 0
  if (str.length > 0) {
    results = fruit.filter((word) => {
      return word.toLocaleLowerCase().includes(str);
    });
  }
  //limit results to 4 inputs
  if (results.length > 6) {
    results = results.slice(0, 4);
  }
  //and return matches
  return results;
}

//combine search and showSuggestions to populate the search box ui
function searchHandler(e) {
  e.preventDefault();
  //set inputVal to match with
  let inputVal = input.value.toString();
  //get matches
  let matches = search(inputVal.toLowerCase());
  //display UI
  showSuggestions(matches, inputVal);
}

//populate suggestions
function showSuggestions(results, inputVal) {
  suggestions.innerHTML = "";
  //only display suggestions if results has value
  if (results.length >= 1) {
    let list = suggestions;
    list = results.forEach((word) => {
      let listItem = document.createElement("li");
      let pattern = new RegExp(inputVal, "ig");
      let temp = word.replaceAll(pattern, "<b>" + inputVal + "</b>");
      listItem.innerHTML = temp;
      listItem.id = "click";
      suggestions.append(listItem);
    });
  }
}

//on click of suggestion populate search bar
function useSuggestion(e) {
  e.preventDefault();
  if (e.target.parentElement.id == "click") {
    input.value = e.target.parentElement.innerText;
    //clear suggestions
    suggestions.innerHTML = "";
  } else if (e.target.id == "click") {
    input.value = e.target.innerText;
    //clear suggestions
    suggestions.innerHTML = "";
  }
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
