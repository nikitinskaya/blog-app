# blog-app

A simple MEVN app with a REST API.
MongoDB provided by Heroku's mLab addon.

Take a look: [immense-headland-23951.herokuapp.com](https://immense-headland-23951.herokuapp.com/)

## Project setup

1. Clone & install dependencies
```
yarn
```

2. Compile and hot-reload frontend for development
```
yarn serve
```

3. Compile and minify frontend for production
```
yarn build
```

## Heroku deployment
```
heroku create
heroku addons:create mongolab
heroku push
heroku open
```

Please provide your heroku app url to API service as `BASE_URL` in `src/services/Api.js`.
