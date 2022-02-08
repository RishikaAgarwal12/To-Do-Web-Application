let todovalue = document.getElementById('inputline');
let alltodo = document.getElementById('alltodo');
let toadd = document.getElementById('toadd');



toadd.addEventListener('click', () => {
    addtask();

})

alltodo.addEventListener('click', (event) => {

    const element = event.target;
    if (element.className === "close") {
        const parent = element.parentElement;
        parent.remove();
    }
    if (element.className === "done-work") {
        const parent = element.parentElement;
        parent.style.textDecoration = "line-through";
    }



})

// Add new task in a list
function addtask() {

    // create a div
    const tododiv = document.createElement('div');
    tododiv.className = "todocontainer"

    // create a list
    const li = document.createElement('li');
    li.className = "todolist";
    const t = document.createTextNode(todovalue.value);

    //check whether we put any task or not
    if (todovalue.value == "") {
        alert('Field can not be empty');
    }
    else {
        li.appendChild(t)
        li.style.fontSize = "20px";
        tododiv.appendChild(li);
        todovalue.value = "";
    }

    //create button for mark as done
    const done = document.createElement('BUTTON');
    done.className = 'done-work';
    done.innerHTML = '<i class="material-icons" >&#xe876;</i>';
    done.style.margin = "5px";
    tododiv.appendChild(done);

    //create close button
    const complete = document.createElement('BUTTON');
    complete.className = 'close';
    complete.innerHTML = '<i class="material-icons" >&#xe872;</i>';
    tododiv.appendChild(complete);


    // add style in span
    addstyle(complete);


    //add style in tododiv
    tododiv.style.padding = "2px";
    tododiv.style.display = "flex";


    //add all element in alltodo
    alltodo.appendChild(tododiv);

    return (tododiv);

};

//add style in close button
function addstyle(span) {
    //span.style.margin = "5px";
    span.style.cursor = "pointer";


}