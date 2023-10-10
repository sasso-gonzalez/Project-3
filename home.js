var list = [];
var purchased = [];

function submit()
{ 
    let item = document.getElementById("input").value; //gets the value of whatever is in the text input
    list.push(item);//puts the value into the list array
    let printList = document.getElementById("list");//gets the location of the div where the p tags go
    let p = document.createElement('p');
    p.innerText = item;//sets the text in the p tag to the value in the text input
    p.setAttribute("onClick", "strike(this)")//sets it so whenever the created p tag is clicked on it call the strike() function
    printList.appendChild(p);//places the p tag in the div
    document.getElementById("input").value = ""; // clears the submission box after an item is inserted into the list
}


function strike(x)
{    // if it has a line through (null = no change)
    if(x.style.textDecoration === "line-through")
    {
        x.style.textDecoration = null;// removes the line through the click on p tag
        list.push(x.innerText)// adds the text of the p tag that was clicked on into the unpurchased array
        purchased.splice(purchased.indexOf(x.innerText), 1); //takes it out of purchased array after pushing it into the unpurchased array.
    }// if it doesnt have a line through
    else if(x.style.textDecoration !== "line-through")
    {
        x.style.textDecoration = "line-through";// on click line through text
        purchased.push(x.innerText) // pushes text into Purchased List
        list.splice(list.indexOf(x.innerText), 1); // removes text from unpurchased list
    }
}
function display()
{
    if(document.getElementById("options").value === "purchased")// if the user selected the purchased option in the dropdown
    {
        let printList = document.getElementById("creation");//gets the div tag where the p tags will go
        while (printList.firstChild) //this clears the div 
        {
            printList.firstChild.remove()
        }
        for(let i = 0; i < purchased.length; i++)//sets the p tag to every iteration in the purchased array
        {
            let p = document.createElement('p');
            p.innerText = purchased[i]
            printList.appendChild(p)
        }
    }
    else if(document.getElementById("options").value === "unpurchased")// if the user selected the unpurchased option in the dropdown
    {
        let printList = document.getElementById("creation");//gets the div tag where the p tags will go
        while (printList.firstChild) // clears the div
        {
            printList.firstChild.remove()
        }
        for(let i = 0; i < list.length; i++)//sets the p tag to every iteration in the unpurchased array
        {
            let p = document.createElement('p');
            p.innerText = list[i]
            printList.appendChild(p)
        }
    }
}