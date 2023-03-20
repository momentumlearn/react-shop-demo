# X-Team Project: Cartatonic 🛒 🛒 🛒

For this project you will work in a combined front-end and back-end team to build an e-commerce site which allows users to see products, add products to their cart, and checkout to purchase products.

This marketplace has buyers and sellers, and can be themed (or not) as you like.

Buyers can:

- See all products
- Can add products to their cart
- Can checkout
- See a list of their own past orders
- See all the products from one particular seller
- Leave a review for a product
- Search for products they are interested in

Sellers can:

- Create new products for sale in the marketplace
- Edit their own existing products, including updating inventory quantites and prices
- See a list of all their own products
- Mark their own products as for sale or not for sale, allowing them to have a "draft" product before it is officially listed, or take something off the market
- View orders for their products only, that does not include products from other sellers
- See the questions for their products
- Create answers to questions on their products
- See all the reviews for a specific product

## Back End Requirements

For this project you are building an API with Django and Django REST Framework that returns JSON data for a storefront application. The storefront needs to show a list of products for sale, with data that includes product names, descriptions, image urls, quantity, and price in USD.

Your API should provide token authentication for routes that require it.

You will need to add data to your database programmatically. [Faker](https://faker.readthedocs.io/en/master/) is a useful package for creating data -- it's like [lorem ipsum](https://en.wikipedia.org/wiki/Lorem_ipsum) for your database. You can use Faker in a [custom management command](https://docs.djangoproject.com/en/4.1/howto/custom-management-commands/), a [Django shell script](https://django-extensions.readthedocs.io/en/latest/runscript.html), or directly in the Django shell.

### Functionality

- Have registration and token-based authentication for logging in and logging out.
- Users can be either a buyer or seller, or both. You do NOT need to differentiate between these types of users during registration.
- Allow unauthenticated users to view all products.
- Allow an authenticated user to purchase products in their cart.
    - Purchases cannot be made for products that are out of stock.
    - You do not need to handle payment, but can assume users have a credit card on file.
    - Purchases affect product quantities. You should adjust the quantity of a product when a purchase is completed.
- Allow unauthenticated users to view a single product and all its reviews.
- Allow any user to get a list of all the products they have posted.
- Allow any user to get a list of all the reviews they have posted.
- Allow product creators to edit or delete their products.
- Reviews cannot be edited once they have been submitted.
- A review can be deleted by its author.
- Users can search the database by supplying a search term. This should use [Django's PostgreSQL full-text search](https://docs.djangoproject.com/en/3.0/ref/contrib/postgres/search/).
    - At minimum allow searching in product titles.
    - A more comprehensive search would allow searching both titles and descriptions.
    - Optionally allow searching reviews.
- Deployed to Render or another platform.

### URLs you will likely need

This is a non-exhaustive list of URLs that your API should provide. Keep in mind that you can choose which HTTP methods your views will support and that you may choose to combine or split functionality differently across your URLs. What's important is that your API provides some way to do all the actions your users need to do and provides all the data they need.

You'll use Djoser to manage login and registration; the URLs provided by that library are not listed here.

| HTTP method | path                          | description                               |                            |
| ----------- | ----------------------------- | ----------------------------------------- | -------------------------- |
| GET         | /products                     | list all products                         |                            |
| POST        | /products                     | create a new product                      |                            |
| PUT/PATCH   | /products/:product_id         | update a product                          |                            |
| DELETE      | /products/:product_id         | delete a product                          |                            |
| GET         | /products/:product_id         | get details about a product               |                            |
| GET         | /:seller_id/products          | all products from one seller              |                            |
| GET         | /orders/me                    | all orders made by the logged in user     |                            |
| POST        | /orders                       | create a new order (purchase)             |                            |
| GET         | /order/:order_id              | a single order with associated products   |                            |
| GET         | /products/search              | search products                           | should accept query params |
| GET         | /products/:product_id/reviews | all reviews for a single product          |                            |
| POST        | /products/:product_id/reviews | create a new product review               |                            |
| GET         | /reviews/me                   | all reviews written by the logged in user |                            |
| DELETE      | /reviews/:review_id           | delete a review                           |                            |

## Front End Requirements

For this project you are implementing a web storefront, so you don't need to worry about how products get to you or what happens after a user purchases something from your online shop. Your concern is the shopping experience itself.

You should put some thought into a useful or creative way of displaying the products. You will also need to handle the cart experience in a way that makes sense for the user.

Your application must be deployed to Netlify and should implement client-side routing.

A buyer can:

- see a list of products that are available for purchase in this shop.
- sort and search products.
- see that a product is "out of stock" if a product's quantity is zero.
- click on a product to see more detail about it, including a description and a price.
- add items from the list of available products to their cart from the product detail page.
- adjust the quantity of the item from the product view before they add it to their cart.
- see all the items in their cart, along with a total.
- add items to their cart even if they are not logged in. A user should be able to see unpurchased items in their cart if they come back to the site, even without being logged in.
- adjust the quantity of a given item while it is in their cart.
- A user can remove an item from their cart. You might handle this by allowing them to adjust the quantity to zero and have that remove it from their cart, or you could allow them to click on a link or icon (like an 'x' or a trashcan) to remove it.
- A logged in buyer can click on a button to "checkout" from the shop and see a checkout page. Purchases cannot be made by unauthenticated users.
- A user can see the total cost of all their items on the checkout page. They can click on a button to "Purchase" the items in their cart.
    - You do not have to implement a form to enter a credit card. Imagine that a user has a credit card on file that will be charged when they click "Purchase."
    - When a purchase has been made, the cart should be cleared of items.
- After a purchase has been made, a user can see a confirmation page with an order number.
- A user can see a list of their completed orders.

If you finish implementing the storefront, you should build a seller dashboard for users who want to create product listings and manage their inventory.

A seller can:

- See a product dashboard page that lets them manage their products
- Add new products
- Edit their own products (including adjusting quantities and prices)
- Mark products as for sale or not for sale
- See all their product reviews

## 🌶️ Spicy Options

There are options here for both front-end and back-end.

- Add a shipping & handling fee to the total cost.
- Account for sales tax in your state.
- Show the user a list of their past orders.
- Build a payment form to allow users to submit (fake) credit card information
- Allow coupons. The back end can make coupon codes available for a certain discount from the total price. The front end can provide a banner or alert to make a coupon available. BONUS: create coupons with limits, like one-time use or an expiration.
- Allow multiple images for products, or additional fields like "size" or "color" (or whatever your products require).
- Implement pagination. On the front-end, allow users to click through pages of product lists to limit the number of products shown on the page at one time. The back-end can use pagination to limit the number of objects returned in a single response.
- Allow buyers to ask private questions on a product page that can be answered by a seller. Sellers should see pending questions on their product dashboard.
- Store (fake) credit card data for users. If they do not have a (fake) credit card on file, or if their (fake) credit card has expired, return an error message explaining that.
