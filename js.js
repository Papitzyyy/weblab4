function loadContent(topic) {
    const content = {
        pointers: `
            <h2>Pointers in JavaScript</h2>
            <p>JavaScript does not have traditional pointers like C, but it uses <strong>references</strong>. Objects and arrays in JavaScript are assigned by reference, meaning changes to one variable affect the original object.</p>

            <h3>📌 Example: JavaScript Reference (Pointer-Like Behavior)</h3>
            <pre><code>
let obj1 = { name: "Ian" };
let obj2 = obj1;  // obj2 now references the same object as obj1

obj2.name = "Bristan";  // Changing obj2 also changes obj1

console.log(obj1.name);  // Output: Bristan
            </code></pre>

            <h3>✅ Explanation:</h3>
            <ul>
                <li><code>obj1</code> is an object.</li>
                <li><code>obj2 = obj1;</code> makes <code>obj2</code> a reference (not a copy).</li>
                <li>Changing <code>obj2.name</code> affects <code>obj1.name</code> because both point to the same memory.</li>
            </ul>

            <h3>📌 JavaScript uses references instead of pointers, mainly for objects and arrays! 🚀</h3>
        `,

        functions: `
            <h2>Functions in JavaScript</h2>
            <p>A function in JavaScript is a block of reusable code that performs a specific task. It helps in modularity, reusability, and better code organization.</p>

            <h3>📌 Example: Simple Function in JavaScript</h3>
            <pre><code>
function greet() {
    console.log("Hello, welcome to JavaScript!");
}

greet();  // Output: Hello, welcome to JavaScript!
            </code></pre>

            <h3>✅ Explanation:</h3>
            <ul>
                <li><code>function greet() {}</code> defines a function named <code>greet</code>.</li>
                <li><code>console.log("...")</code> prints a message.</li>
                <li><code>greet();</code> calls the function to execute its code.</li>
            </ul>

            <h3>📌 JavaScript functions make code reusable and organized! 🚀</h3>
        `,

        structures: `
            <h2>Structures in JavaScript</h2>
            <p>JavaScript does not have strict "structures" like C but organizes data using objects and classes. These structures help group related data and functions.</p>

            <h3>📌 Example: Object Structure in JavaScript</h3>
            <pre><code>
let person = {
    name: "Ian",
    age: 20,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet();  // Output: Hello, my name is Ian
            </code></pre>

            <h3>✅ Explanation:</h3>
            <ul>
                <li><code>person</code> is an object with properties (<code>name</code>, <code>age</code>) and a method (<code>greet</code>).</li>
                <li><code>this.name</code> refers to the object's <code>name</code>.</li>
                <li>Calling <code>person.greet();</code> prints a greeting message.</li>
            </ul>

            <h3>📌 JavaScript structures use objects and classes to organize data efficiently! 🚀</h3>
        `,

        file_handling: `
            <h2>File Handling in JavaScript</h2>
            <p>JavaScript handles files using the File API (for frontend) or <code>fs</code> module (for backend with Node.js).</p>

            <h3>📌 Example: Reading a File in JavaScript (Browser)</h3>
            <pre><code>
&lt;input type="file" id="fileInput"&gt;
&lt;script&gt;
    document.getElementById("fileInput").addEventListener("change", function(event) {
        let file = event.target.files[0];  // Get selected file
        let reader = new FileReader();

        reader.onload = function(e) {
            console.log(e.target.result);  // Display file content in console
        };

        reader.readAsText(file);  // Read file as text
    });
&lt;/script&gt;
            </code></pre>

            <h3>✅ Explanation:</h3>
            <ul>
                <li><code>&lt;input type="file"&gt;</code> allows file selection.</li>
                <li><code>FileReader()</code> reads the file content.</li>
                <li><code>reader.readAsText(file);</code> reads the file as text and prints it to the console.</li>
            </ul>

            <h3>📌 JavaScript handles files using File API (frontend) or <code>fs</code> module (backend). 🚀</h3>
        `
    };

    document.getElementById("content").innerHTML = content[topic] || "<p>Content not found.</p>";
}


document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.createElement("div");
    menuBtn.classList.add("menu-btn");
    menuBtn.innerText = "☰"; // Hamburger menu
    document.body.appendChild(menuBtn);

    const subNav = document.querySelector(".sub-nav-left");

    menuBtn.addEventListener("click", function(event) {
        subNav.classList.toggle("active");
        event.stopPropagation(); // Prevents event from bubbling up
    });

    document.addEventListener("click", function(event) {
        if (!subNav.contains(event.target) && !menuBtn.contains(event.target)) {
            subNav.classList.remove("active"); // Hide sidebar when clicking outside
        }
    });
});


// Right sidebar menu button
const rightMenuBtn = document.createElement("div");
rightMenuBtn.classList.add("right-menu-btn");
rightMenuBtn.innerText = "API"; // Hamburger menu for right sidebar
document.body.appendChild(rightMenuBtn);

const subNavRight = document.querySelector(".sub-nav-right");

rightMenuBtn.addEventListener("click", function(event) {
    subNavRight.classList.toggle("active");
    event.stopPropagation();
});

document.addEventListener("click", function(event) {
    if (!subNavRight.contains(event.target) && !rightMenuBtn.contains(event.target)) {
        subNavRight.classList.remove("active");
    }
});

// Load content dynamically for right sidebar
const rightLinks = document.querySelectorAll(".sub-nav-right a");
const contentArea = document.getElementById("content");

rightLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const file = this.getAttribute("href"); // Get the linked file
        fetchContent(file); // Load content dynamically
    });
});

function fetchContent(file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            contentArea.innerHTML = data;
        })
        .catch(error => {
            contentArea.innerHTML = "<p>Failed to load content.</p>";
        });
}


async function getDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    document.getElementById('image').src = data.message;
  }

  async function getCat() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    document.getElementById('image').src = data[0].url;
  }

  async function getQuote() {
    const response = await fetch('https://inspirobot.me/api?generate=true');
    const quoteImageURL = await response.text();
    document.getElementById('image').src = quoteImageURL;
  }