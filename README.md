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

## Build Process

### Planning

I started off by making a wireframe for how I wanted my app to look, including some features I had hoped
to implement. 

![wireframe](https://i.imgur.com/dFzfWK8.png)

I coupled this with an initial plan of how to structure my components.

![reactplan1](https://i.imgur.com/aAoNApt.png)

### Difficulties

The first problem I ran into was my API search was returning multiple results. These results were returned as an array 
of objects.

I initially tried to play around with the React Autocomplete component to render a drop down with all the matching searches
but I was not successful in implenting the feature.

So I decided to instead take only the first result (which from my testing seemed to be the one that most closely matched the search)
and then map it into a state so I could render my list. I then noticed my API wasn't returning all the values that were available
in postman, that I had planned to use for my App. My solution for this was to fetch from the API again, using the unique 
identifier imdbID returned for the film and then fetching the specific properties I wanted for my films and remapping them
into the state I would use to render my list.

![myfunction](https://i.imgur.com/6bDiKcd.png)

I decided to restructure my App halfway through and quickly realised it wasn't going to be an easy fix, however the new 
structure made a lot more sense to me so I dealt with all the debugging to move from my initially planned structure to the
following: 

![reactplan2](https://i.imgur.com/i1BqhzY.png)

## Future Improvements

- Figure out a way to let the user pick from all the returned results.
- Have suggestions based on some combination of values stored in the watch list
- Fix the bug causing every set rating input field to fill in at the same time (move classes around probably)
- Make a proper effort on the CSS for the App(limited due to time constraints). 
- Use routing to have different pages for the App (Favourites/Seen/Unseen/Recommended)