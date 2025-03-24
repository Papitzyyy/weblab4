function loadContent(topic) {
    const content = {
        pointers: `
            <h2>Pointers in PHP</h2>
            <p>PHP does not have traditional pointers like C, but it supports <strong>references</strong>. A reference in PHP is an alias that points to the same memory location as another variable.</p>

            <h3>📌 Example: PHP Reference (Pointer-Like Behavior)</h3>
            <pre><code>
&lt;?php
$a = 10;
$b = &$a;  // $b is now a reference to $a

$b = 20;   // Changing $b also changes $a

echo $a;   // Output: 20
?&gt;
            </code></pre>

            <h3>✅ Explanation:</h3>
            <ul>
                <li><code>$b = &$a;</code> makes <code>$b</code> a reference to <code>$a</code>.</li>
                <li>Changing <code>$b</code> also updates <code>$a</code> since they share the same memory location.</li>
            </ul>

            <h3>📌 PHP uses references instead of pointers to manage memory efficiently! 🚀</h3>
        `,

        functions: `
            <h2>Functions in PHP</h2>
            <p>A function in PHP is a block of reusable code that performs a specific task. It helps in modularity and code reusability.</p>

            <h3>📌 Example: Simple Function in PHP</h3>
            <pre><code>
&lt;?php
function greet() {
    echo "Hello, welcome to PHP!";
}

greet();  // Output: Hello, welcome to PHP!
?&gt;
            </code></pre>

            <h3>✅ Explanation:</h3>
            <ul>
                <li><code>function greet() {}</code> defines a function named <code>greet</code>.</li>
                <li><code>echo</code> prints a message.</li>
                <li><code>greet();</code> calls the function to execute its code.</li>
            </ul>

            <h3>📌 PHP functions improve code organization and reusability! 🚀</h3>
        `,

        structures: `
            <h2>Structures in PHP</h2>
            <p>PHP does not have "structures" like C, but it organizes data using <strong>associative arrays, objects, and classes</strong>. These structures help manage and group related data efficiently.</p>

            <h3>📌 Example: Object Structure in PHP (Using a Class)</h3>
            <pre><code>
&lt;?php
class Person {
    public $name;
    public $age;

    function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    function greet() {
        return "Hello, my name is " . $this->name;
    }
}

$person1 = new Person("Ian", 20);
echo $person1->greet();  // Output: Hello, my name is Ian
?&gt;
            </code></pre>

            <h3>✅ Explanation:</h3>
            <ul>
                <li><code>class Person</code> defines a structure with properties (<code>$name</code>, <code>$age</code>) and a method (<code>greet</code>).</li>
                <li>The <code>__construct()</code> function initializes the object.</li>
                <li><code>$person1->greet();</code> calls the function to return a greeting.</li>
            </ul>

            <h3>📌 PHP structures use classes and objects to organize data efficiently! 🚀</h3>
        `,

        file_handling: `
            <h2>File Handling in PHP</h2>
            <p>PHP provides functions for reading, writing, and manipulating files on the server using functions like <code>fopen()</code>, <code>fwrite()</code>, and <code>fread()</code>.</p>

            <h3>📌 Example: Writing to a File in PHP</h3>
            <pre><code>
&lt;?php
$file = fopen("example.txt", "w");  // Open file in write mode
fwrite($file, "Hello, this is a PHP file handling example!");  // Write to file
fclose($file);  // Close the file
echo "File written successfully!";
?&gt;
            </code></pre>

            <h3>✅ Explanation:</h3>
            <ul>
                <li><code>fopen("example.txt", "w")</code> opens a file in write mode.</li>
                <li><code>fwrite($file, "...")</code> writes text to the file.</li>
                <li><code>fclose($file)</code> closes the file to save changes.</li>
            </ul>

            <h3>📌 PHP allows reading, writing, and managing files efficiently on the server! 🚀</h3>
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
