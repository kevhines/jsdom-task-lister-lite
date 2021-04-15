document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("input[type=submit]").addEventListener("click", function(event) {
    newTask = document.getElementById("new-task-description").value
    newTaskwithButton = `newTask <button>x</button>`
    console.log(newTask);
    const node = document.createElement("LI");
    const buttonNode = document.createElement("button");
    buttonNode.addEventListener("click", function(event) {
        event.target.parentElement.remove()
      });
      
    const buttontextnode = document.createTextNode("X");
    buttonNode.appendChild(buttontextnode);
    const textnode = document.createTextNode(newTask+" ");         // Create a text node
    node.appendChild(textnode); 
    node.appendChild(buttonNode);  
    document.getElementById("tasks").appendChild(node);
    event.preventDefault();
});


});
