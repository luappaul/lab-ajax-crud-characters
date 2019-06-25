const windows = document.getElementById("window");

const charactersAPI = new APIHandler("http://localhost:8000");

function addElement(ele) {
  ele.forEach(element => {
    console.log(element);
    var name = element.name;
    var occupation = element.occupation;
    var weapon = element.weapon;
    var cartoon = element.cartoon;

    document.getElementById("windowChild").innerHTML = "";

    windows.innerHTML += `<div class="character-info">
    <div class="name" >Charactere Name : ${name}</div>
    <div class="occupation" >Character Occupation : ${occupation}</div>
    <div class="cartoon" >Is a Cartoon? ${cartoon}</div>
    <div class="weapon" >Character Weapon: ${weapon}</div>
    </div>`;
  });
}

function addOneElement(element) {
  console.log(element);
  var name = element.name;
  var occupation = element.occupation;
  var weapon = element.weapon;
  var cartoon = element.cartoon;

  document.getElementById("window").innerHTML = "";

  windows.innerHTML += `<div class="character-info">
    <div class="name" >Charactere Name : ${name}</div>
    <div class="occupation" >Character Occupation : ${occupation}</div>
    <div class="cartoon" >Is a Cartoon? ${cartoon}</div>
    <div class="weapon" >Character Weapon: ${weapon}</div>
  </div>`;
}

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI
      .getFullList()
      .then(res => addElement(res.data))
      .catch();
  };

  document.getElementById("fetch-one").onclick = function() {
    charactersAPI
      .getOneRegister(document.getElementById("id").value)
      .then(res => {
        console.log(res.data), addOneElement(res.data);
      })
      .catch();
  };

  document.getElementById("delete-one").onclick = function(evt) {
    evt.preventDefault();
    let id = document.getElementById("delete").value;
    console.log(id);
    charactersAPI
      .deleteOneRegister(id)
      .then(res => {
        console.log(res),
          (document.getElementById(
            "delete-one"
          ).innerHTML = `style="background-color: green"`);
      })
      .catch(err => console.log("error"));
  };

  document.getElementById("edit-character-form").onsubmit = function(evt) {
    evt.preventDefault();
    let name = document.getElementById("namenew").value;
    let occupation = document.getElementById("occupationNew").value;
    let cartoon = document.getElementById("cartoonNew").value;
    let weapon = document.getElementById("weaponNew").value;
    charactersAPI
      .createOneRegister(name, occupation, weapon, cartoon)
      .then(res => {
        document.getElementById(
          "send-data"
        ).innerHTML = `style="background-color: green"`;
      })
      .catch(err => console.log("error"));
  };

  document.getElementById("new-character-form").onsubmit = function() {};
});
