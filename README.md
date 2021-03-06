# PharmaForesight

[![Netlify Status](https://api.netlify.com/api/v1/badges/e8aa8763-d0a3-4f55-a4d3-ded11416e490/deploy-status)](https://app.netlify.com/sites/trusting-mcnulty-7ef29d/deploys)

React app front end for the PharmaForesight API.

[On the web here.](http://pharma-foresight.surge.sh/)

## Running it locally

Make sure that the `REACT_APP_API_HOST` env variable is set to the location of the API server.

1. Clone repo and `npm i`
2. Create a `.env` file with the command `cp .env.example .env`
3. Set the env variables to their actual values
4. `npm run dev`

## Running on the web

Suitable for any static file host, like Netlify or Surge.

Make sure that the `npm run build` command runs first, and the root is the `/build` folder.

[More info](https://facebook.github.io/create-react-app/docs/deployment)


## Password protection

There's a dormant `<PasswordGate/>` component that can enact very basic, insecure password protection using localstorage. To password-protect the app:

1. uncomment `<PasswordGate/>` from `src/index.js`
2. make sure the `REACT_APP_PASSWORD` environment variable is set.

This will guard against only the most basic access attempts. The password is not encrypted and is stored in plain text on the user's browser. *Do not rely on for actual security.*