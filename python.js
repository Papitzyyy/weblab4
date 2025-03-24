function loadContent(topic) {
    const content = {
        pointers: `
            <h2>Pointers in Python</h2>
            <p>Python does not have traditional pointers like C/C++. However, Python uses references to manage memory, which behaves similarly to pointers.</p>

            <h3>🔹 How References Work in Python</h3>
            <ul>
                <li>Variables store references (addresses) to objects.</li>
                <li>Changing a mutable object through one variable affects all references to it.</li>
                <li><code>id(variable)</code> can be used to check an object's memory address.</li>
            </ul>

            <h3>📌 Example: References Acting Like Pointers</h3>
            <pre><code>
            a = [10, 20, 30]  # 'a' stores a reference to the list                 
b = a  # 'b' now points to the same list as 'a'

b[0] = 99  # Modifying 'b' also modifies 'a'

print(a)  # Output: [99, 20, 30]
print(b)  # Output: [99, 20, 30]
print(id(a), id(b))  # Same memory address
            </code></pre>

            <h3>✅ Explanation:</h3>
            <ul>
                <li><code>b = a</code> makes <code>b</code> point to the same list as <code>a</code> (like a pointer in C).</li>
                <li>Modifying <code>b</code> affects <code>a</code> because they share the same reference.</li>
            </ul>
        `,
        functions: `
            <h2>Functions in Python</h2>
            <p>A function in Python is a block of reusable code that performs a specific task. Functions help in code modularity, reusability, and organization.</p>

            <h3>🔹 Types of Functions in Python:</h3>
            <ul>
                <li><strong>Built-in Functions</strong> – Predefined (e.g., <code>print()</code>, <code>len()</code>, <code>sum()</code>).</li>
                <li><strong>User-Defined Functions</strong> – Created by programmers using <code>def</code>.</li>
            </ul>

            <h3>📌 Example: Simple User-Defined Function</h3>
            <pre><code>
def greet():
    print("Hello, welcome to Python!")

greet()  # Function call
            </code></pre>

            <h3>✅ Explanation:</h3>
            <ul>
                <li><code>def greet():</code> defines a function named <code>greet()</code>.</li>
                <li><code>print("Hello, welcome to Python!")</code> runs when the function is called.</li>
                <li><code>greet()</code> calls the function and prints the message.</li>
            </ul>
        `,
        structures: `
            <h2>Structures in Python</h2>
            <p>Python does not have <code>struct</code> like C, but it provides alternative ways to group related data. You can use:</p>
            <ul>
                <li><strong>Classes (OOP Approach)</strong> – Similar to <code>struct</code> in C but with methods.</li>
                <li><strong>Named Tuples (Lightweight Alternative)</strong> – Immutable and memory-efficient.</li>
                <li><strong>Dictionaries (Key-Value Pairs)</strong> – Flexible but dynamic.</li>
            </ul>

            <h3>📌 Example: Using a Class (Like struct in C)</h3>
            <pre><code>
class Student:
    def __init__(self, name, age, course):
        self.name = name
        self.age = age
        self.course = course

# Creating an object (like a struct in C)
s1 = Student("Ian", 20, "BSIT")

print(s1.name, s1.age, s1.course)  
# Output: Ian 20 BSIT
            </code></pre>

            <h3>✅ Explanation:</h3>
            <ul>
                <li><code>class Student</code> acts like a <code>struct</code> to store multiple related attributes.</li>
                <li><code>__init__()</code> initializes <code>name</code>, <code>age</code>, and <code>course</code>.</li>
                <li><code>s1 = Student("Ian", 20, "BSIT")</code> creates an instance like <code>struct Student s1</code> in C.</li>
            </ul>
        `,
        file_handling: `
            <h2>File Handling in Python</h2>
            <p>File handling in Python allows you to read, write, append, and manage files easily using built-in functions.</p>

            <h3>🔹 File Modes in Python:</h3>
            <ul>
                <li><code>"r"</code> → Read mode (default)</li>
                <li><code>"w"</code> → Write mode (overwrites file)</li>
                <li><code>"a"</code> → Append mode (adds to file)</li>
                <li><code>"r+"</code> → Read & write mode</li>
            </ul>

            <h3>📌 Example: Writing and Reading a File</h3>
            <pre><code>
# Writing to a file
with open("example.txt", "w") as file:
    file.write("Hello, this is Python file handling!")

# Reading from the file
with open("example.txt", "r") as file:
    content = file.read()

print(content)  # Output: Hello, this is Python file handling!
            </code></pre>

            <h3>✅ Explanation:</h3>
            <ul>
                <li><code>open("example.txt", "w")</code> creates (or overwrites) a file and writes text.</li>
                <li><code>open("example.txt", "r")</code> reads the content.</li>
                <li><code>with</code> ensures the file is closed properly.</li>
            </ul>
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





    



