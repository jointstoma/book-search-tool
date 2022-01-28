# Book Search Tool App

This project was created by Tao @2022-01-27
(https://github.com/jointstoma/book-search-tool).

Published here: http://tao.gforms.org/

## Instruction

This app accepts a title as a parameter from user. The app will return book results with the following information:

* Title
* Book Cover
* Author
* Published Date

The application can also sort results according to the selected options:

* Sort results alphabetically by title
* Sort results by more recently published

## Technical questions

1. How long did you spend on the coding assignment?


     2-3 evenings. Roughly 6hrs in total(no time to test).


2. What was the most useful feature that was added to the latest version of your chosen language? Please include a
   snippet of code that shows how you've used it.


     Array methods such as map, filter, sort implemented in ES2015.

     eg:searchedBooks = searchedBooks.filter(book => !!book.isbn && !!book.published_date)

3. How would you track down a performance issue in production? Have you ever had to do this?


      Run app and use tools (lighthouse) implemeted in the brower where you can get info on the performance/potential issues.
      Meanwhile, once you nail down to specific codes (function), print the timestamp also helps to test the performance.

      Yes, when the performance is really bad, you have to solve such issue to make your app run smoothly. Somethimes, you
      have to sacrifice the cool effects for a better performance.

4. How would you improve the API that you just used?


      The API allows user to query books on inputing a name. However, I found the data structure returned is quite
      disorganized, eg: results are often redundant and sometimes missing. I would rebuild/reorganize the data structure.
      Meanwhile, documentation needs to be maintained and updated.

5. Please describe yourself using correctly formatted JSON.

```json
{
  "name": "Tao Jiang",
  "name-for-short": "JT",
  "open-to-work": true,
  "key-skills": [
    "HTML3",
    "CSS3",
    "Javascript",
    "Reactjs/Redux/Hook",
    "Nodejs"
  ],
  "contacts": {
    "email": "taoj2021@gmail.com",
    "mobile": "6472835687",
    "address": "Toronto, Ontario, Canada"
  }
}
```


