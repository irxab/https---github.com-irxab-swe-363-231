
const apiUrl = 'https://dummyproducts-api.herokuapp.com/posts';

const productList = document.getElementById('product-list');

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((product) => {
      const listItem = document.createElement('li');
      listItem.textContent = product.title;
      productList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });


  const canvas = document.getElementById('signature-canvas');
  const context = canvas.getContext('2d');
  const clearButton = document.getElementById('clear-button');
  
  let isDrawing = false;
  
  canvas.addEventListener('mousedown', () => {
    isDrawing = true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top);
  });
  
  canvas.addEventListener('mousemove', () => {
    if (isDrawing) {
      context.lineTo(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top);
      context.stroke();
    }
  });
  
  canvas.addEventListener('mouseup', () => {
    isDrawing = false;
  });
  
  clearButton.addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });
//trigger the animation?
let inactivityTimer;

const startScreensaver = () => {
  

  inactivityTimer = setTimeout(() => {
  }, 60000); 
};

document.addEventListener('mousemove', () => {
  // Reset the inactivity timer
  clearTimeout(inactivityTimer);
  startScreensaver();
});

startScreensaver(); 

//js4
class WebsiteObject {
    constructor(title, description, url) {
      this.title = title;
      this.description = description;
      this.url = url;
    }
  }
  
  // Create a list of objects from my mind 
  const article1 = new WebsiteObject('Article 1', 'This is the first article', 'article1.html');
  const product1 = new WebsiteObject('Product 1', 'This is the first product', 'product1.html');
  const lesson1 = new WebsiteObject('Lesson 1', 'This is the first lesson', 'lesson1.html');
  const resource1 = new WebsiteObject('Resource 1', 'This is the first resource', 'resource1.html');
  
  const objectsList = [article1, product1, lesson1, resource1];
  

// Example usingepressions and nested

function calculateTotalPrice(itemPrice, quantity) {
    return itemPrice * quantity;
  }
  
  function displayItemInfo(itemName, itemPrice, itemDescription) {
    const total = calculateTotalPrice(itemPrice, 2);
    console.log(`Name: ${itemName}`);
    console.log(`Description: ${itemDescription}`);
    console.log(`Price: $${itemPrice}`);
    console.log(`Total: $${total}`);
  }
  
  const calculateTotalPrice = (itemPrice, quantity) => itemPrice * quantity;
  
  const displayItemInfo = (itemName, itemPrice, itemDescription) => {
    const total = calculateTotalPrice(itemPrice, 2);
    console.log(`Name: ${itemName}`);
    console.log(`Description: ${itemDescription}`);
    console.log(`Price: $${itemPrice}`);
    console.log(`Total: $${total}`);
  };
  

  
  // Refactored code using filter and reduce for the list that been commented in index.html
  const items = [
    { name: 'Ipad pro max everything', properties: '1TB', color: 'Black', price: 2000 },
    { name: 'Iphone 14', properties: '1TB', color: 'Dark ocean blue', price: 950 },
    { name: 'Imac', properties: '1TB', color: 'Yellow', price: 1600 },
  ];
  
  const expensiveItems = items.filter((item) => item.price > 1000);
  const totalExpensiveItemsPrice = expensiveItems.reduce((total, item) => total + item.price, 0);
  