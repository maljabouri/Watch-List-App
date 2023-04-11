# Movie Watch List React App - GA Project 2

You can find my deployed project [here](https://maljabouri.github.io/Watch-List-App/)

## Project Description

The goal of this project was to provide an App in react that would allow users to create a list 
of movies that they want to watch/rewatch. 

It was built in React after 1 week of learning how to use the library.

## Brief

### Technical Requirements
The user must be able to:
- Add a new item to a list
- Mark the item as complete/favorite/(watch, read, listen) later/flag/etc
- Edit an item from a list
- Remove an item from a list
- Clear/delete all items
- Clear/delete only marked items
- Fetch data from at least one 3rd party API using Axios or fetch.
- Make frequent Git commits with descriptive messages, explaining your commit.


## User Stories

As a user I should be able to: 

- search for a film and add it to the list
- have some information about each film displayed
- remove films from my list
- clear my whole list
- mark films as seen

### Overview & Concept

The Watch List App is a React-based web application that uses the OMDb API to search for movies and TV shows. Users can search for a movie or TV show by entering a keyword in the search bar. The app then returns a list of matching results. Users can then click on a result to view additional details about the selected movie or TV show, and choose to add it to their watch list.

## Technologies Used

 - React
 - JavaScript
 - CSS
 - OMDb API

## Build Process

### Planning

I started off by making a wireframe for how I wanted my app to look, including some features I had hoped
to implement. 

![wireframe](https://i.imgur.com/dFzfWK8.png)

I coupled this with an initial plan of how to structure my components.

![reactplan1](https://i.imgur.com/aAoNApt.png)

### Approach Taken

The Watch List App was built using React, with a focus on modular components and clean, reusable code. The main code files were located in the "src" folder, and the app was structured using a container/component architecture. This allowed for state and props to be passed between components as needed.

To handle the issue of the API search returning multiple results, the "handleSearch" function in the "Search" component was updated to take only the first result from the API response. This was achieved using the "array.slice()" method to extract the first item from the array of search results returned by the API. The resulting movie or TV show object was then mapped into the app's state and rendered as a result card using the "WatchList" component.

![snippet1](https://i.imgur.com/YsriyT8.png)

I then noticed my API wasn't returning all the values that were available in postman, that I had planned to use for my App. My solution for this was to fetch from the API again, using the unique identifier imdbID returned for the film and then fetching the specific properties I wanted for my films and remapping them into the state I would use to render my list.

To implement the app's watch list feature, a "WatchList" component was created to display a list of all the movies and TV shows that the user has added. This component renders individual "MovieListDetails" components for each item in the watch list. 

![snippet2](https://i.imgur.com/I8aKTUv.png)

To remove a movie or TV show from the watch list, the user clicks on the "remove" button on the "EditList" component. This button triggers the "removeFilm" function, which removes the selected movie or TV show object from the app's state.

![snippet3](https://i.imgur.com/MmFO7nF.png)

During development, the app's structure was restructured midway through to a container/component architecture. This allowed for cleaner, reusable code and more modular components. The new structure also made it easier to pass state and props between components, and made the app's logic easier to reason about.

![reactplan2](https://i.imgur.com/i1BqhzY.png)

Overall, the approach taken for the Watch List App was to build a clean, modular, and reusable codebase using React. The app's features were implemented using the appropriate React components and programming patterns, and complex issues were addressed through a thoughtful and systematic approach.


### Bugs, Blockers & Wins

The main blockers during development included the issue of API search returning multiple results, the API not returning all values I wanted for the films, and the restructure of the app's structure midway through. The biggest wins were overcoming these complications using creative problem solving highlighted above (although in hindsight there were probably better approaches). 


### Future Features + Key Learnings

Future features for the Watch List App include implementing authentication, allowing users to create an account and save their watch list across sessions. Key learnings from the development process included working with APIs, structuring modular components, and troubleshooting and debugging complex issues.

