# hacktivpresss

### Desc
Dibuat sebagai bagian dari pembelajaran di Hacktiv8.
App ini dibuat menggunakan _Express_ sebagai _framework_, dan _MongoDB_ untuk _database_.

### Cara penggunaan
* `npm install` di direktori `client` dan `server`
* `npm run dev` (client
* `nodemon app.js` atau `node app.js` (server)

## API ROUTES
|***Route***|***HTTP***|***Desc***|
|----|:----:|----|
|`/user`|POST|Sign up|
|`/signin`|POST|Sign in|
|`/articles`|GET|View all articles|
|`/articles/:id`|GET|View article by article ID|
|`/author/:authorname`|GET|View article by article's author|
|`/category/:category`|GET|View article by article's category|
|`/articles`|POST|Create new article|
|`/articles/:id`|PUT|Edit article|
|`/articles/:id`|DELETE|Delete article|
