# Contacts App
This is a demo app user for the final project of the last module (Deployment Process) of the Udacity's FullStack Javascript Nanodegree Program.

In this project, we had to take a newly developed full stack application and deploy it to a cloud service provider so that it is available to customers. This application contains the main components of a 3-tier full stack application (UI, API, and Database).

The final UI is available at http://randomudacity123.s3-website-us-east-1.amazonaws.com/

The source code is available at https://github.com/javiergarcia5/contacts

<br>

## Infrastructure description
We have divided our contacts application in 3 parts: admin, api and database.

### Admin
On this part we store the code for the client side.  
We are running this into an AWS S3 bucket.  
The data shown at the app is fetch from the api.

### Api
It serves the contacts data to the Admin. 
This code is running at Elastic Beanstalk.
It reads the data directly from the database.

### Database
We are storing all our app data into a postgres DB.  
This database is running at the Amazon RDS service.

<br>

## App dependencies
All the dependencies of the project are included into the package.json files.

All of them will be added by running 

> `npm i`.

Note that we have dependencies for both, admin and api, so that `npm i` command should be run in both folders ./contacts-admin and ./contacts-api .

<br>

### Admin dependencies
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

### Back dependencies
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

<br>

## Pipeline Process
For the CI deployment we are using the CircleCI platform.

We have connected it to our GitHub project, so every time we push new changes to the master branch, it automatically run all the pipelines jobs.

We are using it to deploy both, the admin side and the api.

All the logic of this pipeline is included into the .circleci/config.yml script.

<br>

### Workflow
We are using a single job into the circleci workflow to deploy both admin and api.

We have called this job 'deploy'.

This job is divided into multiple steps:
- Front-End Install
- Back-End Install
- Front-End Build
- Back-End Build
- Front-End Test
- Back-End Test
- Front-End Deploy
- Back-End Deploy

All these steps are run on that order.

<br>

### Dependencies
We required to add the following 'orbs' into the circleci config.yaml
- node: circleci/node@4.1.0
- aws-cli: circleci/aws-cli@1.3.1
- eb: circleci/aws-elastic-beanstalk@2.0.1
