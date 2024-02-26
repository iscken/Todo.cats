// admin chast
const photo = document.querySelector(".photo");
const color = document.querySelector(".color");
const theCat = document.querySelector(".theCat");
const CatPrice = document.querySelector(".CatPrice");
const addBtn = document.querySelector(".btnAdmin");
const block2 = document.querySelector(".block2");
const input = document.querySelectorAll("input")

main();
addBtn.addEventListener("click", () => {
  getData()
})
function getData () {
  let newobj = {
    img: photo.value,
    text1: color.value,
    text2: theCat.value,
    text3: CatPrice.value,
  };

  let storage = JSON.parse(localStorage.getItem("product")) || [];
  storage.push(newobj);
  localStorage.setItem("product", JSON.stringify(storage));

  for (let i of input) {
    i.value = ''
  }

  main();

}

function main() {
  let data = JSON.parse(localStorage.getItem("product")) || [];
  data.forEach((el) => {
    const div = document.createElement("div");
    div.classList = "box";
    const img = document.createElement("img");
    const text1 = document.createElement("h4");
    const text2 = document.createElement("h4");
    const text3 = document.createElement("h4");
    const btnblock2 = document.createElement("button");
    img.classList = "img";
    img.src = el.img;
    text1.innerHTML = el.text1;
    text2.innerHTML = el.text2;
    text3.innerHTML = el.text3;

    div.append(img);
    div.append(text1);
    div.append(text2);
    div.append(text3);
    div.append(btnblock2);
    block2.append(div);
   
  });
}



// admin chast

// klientsciy chast

// const image = document.querySelector(".image")
// const name = document.querySelector(".name")
// const create = document.querySelector(".create");
// const list = document.querySelector(".list");
// const input = document.querySelectorAll("input");

// create.addEventListener("click", () => createDate());

// function createDate() {

//     let newobj = {
//         image: image.value,
//         name: name.value
//     };

//     let storage = JSON.parse(localStorage.getItem("product")) || [];
//     storage.push(newobj);
//     localStorage.setItem("product", JSON.stringify(storage));

//     for(let inp of input){
//         inp.value = "";
//     }
// }
