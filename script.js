

function grayOut(id) {
    var elem = this;
    var pelem = document.getElementById(elem.parentElement.id);
  
    if(elem.checked == true) {
      pelem.setAttribute("class", "selected");
    }
    else {
      pelem.removeAttribute("class");
    }
  }
  
  function addItem() {
    var item = document.getElementById("itemName")
    var itemName = document.getElementById("itemName").value;
  
    if(itemName == "") {
      window.alert("Please actually add an item name.");
    }
    else {
      var container = document.createElement("div");
      var label = document.createElement("label");
      var input = document.createElement("input");
      var main = document.getElementById("list");
  
      main.appendChild(container);
      container.appendChild(label);
      container.appendChild(input);
  
      container.setAttribute("id", itemName);
  
      label.setAttribute("for", itemName);
      label.innerHTML = itemName;
  
      input.setAttribute("type", "checkbox");
      input.setAttribute("id", itemName + "-chk");
      input.setAttribute("class", "box");
  
      input.addEventListener("change", grayOut);
      item.value = "";
    }
  }
  
  function updateList() {
    document.querySelectorAll(".box").forEach(function(e) {
      var pelem = document.getElementById(e.parentElement.id);
      if(e.checked == true) {
        var cln = pelem.cloneNode(true);
        pelem.remove();
      }
    });
  }