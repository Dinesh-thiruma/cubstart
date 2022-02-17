const boredButton = document.getElementById("bored-button");
const card = document.getElementById("content");

// BEGIN PART 7

async function fetchActivity(){
  const response = await fetch("https://www.boredapi.com/api/activity");
  const activity = await response.json();
  return activity;
}

// END PART 7

boredButton.addEventListener("click", async () => {
  // empty card
  // get activity from API
  // process this data into 'p' elements
  // append the text elements as children of the card
  const activity = await fetchActivity();
  const cardDetails = document.getElementById("content")
  cardDetails.innerHTML = ``;
  document.getElementById("bored-text").innerHTML = "I'm Still Bored";
  // BEGIN PART 8
  for (const [key, value] of Object.entries(activity)) {
    if(key == "activity") {
      document.getElementById("card-header").innerText = value;
    }else if (key != "link" && key != "key") {
      cardDetails.innerHTML += `${key}: ${value}<br>`
    }
  }
  document.getElementById("column").style="flex";
  // END PART 8
});
