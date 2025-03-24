function loadContent(topic) {
    const content = {
        pointers: `
            <h2>Pointers in C</h2>
            <p>Pointers are variables that store memory addresses.</p>
            <pre><code>
#include &lt;stdio.h&gt;

int main() {
    int num = 10;
    int *ptr = &num; // Pointer stores the address of num

    printf("Value of num: %d\\n", num);
    printf("Address of num: %p\\n", &num);
    printf("Value stored in ptr: %p\\n", ptr);
    printf("Value at address stored in ptr: %d\\n", *ptr);

    return 0;
}
            </code></pre>
            <p><strong>Explanation:</strong></p>
            <ul>
                <li><code>int num = 10;</code> → Declares an integer variable.</li>
                <li><code>int *ptr = &num;</code> → Pointer <code>ptr</code> stores the address of <code>num</code>.</li>
                <li><code>*ptr</code> (dereferencing) accesses the value stored at that address.</li>
            </ul>
        `,
        functions: `
            <h2>Functions in C</h2>
            <p>A function in C is a block of code designed to perform a specific task.</p>
            <pre><code>
#include &lt;stdio.h&gt;

// Function definition
void greet() {
    printf("Hello, welcome to C programming!\\n");
}

int main() {
    greet(); // Function call
    return 0;
}
            </code></pre>
            <p><strong>Explanation:</strong></p>
            <ul>
                <li><code>greet()</code> is a user-defined function.</li>
                <li><code>void</code> means it does not return any value.</li>
                <li>The function is called in <code>main()</code>, which executes the <code>printf()</code>.</li>
            </ul>
        `,
        structures: `
            <h2>Structures in C</h2>
            <p>A structure in C is a user-defined data type that allows grouping multiple related variables of different data types into a single unit.</p>
            
            <h3>Why Use Structures?</h3>
            <ul>
                <li>Groups related data (e.g., student info: name, age, grade).</li>
                <li>Allows easier access and management of complex data.</li>
                <li>Used in real-world applications like databases and file handling.</li>
            </ul>

            <h3>Defining and Using a Structure</h3>
            <pre><code>
#include &lt;stdio.h&gt;

// Defining a structure
struct Student {
    char name[50];
    int age;
    float grade;
};

int main() {
    // Declaring a structure variable
    struct Student s1 = {"Ian", 20, 95.5};

    // Accessing structure members
    printf("Name: %s\\n", s1.name);
    printf("Age: %d\\n", s1.age);
    printf("Grade: %.2f\\n", s1.grade);

    return 0;
}
            </code></pre>

            <h3>🔹 Explanation:</h3>
            <ul>
                <li><code>struct Student</code> defines a structure with <code>name</code>, <code>age</code>, and <code>grade</code> fields.</li>
                <li><code>s1</code> is a structure variable initialized with values.</li>
                <li>We use dot notation (<code>s1.name</code>, <code>s1.age</code>, etc.) to access members.</li>
            </ul>
        `,
        file_handling: `
            <h2>File Handling in C</h2>
            <p>File handling in C allows reading from and writing to files, enabling data storage beyond program execution.</p>

            <h3>Types of File Operations</h3>
            <ol>
                <li>✅ Create/Open a file (<code>fopen()</code>)</li>
                <li>✅ Write to a file (<code>fprintf()</code>, <code>fputc()</code>, <code>fputs()</code>)</li>
                <li>✅ Read from a file (<code>fscanf()</code>, <code>fgetc()</code>, <code>fgets()</code>)</li>
                <li>✅ Close a file (<code>fclose()</code>)</li>
            </ol>

            <h3>1️⃣ Writing to a File</h3>
            <pre><code>
#include &lt;stdio.h&gt;

int main() {
    FILE *file = fopen("data.txt", "w"); // Open file in write mode

    if (file == NULL) {
        printf("Error opening file!\\n");
        return 1;
    }

    fprintf(file, "Name: Ian\\nAge: 20\\n"); // Write formatted text
    fclose(file); // Close file

    printf("Data written successfully!\\n");
    return 0;
}
            </code></pre>

            <h3>🔹 Explanation:</h3>
            <ul>
                <li><code>fopen("data.txt", "w")</code> creates a file (or overwrites it if it exists).</li>
                <li><code>fprintf(file, ...)</code> writes formatted text to the file.</li>
                <li><code>fclose(file)</code> closes the file to prevent data corruption.</li>
            </ul>

            <h3>✅ Output in <code>data.txt</code>:</h3>
            <pre><code>
Name: Ian
Age: 20
            </code></pre>
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
