# File System

File management api made with node.js

## Installation

Open a terminal, go to the project's root directory and run:

```
    yarn install
```

More info: [yarn install command](https://classic.yarnpkg.com/en/docs/cli/install/)

## Setup your enviroment

- Create a .env file in the root directory of the project
- Replace the credentials placeholders with the values provided by the project lead
  Collaborating with the project

```
PORT=3000

DB_URL=mongodb+srv://<USERNAME>:<PASSWORD>@<LINKDB>/<DBNAME>

AWS_BUCKET = YOUR AWS BUCKET NAME

AWS_ACCESS_KEY_ID = YOUR AWS BUKET KEY ID

AWS_SECRET_ACCESS_KEY= YOUR AWS BUKET ACCESS KEY

UNSPLASH_KEY = YOUR UNSPLASH KEY

SECRET= YOUR SECRET WORD

BASE_URL= BASE URL

EMAIL_USER= YOUR GMAIL EMAIL

EMAIL_PASSWORD= YOUR PASSWORD
```

## Getting Started

<br>

### Get Files

### Request

<br>

```
GET /api/v1/files
```

Require Bearer Token

### Response

```
{
    status: "OK",
    data: [
        {
            name: string,
            type: string,
            key: string,
            user: string,
            id: string
        }
    ]
}
```

<br>

### Create and Upload File

### Request

<br>

```
POST /api/v1/files
```

Require Bearer Token

Required send file as file

### Response

```
{
    status: "OK",
    data: {
        name: string,
        type: string,
        key: string,
        user: string,
        id: string
    }
}
```

<br>

### Download File

### Request

<br>

```
GET /api/v1/files/download/:fileKey
```

Require Bearer Token

### Response

It will respond with the file to download

<br>

### Change Name

### Request

<br>

```
GET /api/v1/files/download/:fileKey
```

Require Bearer Token

### Response

It will respond with the file to download

<br>

### Create User / Sign up

### Request

<br>

```
POST /api/v1/users
```

#### Path Variables

```
{
    name: string,
    email: string,
    password: string
}
```

### Response

```
{
    status: "OK",
    data: {
        name: string,
        email: string,
        files: Array,
}
```

<br>

### Login

### Request

<br>

```
POST /api/v1/auth/login
```

#### Path Variables

```
{
    email: string,
    password: string
}
```

### Response

```
{
    status: "OK",
    data: {
        name: string,
        email: string,
        token: string
}
```

<br>

### Send Password Reset Email

### Request

<br>

```
POST /api/v1/auth/password-reset
```

#### Path Variables

```
{
    email: string,
}
```

### Response

```
{
    msg: "password reset link sent to your email account"
}
```

<br>

### Reset Password

### Request

<br>

```
POST /api/v1/auth/password-reset/:userId/:resetToken
```

#### Path Variables

```
{
    password: string
}
```

### Response

```
{
   msg: "password reset sucessfully."
}
```

<br>

### Search Images Unsplash

### Request

<br>

```
GET /api/v1/images?page=pageNumber&query=wordToSearch
```

### Response

```
{
   status: "OK",
   data: {
    total: number,
    total_pages: number,
    restult: [
        {
            id: string,
            width: number,
            height: number,
            description: string,
            url: string
        }
    ]
   }
}
```

<br>

### Upload Images Unsplash

### Request

<br>

```
POST /api/v1/images
```

Require Bearer Token

#### Path Variables

```
{
    url: string
}
```

### Response

```
{
    status: "OK",
    data: {
        name: string,
        type: string,
        key: string,
        user: string,
        id: string
    }
}
```

<br>
