## Authentication

The APIs implement an **Email-Code-Token** mechanism for authentication using [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken).

1. Prompt the user for their **Email Address** and call POST /user/code. The endpoint will send a **Code** to the email address and respond with status=201.
  ```bash
    curl -d "email=me@domain.com" \
    -H "Content-Type: application/x-www-form-urlencoded" \
    -X POST https://docs-as-code.herokuapp.com/user/code
  ```

1. Prompt the user for the **Code** and their **Email**. Send both to GET /user/token. The endpoint will respond with a **Token** and status=200.
  ```bash
    curl -H "Accept:application/json" \
    -X GET "https://docs-as-code.herokuapp.com/user/token?email=me@mydomain.com&code=123456" \
    | json_pp
  ```

The **Token** must be used to authenticate all other endpoints.

Try the **Email-Code-Token** mechanism using Insomnia. See the [Insomnia](/#Insomnia) section of this guide for more information.

## Base URL

The Heroku base url for all API endpoint calls.

- https\://docs-as-code.herokuapp.com

## Accept Header

Your requests can ask for data returned as **JSON or XML**. The APIs will return JSON by default if the **Accept** header is not sent.

<!-- tabs:start -->

#### **JSON**

```bash
# Here no Accept header is sent.
# The server will send application/json by default.
curl -d "email=me@domain.com" \
-H "Content-Type: application/x-www-form-urlencoded" \
-X POST https://docs-as-code.herokuapp.com/user/code
```

#### **XML**

```bash
curl -d "email=me@domain.com" \
-H "Content-Type: application/x-www-form-urlencoded" \
-H "Accept:application/xml" \
-X POST https://docs-as-code.herokuapp.com/user/code 
```

<!-- tabs:end -->

## Try It

You can execute the APIs from within this guide. All you need is a token and you can get that here as well. Each API has a button that allows you to execute it.

##### Get That Token

Getting a token is a two step process.

1. Go to [Create a Code](APIs/users.md?id=create-a-code).
1. Click the **POST** button > Enter your **Email Address**.
1. A code is sent to your email, you will need it to continue.
1. Go to [Get a Token](APIs/users.md?id=get-a-token).
1. Click the **GET** button > Enter your **Code** > Enter your **Email Address**.

Your all set. Now you can run all other APIs with the token you received. The token has been stored in the browser's LocalStorage.
