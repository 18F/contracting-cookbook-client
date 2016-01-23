var Cookbook = require('../lib/cookbook');
var test = require('tape');
require('sepia');

var fs = require('fs');
var testData = JSON.parse(fs.readFileSync('tests/testdata.json','utf8'));

test('cookbook test', function (t) {
  t.plan(3);
  var c = new Cookbook();

  t.ok(c, 'Cookbook loaded');

  c.getRecipes().then(function (d){
    t.equal(11, d.length, 'Should be 11 recipes');
  });

  c.getRecipe('agile').then(function (d){
    t.equal(d.snippets, testData.snippets, 'Snippets from the recipe should match test data');
  });
})
