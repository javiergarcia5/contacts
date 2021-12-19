# Pipeline Process
For the CI deployment we are using the CircleCI platform.

We have connected it to our GitHub project, so every time we push new changes to the master branch, it automatically run all the pipelines jobs.

We are using it to deploy both, the admin side and the api.

All the logic of this pipeline is included into the .circleci/config.yml script.

<br>

## Workflow
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

## Dependencies
We required to add the following 'orbs' into the circleci config.yaml
- node: circleci/node@4.1.0
- aws-cli: circleci/aws-cli@1.3.1
- eb: circleci/aws-elastic-beanstalk@2.0.1