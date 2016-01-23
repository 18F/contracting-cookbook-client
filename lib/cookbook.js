'use strict';
var request = require('request');
var concat = require('concat-stream');
var yaml = require('js-yaml');

class Cookbook {

  constructor () {
    var self = this;

    self.base_url = 'https://api.github.com/repos/18F/contracting-cookbook/contents/_recipes-data/';

  }

  getRecipes () {
    var opts = {
      url: this.base_url,
      headers: {'User-Agent': '18F Contracting Cookbook Test'}
    }
    return new Promise(function (resolve, reject){
      request.get(opts, function (err, data){
        resolve(JSON.parse(data.body));
      })
    });
  }

  getRecipe(recipe){
    var opts = {
      url: this.base_url + recipe + '.yml',
      headers: {'User-Agent': '18F Contracting Cookbook Test'}
    }
    return new Promise(function(resolve, reject) {
      request.get(opts, function (err, data){
        if (err) throw err;
        var b = new Buffer(JSON.parse(data.body).content, 'base64');
        resolve(yaml.safeLoad(b.toString('utf8')));
      });
    });
  }
}

module.exports = Cookbook;
