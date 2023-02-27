# `Melody app`

# Contents

    1. Description
    
    3. Run

    4. Directory structure/project

    5. Packages

    6. Style

    7. Debugge

    8. Preview of the project
    
    9. Screenshot 

        * Mobile view
        
        * Desktop view
    
# Description

this App is a sample of a music site on which users could create their own playlist.

# Agenda:
    1. After registering, the user needs to log in to the app

    2. A list of music can be found on the home page

    3. On the homepage, a search bar should be available to find music

    4. the user is able to create a new playlist

    5. Create a playlists page

    6. the user is able to change the playlist's label or cover image 

    7. the user could add or remove music from the playlist

    8. the user could delete the playlist

    9. the user is able to visit all music inside the playlist
    
    10. The user can download music from the playlist

# Run

#### set API URL in the Local Environment Variables

In the project directory, you should create a new `.env.local` and 
add Server address for connection to backend, called `REACT_APP_APPLICATION_API_URL` then
you can run:

#### npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.


# Directory structure/project

React doesn’t have opinions on how you put files into folders. there are a few common approaches popular in the ecosystem:

- Grouping by feature or routes
- Grouping by file type

**Colocation**: it is a good idea to keep files that often change together close to each other. This principle is called “Colocation”.

In this project I used **Group by feature or routes**. In this way all of file related a component (sass, test, …) is in the same folder.

# Packages

These packages are installed in this project:

- react-router-dom

- tanstack

- react-intersection-observer

- sass

- bootstrap

- Formik

- Yup

- axios

- js-cookie

# Style

2 type of styles were used in the project:

- **Bootstrap**
- **SASS**

# Debugge
I used  `Eslint` and `@tanstack/react-query-devtools` in the project. 

# State management

2 type of state management used in the project:

    - useContext
    
    - TanStack _React Query(v4)_

# Preview of the project

This project have 4 pages:

    - LOGIN && REGISTER
    
    - HOME

    - PLAYLIST

    - PLAYLIST DETAIL

# Screenshot
    
- **Desktop view**
    
    - login && Reagistr page

    ![login && Reagistr page](/public/assets/desktop1.png)

    - Home page
    
    ![Home page](/public/assets/desktop2.png)

    - Home page: modal for add song to playlist

    ![Home page: modal for add song to playlist](/public/assets/desktop4.png)

    - Home page: modal for create new playlist
    
    ![Home page: modal for create new playlist](/public/assets/desktop5.png)

    - Playlits page: when it is empty!
    
    ![Playlits page: when it is empty!](/public/assets/desktop6.png)
    
    - Playlits page
    
    ![Playlits page](/public/assets/desktop7.png)
    
    - Playlits detail page
    
    ![Playlits detail page](/public/assets/desktop3.png)

- **Mobile view**

    ![App Screenshot](/public/assets/mobile%20preview.pdf)