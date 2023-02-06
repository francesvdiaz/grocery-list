window.addEventListener("load", function()  {
  const button = document.getElementById("enter");

  button.addEventListener("click", function(event){
    event.preventDefault();
  
    let item1 = document.getElementById("item1").value;
    let item2 = document.getElementById("item2").value;
    let item3 = document.getElementById("item3").value;
    let item4 = document.getElementById("item4").value;
    let item5 = document.getElementById("item5").value;

    const items = [item1,item2,item3,item4,item5];
  
    items.sort();

    const body = document.querySelector("body");
    const div = document.createElement("div");
    body.append(div);

    const list = document.createElement("ul");
    list.setAttribute("id", "groceries");
    div.append(list);

    items.forEach(function (element) {
      element = element.toUpperCase();
      li = document.createElement("li");
      li.textContent = element;
      list.append(li);
    });
    const form = document.getElementById("input");
    form.classList.add("hidden");
  });
}); 

