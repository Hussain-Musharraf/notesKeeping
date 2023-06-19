let count=0;
function onSubmitHandler(){
    count++;
    let input=document.querySelector("#list-notes").value;
    document.querySelector("#count").innerHTML=count

    let parentElement = document.createElement("div");
    parentElement.classList.add("form-group")
    parentElement.classList.add("notes");

    let paragraphElement = document.createElement("p");
    let paragraphNode = document.createTextNode(count+" . "+input);
    paragraphElement.appendChild(paragraphNode);
    parentElement.appendChild(paragraphElement);
    //-------------------------------------------------------
    paragraphElement.addEventListener("blur",onBlurHandler)

///////////////////////////////////////////////////////////////////////////////////////////////////
    let deleteElement = document.createElement("button");
    deleteElement.classList.add("form-button");
    let deleteNode = document.createTextNode("Delete");
    deleteElement.appendChild(deleteNode);
    parentElement.appendChild(deleteElement);
    //-------------------------------------------------------------------
    deleteElement.addEventListener("click",onDeleteHandler);

///////////////////////////////////////////////////////////////////////////////////////////////////
    let editElement = document.createElement("button");
    editElement.classList.add("form-button");
    let editNode = document.createTextNode("Edit");
    editElement.appendChild(editNode);
    parentElement.appendChild(editElement);
    //-------------------------------------------------------------------
    editElement.addEventListener("click",onEditHandler);

//////////////////////////////////////////////////////////////////////////////////////////
    let globalList=document.querySelector("#list");
    globalList.appendChild(parentElement);
}

///|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\

function onDeleteHandler(e){
    count--;
    alert("Want to delete");
    e.target.parentElement.remove();
    document.querySelector("#count").innerHTML=count
}

//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\

function onEditHandler(e){
    e.target.parentElement.firstChild.setAttribute("contenteditable",true)
}
/////||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
function onBlurHandler(e){
    e.target.parentElement.firstChild.setAttribute("contenteditable",false)
}