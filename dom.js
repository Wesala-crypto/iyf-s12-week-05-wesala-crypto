
// getElementById - returns a single element
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName - returns a live HTMLCollection
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName - returns a live HTMLCollection
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector - returns the first match
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll - returns a static NodeList
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

// Additional practice selections

// 1. Select the h1
const heading = document.querySelector("h1");

// 2. Select all content elements
const allContents = document.querySelectorAll(".content");

// 3. Select the contact form
const contactForm = document.getElementById("contact-form");

// 4. Select the email input
const emailInput = document.querySelector("#email");

// 5. Select all navigation list items
const navItems = document.querySelectorAll(".nav-list li");

// 6. Select the first navigation link
const firstNavLink = document.querySelector(".nav-link");

// 7. Select the last paragraph
const lastParagraph = document.querySelector("footer p");

console.log("Heading:", heading);
console.log("All contents:", allContents);
console.log("Contact form:", contactForm);
console.log("Email input:", emailInput);
console.log("Navigation items:", navItems);
console.log("First navigation link:", firstNavLink);
console.log("Last paragraph:", lastParagraph);



console.log("===== TASK 9.2 =====");

// Select navigation
const nav = document.querySelector("nav");

// Parent
console.log("Nav parent:", nav.parentElement);

// Children
console.log("Nav children:", nav.children);
console.log("First child:", nav.firstElementChild);
console.log("Last child:", nav.lastElementChild);

// Siblings
const article = document.querySelector("article");

console.log("Next sibling:", article.nextElementSibling);
console.log("Previous sibling:", article.previousElementSibling);

// Descendants
const navLinks = nav.querySelectorAll("a");
console.log("Navigation links:", navLinks);

// Practice tasks

// 1. Select header, then navigate to nav
const headerElement = document.querySelector("header");
console.log("Nav inside header:", headerElement.querySelector("nav"));

// 2. First nav-link parent li
const firstLinkParent = document.querySelector(".nav-link").parentElement;
console.log("First link parent:", firstLinkParent);

// 3. Article next sibling
console.log("Article next sibling:", article.nextElementSibling);

// 4. Select ul and all its li children
const navList = document.querySelector("ul");
console.log("List items:", navList.children);

// 5. Footer up to body
const footerElement = document.querySelector("footer");
console.log("Footer parent:", footerElement.parentElement);
console.log("Body:", footerElement.parentElement.parentElement);


//task 9.2

console.log("===== TASK 9.3 =====");

// Select the h1
const h1 = document.querySelector("h1");

// Reading text
console.log("Text content:", h1.textContent);
console.log("Inner text:", h1.innerText);

// Modifying text
h1.textContent = "DOM Manipulation Practice";


const articleContent = document.querySelector("article");

// Read HTML
console.log("Article HTML:", articleContent.innerHTML);

// Modify HTML
articleContent.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content.</p>
`;

// Security demonstration
const userInput = "<img src='x' onerror='alert(\"hacked!\")'>";

articleContent.textContent = userInput;

console.log("User input displayed safely:", articleContent.textContent);



console.log("===== ATTRIBUTES =====");

const link = document.querySelector(".nav-link");

// Get attribute
console.log("Href:", link.getAttribute("href"));
console.log("Link property:", link.href);

// Set attribute
link.setAttribute("href", "https://developer.mozilla.org");

// Check attribute
console.log("Has target:", link.hasAttribute("target"));

// Remove attribute
link.removeAttribute("target");

// Data attributes
const element = document.createElement("div");

element.dataset.id = "123";
element.dataset.category = "tech";

console.log("Data ID:", element.dataset.id);
console.log("Category:", element.dataset.category);



console.log("===== STYLES =====");

const container = document.querySelector(".container");

// Inline styles
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

// Multiple styles
Object.assign(container.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});

console.log("Container styles applied!");



console.log("===== TASK 9.4 =====");

// Create a new paragraph
const newParagraph = document.createElement("p");

newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

// Select article
const articleElement = document.querySelector("article");

// Add paragraph
articleElement.appendChild(newParagraph);

console.log("New paragraph added:", newParagraph);

// Create another paragraph
const anotherParagraph = document.createElement("p");

anotherParagraph.textContent = "I was inserted before the first paragraph!";

// Insert before another element
const firstParagraph = articleElement.querySelector("p");

articleElement.insertBefore(anotherParagraph, firstParagraph);


console.log("===== REMOVING ELEMENTS =====");

// Remove an element
const footer = document.querySelector("footer");
footer.remove();

console.log("Footer removed!");

// Remove the last navigation item
const navElement = document.querySelector("nav");
const lastLink = navElement.querySelector("li:last-child");

lastLink.parentElement.removeChild(lastLink);

console.log("Last navigation item removed!");

// Clear article children
while (articleElement.firstChild) {
    articleElement.removeChild(articleElement.firstChild);
}

console.log("Article cleared!");


console.log("===== CLONING ELEMENTS =====");

// Select an existing navigation item
const navItem = document.querySelector(".nav-link").parentElement;

// Clone it
const clone = navItem.cloneNode(true);

// Change its text
clone.querySelector("a").textContent = "New Link";

// Add clone to navigation list
document.querySelector(".nav-list").appendChild(clone);

console.log("Navigation item cloned:", clone);


// Build: Add navigation items dynamically

function addNavItem(text, href) {
    const newItem = document.createElement("li");
    const newLink = document.createElement("a");

    newLink.textContent = text;
    newLink.href = href;
    newLink.className = "nav-link";

    newItem.appendChild(newLink);

    document.querySelector(".nav-list").appendChild(newItem);
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");

console.log("Blog and Portfolio links added!");


//excersise 10
console.log("===== TASK 10.1: EVENT LISTENERS =====");

// Select the heading
const pageHeading = document.querySelector("h1");

// Listen for a click
pageHeading.addEventListener("click", function() {
    console.log("Heading was clicked!");
});

// Listen for a mouseover
pageHeading.addEventListener("mouseover", function() {
    pageHeading.style.color = "blue";
});

// Listen for a mouseout
pageHeading.addEventListener("mouseout", function() {
    pageHeading.style.color = "black";
});


console.log("===== TASK 10.2: EVENT OBJECT =====");

pageHeading.addEventListener("click", function(event) {
    console.log("Event type:", event.type);
    console.log("Clicked element:", event.target);
    console.log("Mouse position X:", event.clientX);
    console.log("Mouse position Y:", event.clientY);
});


console.log("===== TASK 10.3: EVENT BUBBLING =====");

const navListElement = document.querySelector(".nav-list");

navListElement.addEventListener("click", function(event) {
    console.log("Navigation list clicked!");
    console.log("Actual target:", event.target);
});


console.log("===== BUBBLING EXERCISE =====");

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});
console.log("===== DELEGATED TASK LIST =====");

const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Add new tasks
addTaskButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-task">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
});

// ONE delegated event listener on the parent ul
taskList.addEventListener("click", function(event) {
    const task = event.target.closest("li");

    if (!task || !taskList.contains(task)) return;

    if (event.target.closest(".delete-task")) {
        task.remove();
    } else {
        task.classList.toggle("completed");
    }
});

console.log("===== TASK 10.4: FORM VALIDATION =====");

const contactFormElement = document.getElementById("contact-form");
const contactNameField = document.getElementById("name");
const contactEmailField = document.getElementById("email");

// Display error messages
function showError(input, message) {
    input.classList.add("error");

    let errorMessage = input.nextElementSibling;

    if (!errorMessage || !errorMessage.classList.contains("error-message")) {
        errorMessage = document.createElement("small");
        errorMessage.className = "error-message";
        input.insertAdjacentElement("afterend", errorMessage);
    }

    errorMessage.textContent = message;
}

// Clear error messages
function clearError(input) {
    input.classList.remove("error");

    const errorMessage = input.nextElementSibling;

    if (errorMessage && errorMessage.classList.contains("error-message")) {
        errorMessage.remove();
    }
}

// Validate name as user types
contactNameField.addEventListener("input", function(event) {
    const value = event.target.value.trim();

    if (value.length < 2) {
        showError(contactNameField, "Name must be at least 2 characters");
    } else {
        clearError(contactNameField);
    }
});

// Validate email as user types
contactEmailField.addEventListener("input", function(event) {
    const value = event.target.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
        showError(contactEmailField, "Please enter a valid email");
    } else {
        clearError(contactEmailField);
    }
});

// Validate form submission
contactFormElement.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(contactFormElement);
    const data = Object.fromEntries(formData);

    const validName = data.name.trim().length >= 2;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);

    if (validName && validEmail) {
        console.log("Form data:", data);
        alert("Form submitted successfully!");
        contactFormElement.reset();
        clearError(contactNameField);
        clearError(contactEmailField);
    } else {
        console.log("Please correct the form errors.");
    }
});