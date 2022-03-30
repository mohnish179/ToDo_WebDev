Explanation

General
The main html is written in index.html, and the javascript is written in a separate file script.js, and the styles are in style.css.

CSS
The styles are mostly applied using class selectors as they look clean and we can avoid confusion. The html elements are named aptly to avoid confusion when selecting using.

Modal Logic
Modal is what appears on top the screen when add new todo button is pressed. This is 
Implemented in js and css by toggling display:none property with display flex and position fixed. An onclick listener is placed on the home page that closes modal if clicked.

Task add
The information in required fields are extracted and added to the todo list global variable ad is then saved to local storage.

Task storage
The tasks are stored in localstorage, i.e the browser data using localstorage.getItem and localstorage.setItem, so it persists on refreshing.

Task display logic
Every time the page is opened it checks local storage for tasks and adds them using the template code for a task that’s in function called ‘card’, by replacing the inside information with current card information and then its added to the page.

Task complete logic
On complete the code just filters out the list to exclude the card with id given as input and then stores them in local storage and redisplays the cards.
