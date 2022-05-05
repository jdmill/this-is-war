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
  let user_id = null;
  let champion_id = null;

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

    if (response.ok) {
      const champResponse = await fetch("/api/champions", {
        method: "GET",
      })
        .then((data) => data.json())
        .then((data) => {
          champion_id = data[data.length - 1].id;
          user_id = data[data.length - 1].user_id;
        });

      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }

  const userResponse = await fetch(`/api/users/update/${user_id}`, {
    method: "PUT",
    body: JSON.stringify({
      champion_id,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (userResponse.ok) {
    // If successful, redirect the browser to the home page
    document.location.replace("/profile");
  } else {
    alert(response.statusText);
  }
};

const deleteChampHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/champions/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete champion");
    }
  }
};

function check_value(radioValue) {
  switch (radioValue) {
    case 3:
      document.getElementById("class-display").innerHTML =
        "<img src='/wizard-image.png'>";
      break;

    case 2:
      document.getElementById("class-display").innerHTML =
        "<img src='/archer-image.png'>";
      break;

    case 1:
      document.getElementById("class-display").innerHTML =
        "<img src='/barbarian-image.png'>";
      break;
  }
}

document
  .querySelector(".new-champ-form")
  .addEventListener("submit", newChampFormHandler);

document
  .querySelector(".champ-list")
  .addEventListener("click", deleteChampHandler);
