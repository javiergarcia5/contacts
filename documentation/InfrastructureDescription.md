# Infrastructure description
We have divided our contacts application in 3 parts: admin, api and database.

This app is available at http://randomudacity123.s3-website-us-east-1.amazonaws.com/ .

## Admin
On this part we store the code for the client side.  
We are running this into an AWS S3 bucket.  
The data shown at the app is fetch from the api.

## Api
It serves the contacts data to the Admin. 
This code is running at Elastic Beanstalk.
It reads the data directly from the database.

## Database
We are storing all our app data into a postgres DB.  
This database is running at the Amazon RDS service.