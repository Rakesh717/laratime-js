# laratime-js

Frontend helper for laratime(laravel package)

## Installation

```sh
$ npm i laratime-js
```

## Setup

- import laratime from laratime-js and pass it the Echo instance

```js
// in bootstrap.js
// first create a instance of a echo with correct credentials
import LaraTime from "laratime-js";
window.laratime = new LaraTime(window.Echo);
```

## Usage

- Now you are ready to listen for database changes

```js
window.laratime
  .db("users")
  .on("added", (user) => addUser(user))
  .on("updated", (user) => updateUser(user))
  .on("deleted", (user) => deletesUser(user));
```

- Using laratime-js you can listen to updates of a table using **db(tableName)** and by chaining **on(eventName)** you can listen to different evetnts:
  - added
  - updated
  - deleted
- You can hook a callaback which accepts the added (or updated or deleted) model as the first argument as javascript object.
