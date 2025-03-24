function loadContent(topic) {
    const content = {
        pointers: `
            <h2>Pointers in HTML</h2>
            <p>HTML does not have pointers like C or references like Python. However, you can use hyperlinks (<code>&lt;a&gt;</code> tags) as "pointers" to navigate to other pages, sections, or external resources.</p>

            <h3>📌 Example: Using an Anchor Tag as a "Pointer"</h3>
            <pre><code>
&lt;a href="https://www.youtube.com"&gt;Go to Example Website&lt;/a&gt;
            </code></pre>

            <h3>✅ Explanation:</h3>
            <ul>
                <li><code>&lt;a href="URL"&gt;</code> creates a hyperlink (like a pointer) to another location.</li>
                <li>Clicking it redirects the user to <strong>https://www.youtube.com</strong>.</li>
            </ul>

            <h3>🚀 In HTML, hyperlinks act like pointers, guiding users to different locations!</h3>
        `,

        functions: `
            <h2>Functions in HTML</h2>
            <p>HTML does not have functions like programming languages (e.g., C, Python, JavaScript). However, HTML elements work like functions by defining structure and behavior when combined with JavaScript.</p>

            <h3>📌 Example: Button Calling a JavaScript Function</h3>
            <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;script&gt;
        function greet() {
            alert("Hello, welcome to HTML with JavaScript!");
        }
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;button onclick="greet()"&gt;Click Me&lt;/button&gt;
&lt;/body&gt;
&lt;/html&gt;
            </code></pre>

            <h3>✅ Explanation:</h3>
            <ul>
                <li><code>&lt;button onclick="greet()"&gt;</code> calls the JavaScript function when clicked.</li>
                <li><code>function greet()</code> shows an alert (message box).</li>
            </ul>

            <h3>📌 HTML alone does not support functions, but JavaScript adds dynamic behavior! 🚀</h3>
        `,

        structures: `
            <h2>Structures in HTML</h2>
            <p>HTML provides a structural framework for web pages using elements like headings, paragraphs, divs, and sections. The structure defines how content is organized and displayed.</p>

            <h3>📌 Example: Basic HTML Structure</h3>
            <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My Web Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;Welcome to My Website&lt;/h1&gt;
    &lt;/header&gt;
    &lt;section&gt;
        &lt;p&gt;This is a section of content.&lt;/p&gt;
    &lt;/section&gt;
    &lt;footer&gt;
        &lt;p&gt;© 2025 My Website&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
            </code></pre>

            <h3>✅ Explanation:</h3>
            <ul>
                <li><code>&lt;html&gt;</code> → The root element of the page.</li>
                <li><code>&lt;head&gt;</code> → Contains metadata (title, links, scripts).</li>
                <li><code>&lt;body&gt;</code> → Contains visible content.</li>
                <li><code>&lt;header&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code> → Organize content for better structure.</li>
            </ul>

            <h3>📌 HTML structures define the layout and organization of a webpage! 🚀</h3>
        `,

        file_handling: `
            <h2>File Handling in HTML</h2>
            <p>HTML alone cannot handle files (read/write) like Python or C. However, you can use the <code>&lt;input type="file"&gt;</code> element to upload files, and JavaScript or a backend language (e.g., Python, PHP) to process them.</p>

            <h3>📌 Example: File Upload in HTML</h3>
            <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
    &lt;form action="upload.php" method="post" enctype="multipart/form-data"&gt;
        &lt;label for="file"&gt;Choose a file:&lt;/label&gt;
        &lt;input type="file" id="file" name="file"&gt;
        &lt;input type="submit" value="Upload"&gt;
    &lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
            </code></pre>

            <h3>✅ Explanation:</h3>
            <ul>
                <li><code>&lt;input type="file"&gt;</code> allows users to select a file.</li>
                <li><code>&lt;form action="upload.php"&gt;</code> sends the file to a server-side script for processing.</li>
                <li><code>enctype="multipart/form-data"</code> ensures correct file transfer.</li>
            </ul>

            <h3>📌 HTML provides the UI for file handling, but backend processing is required! 🚀</h3>
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