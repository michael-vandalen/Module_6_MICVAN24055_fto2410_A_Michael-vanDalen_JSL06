// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
  Starters: ["Garlic Bread", "Bruschetta"],
  MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
  Desserts: ["Tiramisu", "Cheesecake"],
};

// Function to display menu items by category
function displayMenuItems(menu) {
  // Get the menu container element from the HTML
  const menuContainer = document.getElementById("menu");
  // Loop through each category and its items in the menu object
  for (const category in menu) {
    const categoryElement = document.createElement("h2");
    categoryElement.textContent = category;
    menuContainer.appendChild(categoryElement);
    // Create an element to represent a list of items
    const itemsList = document.createElement("ul");

    // Loop through the items in the category and create list items
    menu[category].forEach((item) => {
      // Create a list item element
      const listItem = document.createElement("li");
      // Set the text content of the list item element to the item name
      listItem.textContent = item;
      // Attach a click event listener to the list item to add it to the order
      listItem.addEventListener("click", () => addToOrder(item));
      // Append the list item to the list of items
      itemsList.appendChild(listItem);
    });
    // Append a list of items element to the menu container
    menuContainer.appendChild(itemsList);
  }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
  // Get the order items list and the order total element from the HTML
  const orderItems = document.getElementById("order-items");
  // Create a list item for the order
  const listItem = document.createElement("li");
  // Set the text content of the list item to the item name
  listItem.textContent = itemName;
  // Append the list item to the order items list
  orderItems.appendChild(listItem);
  // Calculate and update the total price
  const totalPrice = calculateTotalPrice();
  // Update the text content of the order total element with the new total
  const orderTotal = document.getElementById("order-total");
  orderTotal.textContent = `${totalPrice}`;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
  // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
