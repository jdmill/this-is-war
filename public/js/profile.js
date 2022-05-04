const newChampFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the new champ form
  const class_selection = document.querySelector(
    'input[name="class-select"]:checked'
  ).value;
  const item_selection = document.querySelector("#item-choice").value;

  let hitpoints = null;
  let strength = null;
  let item_id = null;
  let class_name = class_selection;

  if (class_selection && item_selection) {
    switch (class_selection) {
      case "barbarian":
        hitpoints = 75;
        strength = 15;
        break;
      case "archer":
        hitpoints = 55;
        strength = 20;
        break;
      case "wizard":
        hitpoints = 40;
        strength = 25;
        break;
    }

    switch (item_selection) {
      case "leather gloves":
        item_id = 1;
        break;
      case "wooden sword":
        item_id = 2;
        break;
      case "cloak":
        item_id = 3;
        break;
    }

    //console.log(class_selection, item_selection, strength, hitpoints, item_id);
    console.log(class_name);
    const response = await fetch("/api/champions", {
      method: "POST",
      body: JSON.stringify({
        class_name,
        hitpoints,
        strength,
        item_id,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);

    if (response.ok) {
      // If successful, redirect the browser to the home page
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".new-champ-form")
  .addEventListener("submit", newChampFormHandler);
