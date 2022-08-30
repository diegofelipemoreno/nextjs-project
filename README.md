This is a [Next.js](https://nextjs.org/) project for the The Rick and Morty API.

Here you can check the production site: [https://nextjs-api-project.vercel.app/](https://nextjs-api-project.vercel.app/)

![alt text](https://github.com/diegofelipemoreno/nextjs-project/blob/main/cover.jpg?raw=true)

## Getting Started

```bash
Node version v16.13.2

# Install dependencies
npm install
# or
yarn install

# Run in development mode
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Tech Requirements
- The Project was developed with the ReactJs and Redux.
- SASS style preprocessor with BEM pattern.
- The website is responsive in mobile and desktop viewport.
- Nextjs for the API logic and page side .rendering.

## SASS
The structure to create the components styling is in the folders ./styles, where you can find 3 folder:
- ./styles/common: You can find all the globals, grid, colors, utils that are across al the components/site.
- ./styles/components: You can find all the styles of the components by name. E.g Button.module.scss 
_ ./styles/views: Styles to build the views or pages that are made with the components. 
   This styles only affect the component's layout, they are not meant to overwrite them.

All the styling is designing with first mobile and BEM pattern.

![alt text](https://github.com/diegofelipemoreno/nextjs-project/blob/main/styles.jpg?raw=true)

## CSS Grid
The website counts with a grid system that allows to fit the components and views in different screens sizes in accurate way.
- Desktop 12 columns, 32px margin
- Mobile 4 columns, 16px
You can check the file ./styles/common/_grid.scss to check the specific configuration.

![alt text](https://github.com/diegofelipemoreno/nextjs-project/blob/main/grid-desktop.jpg?raw=true)
![alt text](https://github.com/diegofelipemoreno/nextjs-project/blob/main/grid-mobile.jpg?raw=true)

## Components
On ./components folder you can find the components that can be reuse in other places of the website, so they
have parameters in order to be agnostic and flexible.

## Model data
All the data that are injected on the components, views, pages can be found on the ./constants.js. So any website content
can be easily found and edited. Also a possible l10n will be easier.

## State
The website uses a state where the useAuth, search results and current user data can be found and also share for all the 
website if is needed.
Redux structure:
./store
./reducers/*

![alt text](https://github.com/diegofelipemoreno/nextjs-project/blob/main/state.jpg?raw=true)

## API Routes
To work and secure the Rick Morty API and also develop the Login and Authentication the website was develop with NEXTJS with the module next-auth.

On the files ./pages/api/**:
- auth: Develop with next-auth tool to set the logic to login only for Google accounts. 
- character: Endpoint to search any character.
I use Environment Variables on the server to the API access also to save the secret keys for the google login authorization logic.
.env.local

On the character page the search is made by client-side data fetching cuz the content will be updated for each search.
On the episodes page for other hands is made with getStaticPaths, thanks the api returns the episodes in pages so I can make this request from the server and each episode/[page] can render the currents episodes, so it will have a good performance.
Right now there are 3 pages for episodes. ./episode/1, ./episode/2 ...
