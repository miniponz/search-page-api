Search Page API
===

Build a searchable, pageable explorer for an API of your choice. 

## Process Requirements

1. Commit regularly (at least every 15-20 minutes). Demonstrate your thinking through regular incremental commits. Solo builds without an incremental commit history will not pass.
2. TDD every function that does not directly manipulate the DOM; template functions, query write/read, make search api url. If these functions are not driven by tests (demonstrated by commit history) the build will not pass.

## API

Pick an API that:

1. Has CORS enabled
2. Accepts a search/query term
3. Supports paging

Setlist.fm API!

API URL: https://api.setlist.fm/docs/1.0/ui/swagger.json
API Key: 3db2f63f-28e5-4d34-84f7-763e7c338be6
I will need a header when I make request to the server thing.


## Pages

This will be a single page app. It offers a simple form with one text input and a 
button for the user to enter their search term. It should also have a paging control for advancing through the pages

## Using the API

TDD a function that takes the search and page inputs and returns the correct URL for your API. Consider using 
the built-in `URL` class to create and format the url. If search term is required and is missing, return an empty
string so you can detect _not_ to run the search.

## Store search and page in the URL
 
Using the `URLSearchParams` built in class, format a query string, but store it in `window.location.hash` (this will keep 
our page from refreshing!). You can use the function directly from the search and paging components (no callback needed!)

## Load from hash

In `index.js` subscribe to the window `hashChange` event and call a function that runs the API based on the hash values. You should 
call this function on page load as well.
