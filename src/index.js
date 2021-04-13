document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("input[type=submit]").addEventListener("click", function(event) {
    newTask = document.getElementById("new-task-description").value
    console.log(newTask);
    const node = document.createElement("LI");
    const textnode = document.createTextNode(newTask);         // Create a text node
    node.appendChild(textnode);   
    document.getElementById("tasks").appendChild(node);
    //tasks.appendChild.innerHTML = "hello";
    event.preventDefault();
}, false);
});
