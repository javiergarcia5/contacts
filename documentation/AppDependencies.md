# App dependencies
All the dependencies of the project are included into the package.json files.

All of them will be added by running 

> `npm i`.

Note that we have dependencies for both, admin and api, so that `npm i` command should be run in both folders ./contacts-admin and ./contacts-api .

<br>

## Admin dependencies
dependencies:

    "escape-string-regexp": "^1.0.5",
    "form-serialize": "^0.7.2",
    "prop-types": "^15.5.10",
    "react": "^15.6.1",
    "react-dom": "^15.6.1",
    "react-router-dom": "^4.1.1",
    "sort-by": "^1.2.0"

devDependencies:

    "react-scripts": "^1.0.7"

<br>

## Back dependencies
dependencies:

    "body-parser": "^1.18.3",
    "clone": "^2.1.2",
    "cors": "^2.8.5",
    "eb": "0.0.1",
    "express": "^4.16.4",
    "nodemon": "^2.0.7",
    "pg": "^8.5.1",
    "sequelize": "^6.12.0-beta.2"

devDependencies:

    "jasmine": "^3.10.0",