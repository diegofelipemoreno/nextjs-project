import profilePic from './public/images/profile.jpg'

export const CHARACTER_FORM = {
    ID: "characterSearch",
    TITLE: "Character form",
    FIELDS: {
        character: {
            id: "character",
            label: "Search character",
            value: "",
            required: true,
            errorMsg: "This field is required"
        }
    }
};

export const HOME_PAGE_TITLE = 'Home';
export const CHARACTER_PAGE_TITLE = 'Character';
export const EPISODE_PAGE_TITLE = 'Episode';
export const FOOTER_CONTENT = 'Rick and Morty Api Test 2022';
export const NO_RESULTS_TEXT = 'No results';
export const HEADER_TITLE = 'Rick and Morty';
export const NOT_SIGN_TEXT = 'You are not signed in';
export const SIGN_IN = 'Sign in';
export const SIGN_OUT = 'Sign out';

export const NAV_CONTENT = {
    HOME: {
        label: 'Home',
        path: '/'
    },
    CHARACTER: {
     label: 'Character',
     path: '/character'
    },
    EPISODE: {
        label: 'Episode',
        path: '/episode'
    }
};

export const HOME_CONTENT = {
    IMAGE: profilePic,
    TEXT: `<h3> HOME - What is this?</h3> <p>The Rick and Morty API is a REST(ish) and GraphQL API based on the television show Rick and Morty. You will have access to about hundreds of characters, images, locations and episodes. The Rick and Morty API is filled with canonical information as seen on the TV show.</p>
    <h3> Who are you?</h3>
    <p>We are Axel Fuhrmann, a guy who likes to develop things and Talita, the Rick and Morty data scientist and hardcore fan.</p>
    <h3>Why did you build this?</h3>
    <p>Because we were really interested in the idea of writing an open source project and also because Rick and Morty is our favorite show at that moment, so why not?</p>`
}

export const ACCESS_DENIED_CONTENT = {
    TITLE: 'Access Denied',
    TEXT: 'You must be signed in to view this page'
}