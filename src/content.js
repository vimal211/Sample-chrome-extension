window.onload = () => {
  let btn = document.createElement("button");
  btn.id = "dark btn";
  btn.innerText = "Light mode";
  document.querySelector("#end").prepend(btn);
  btn.addEventListener("click", () => changeColor());
  function changeColor() {
    document.getElementsByTagName("ytd-app")[0].style.backgroundColor = "white";
  }
};
