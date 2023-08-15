let gridAmount = 0 

const promptButton = document.getElementById("promptButton");
promptButton.addEventListener("click", () => {
    
    gridAmount = prompt("How big do you want your painting square? (Maximum 100)");
    if (gridAmount > 0<= 100) {
        createGrid(gridAmount, gridAmount);
        console.log(gridAmount)
    }
});
// Function for the toggle button
function toggleButton() {
    var toggle = document.getElementById("toggle");
    var slider = document.querySelector(".slider");
    
    if (toggle.checked) {
      slider.style.transform = "translateX(5px)";
      document.querySelector(".toggle-btn").classList.add("on");
    } else {
      slider.style.transform = "translateX(0)";
      document.querySelector(".toggle-btn").classList.remove("on");
      createGrid(gridAmount,gridAmount)
    }
  }

// Function to create the grid
function createGrid(rows, cols) {
    const container = document.getElementById("container");
    container.replaceChildren();
    container.classList.add("container"); // Apply container class for styling
    var totalWidth = cols * 6; // Adjust the cell width as needed
    container.style.width = `${totalWidth}px`;
    container.style.height = `${totalWidth}px`;
    console.log(cols)
    console.log(rows)

    for (let i = 0; i < rows * cols; i++) {
        // Create a new cell element
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);

        // Add event listeners for hover effect
        cell.addEventListener("mouseover", () => {
             
                cell.style.backgroundColor = getRandomColor();
            
        });

        cell.addEventListener("mouseout", () => {
            if (!document.querySelector(".toggle-btn").classList.contains("on")) {
                cell.style.backgroundColor = ""; // Reset background color on mouseout
            }
        });
    }
}




// Function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

