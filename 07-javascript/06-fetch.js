const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given

  const loadingElement = document.getElementById('loading');
  const booksElement = document.getElementById('books');

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.group('Fetch All Books - Promise Implementation');
      console.log('Data', data); // array of 10 objects
      const list = document.createElement('ul');
      list.className = 'book-list'; // Optional: add a class for styling

      data.forEach((item) => {
        console.log(
          `${item.name} - ${item.authors[0]} - ${item.numberOfPages} pages`
        );

        // Create a list item for each book
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.authors[0]} - ${item.numberOfPages} pages`;
        listItem.className = 'book-item'; // Optional: add a class for styling
        list.appendChild(listItem);
      });

      // Append the list to the books element
      booksElement.appendChild(list);
      console.groupEnd();
    })
    .catch((error) => console.error(error))
    .finally(() => {
      console.log('Fetch All Books - Promise Implementation - finally block');
      // Hide loading GIF
      loadingElement.style.display = 'none';
    });

};

fetchData(url);