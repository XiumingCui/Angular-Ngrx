# Introduction

This test will assess your capabilities within the Angular Framework. As this test is mainly focused on Angular, you are provided with everything else (predefined css, html). The test has been made with Angular 6. You are free to code however you like, but you will be graded only on the requirements below. Each requirement has points totalling 90. Part marks may be given per a requirement. If your application fails to launch, you will automatically fail and not be considered further. You have 48 hours.

# Startup (if using Online IDE)

## Run these commands to get started:

npm run mock-server

## Click Run at the top:

Once app has finished compiling, click the link that shows at the top of terminal.

# Startup (if using Local IDE)

Make sure your versions are these or higher: 

node version: >= 9.8.0
npm version: >= 6.2.0

## Run these commands to get started:

npm i
npm run mock-server
npm start

The mock server endpoints include '/products' which will return you a json of all the products, and '/products/:id', which will return you a json of that specific product.

# Instructions

You have been allocated to a project already in progress. Some of the boilerplate for this project has already been done for you. It contains AppModule, CoreModule, SharedModule, and three other Modules that are lazy loaded with routes (/product:id and /products and /landing). The landing page for the app contains a list of links to various products and should not be modified. The ProductsModule (/products) is only there for demonstration purposes and contains the template code complete with CSS for each product and it’s variation, which corresponds to the data found in db.json. The ProductModule is your main concern and it is where most of your changes will go.

# Hints

- Although The test is graded out of 90 marks, just passing may not be enough. It will depend on the role you are applying for. A 50% is considered Junior, ~70% is considered Intermediate, ~85% is considered Senior.
- Almost half the marks come from the Rxjs / Ngrx section.
- Although it is possible to get all products in one request via products endpoint, this way will get you less marks in the end. It is better to make use of the products/:id endpoint.
- Ngrx Entity will change your code greatly. You should decide in the beginning if you want to use it or not.
- In the Rxjs / Ngrx section, there are two methods you can use for dispatching your main 'get' action. The easier method requires dispatching your 'get' action unconditionally from ngOnInit, but will get you less marks. The second method requires dispatching your 'get' action conditionally in a "tap" if the product doesn't already exist in state.
- It is not necessary to make changes to the look and feel of the application, or add features, this will not get you bonus marks.
- The requirements are ordered progressively.
- The 48 hours only begins once you start the test, and continues regardless of if Hackerrank is open or not.
- These instructions will be available in a README.md file.
- Good luck!

# Requirements

1. Meaningful comments (5)
2. Formatting and naming (5)
3. Route has been configured correctly so that when a user clicks on a product link from the landing page, user is navigated to that product with the corresponding route (ie. product/1731002618) (5)
4. Creation of a service to fetch product from /products/:id endpoint using HTTP Client and return as an observable (half marks for using /products endpoint) (10)
5. Implements async pipe for consuming observable (half marks for using .subscribe()) (5)
6. Implements at least one dumb or presentational component that does not make use of services for displaying product (5)
7. Makes use of at least two different structural directives to form the DOM (5)
8. Makes use of at least one attribute (property) binding (5)
9. Makes use of string interpolation to display the data (5)



Rxjs / Ngrx / Observables
10. Implements Ngrx Entity for state creation and management (5)
11. Implements at least one Ngrx reducer (5)
12. Implements at least two Ngrx actions (5)
13. Implements at least one Ngrx effect (makes use of created service from #4) (5)
14. Implements "select" operator in an observable to retrieve product from state (half marks for not specifying a product id in selector) (5)
15. Implements the "tap" operator in the observable from #10 to dispatch the GET action (half marks for dispatching action from ngOnInit instead) (10)
16. Implements one more meaningful operator in the observable from #10 (5)