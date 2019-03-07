# Project Name

> This is the reviews section of a project to recreate the look of a restaurant page from OpenTable.com

## Related Projects

- https://github.com/br0kentable/Review-Module
- https://github.com/br0kentable/Restaurant_details
- https://github.com/br0kentable/Photo-Gallery-Module
- https://github.com/br0kentable/Ryan_Proxy
- https://github.com/br0kentable/Eric_Proxy


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)

## Usage

- Ensure that MySQL is running

#### Create a .env file where: 

| Variable      | Value                           |
| ------------- | ------------------------------- |
| RDS_USERNAME  | your MySQL login username       |
| RDS_PASSWORD  | your MySQL login password       |
| RDS_HOSTNAME  | localhost                       |
| RDS_PORT      | your MySQL port (default: 3306) |   


#### Install dependencies

- Also creates the appropriate database 

```
npm install -g webpack
npm install
```

##### Create Webpack bundle
npm run build         

- Seed database with dummy data with:
`npm run seed`

- Start server with:
`npm start`

- Open browser at http://localhost:3000/

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- MySQL 5.7.24

