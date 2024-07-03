const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("close_modal");
const projectsContainer = document.getElementById("projects");
//const projectCards = document.querySelectorAll(".project_card");


//closeModalButton.addEventListener("click",function() {
    //modal.classList.add("hide");
//})
//declared variable and called it "modal". I then gave this variable the value of the element that I called from the document(HTML).This element is identified by the id "modal"
//declare variable, name it closeModalButton and give it the value of the element that I called from the document(HTML). This element is identified by the id "close_modal"
//document is an object. The browser will search the document for an element by the name of the reference. Now the element "close_modal" is in the variable closeModalButton.
//To the closeModalButton variable(object) we can add a method(function) like an event listener (addEventListener). We add the event "click". Every time the user add the event(click) we want the function to run. Once clicked, we want to add the .hide class to the modal. Soooo......
//Use the event handler(closeModalButton) add event listener(click) and what function you want to run when the event is registered.
//bring the elements you need at the top by declaring them.
//in my modal, I can access all of the classes (.class) that I have in my modal. This function will add (.hide) to this array of classes. Every time the event happens, .hide will be appended.
//also after var declarations, can create specific function function onClosModalButtonClickHandler() {modal.classList.add("hide")} The we would write the event handler like this closeModalButton.addEventListener("click", onCloseModalButtonClickHandler)
//remember this does not run the function, it only gets executed if the event is 'heard'.
//querySelectAll brings back everything that has the argument attatched to it
const project1 = {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aliquam quidem ipsam dicta ex facere earum eius, aliquid quisquam minima laudantium possimus error dolorem inventore at fugiat, obcaecati eaque distinctio.",
    imageSrc: "https://images.unsplash.com/photo-1715157163163-49fedb9f398b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
};
//all project cards have the same types of contents. Use an object to hold these cards.
const project2 = {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate beatae, nisi quis mollitia quos optio asperiores provident est dicta nihil placeat dolorem ab exercitationem adipisci, accusantium ipsa neque obcaecati iure!",
    imageSrc: "https://images.unsplash.com/photo-1715145036637-ffa5d164e195?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
};

const project3 = {
    title: "project 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ducimus molestias saepe! Inventore veritatis placeat corporis aliquam reiciendis reprehenderit magnam possimus et. Quod numquam esse, tempora qui sequi veritatis at.",
    imageSrc: "https://images.unsplash.com/photo-1715117022094-c65019842057?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

const projects = [project1, project2, project3];

for (let i = 0; i < projects.length; i++) {
    const li = document.createElement("li");
    li.classList.add("project_card");

    const img = document.createElement("img");
    img.src = projects[i].imageSrc;
    img.alt = projects[i].title;

    const description = document.createElement("p");
    description.textContent = projects[i].description;

    li.appendChild(img);
    li.appendChild(description);

    li.addEventListener("click", () => onProjectCardClickHandler(i));
    projectsContainer.appendChild(li);
}

//put all properties of cards into objects. Put objects into array. Fill html document using javascript create element method.ie. create an image, using the image src attribute of the object. We create this by accessing the projects array at index and using the imageSrc from that object.


function onCloseModalClickEventHandler() {
    modal.classList.add("hide");
}

function onProjectCardClickHandler(i) {
    const modalContent = document.getElementById("modal_content");
    const selectedProject = projects[i];

    const titleElement = modalContent.querySelector("h2");
    titleElement.textContent = selectedProject.title;

    const descriptionElement = modalContent.querySelector("p");
    descriptionElement.textContent = selectedProject.description;

    const imageElement = modalContent.querySelector("img");
    imageElement.src = selectedProject.imageSrc;
    imageElement.alt = selectedProject.title;

    modal.classList.remove("hide");
}

closeModalButton.addEventListener("click", onCloseModalClickEventHandler);

//for (let i = 0; i < projectCards.length; i++) {
    //projectCards[i].addEventListener("click", onProjectCardClickHandler);
//}

//for all my elements in my project cards array(object), I am going to access the element itself, add the event listener, and register the handler. We use the loop so that we dont have to write this code a pile of times. Also, if changes need to be made they can be made in one place. This works for individual elements because we have used queryselectall and it selects everything with that class. Remember, this listener is registered to each element in the class, not the class itself.

/*<li class="project_card">
<img src="https://images.unsplash.com/photo-1715157163163-49fedb9f398b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project X"></a>
<h4>Project X</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aliquam quidem ipsam dicta ex facere earum eius, aliquid quisquam minima laudantium possimus error dolorem inventore at fugiat, obcaecati eaque distinctio.</p>

</li>
<li class="project_card">
<img src="https://images.unsplash.com/photo-1715145036637-ffa5d164e195?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project X"></a>
<h4>Project X</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate beatae, nisi quis mollitia quos optio asperiores provident est dicta nihil placeat dolorem ab exercitationem adipisci, accusantium ipsa neque obcaecati iure!</p>
</li>
<li class="project_card">
<img src="https://images.unsplash.com/photo-1715117022094-c65019842057?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project X"></a>
<h4>Project X</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ducimus molestias saepe! Inventore veritatis placeat corporis aliquam reiciendis reprehenderit magnam possimus et. Quod numquam esse, tempora qui sequi veritatis at.</p>
</li>*/