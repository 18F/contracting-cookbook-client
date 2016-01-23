# Contracting Cookbook Client

18F has created a [Contracting Cookbook](https://pages.18f.gov/contracting-cookbook/) with "recipes" for acquisitions. This client accesses the underlying data from the Contracting Cookbook for easy use, either using the command line or in the browser.

## Installation

`npm install contracting-cookbook`

## Usage

``` js
var c = new Cookbook();
c.getRecipes().then(function (d){
  console.log(d);
})
```

## API

### getRecipes

Get an array of the recipe objects in the contracting cookbook.

``` js
var c = new Cookbook();
c.getRecipes().then(function (d){
  console.log(d);
})
```

### getRecipe

Get a single snippet from a particular recipe.

``` js
c.getRecipe('agile').then(function (d){
  console.log(d);
})
```

## License

Public Domain
