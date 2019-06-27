(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['404'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!--404 page put here-->\r\n<main>\r\n    <h2>404!</h2>\r\n    <p>Looks like you got of course a little!</p>\r\n</main>";
},"useData":true});
templates['gamePage'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!--game is played here-->\r\n<main>\r\n    <h2>Welcome to the game!</h2>\r\n</main>";
},"useData":true});
templates['rulesPage'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!--rules are displayed here-->\r\n<main>\r\n    <h2>Here is how the game is played!</h2>\r\n</main>";
},"useData":true});
templates['settingsPage'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!--here are the settings for the game-->\r\n<main>\r\n    <h2>Here you can customize the game!</h2>\r\n</main>";
},"useData":true});
templates['title'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!--Intro page to the site-->\r\n<main>\r\n    <div id=\"introduction\">\r\n        <h2>Welcome to Rules of Engagement!</h2>\r\n        <p>Click play to begin a game</p>\r\n\r\n        <div id=\"intro-list\">\r\n            <ul>\r\n                <li class=\"intro-item\"><a href=\"/game\">Play</a></li>\r\n                <li class=\"intro-item\"><a href=\"/rules\">Rules</a></li>\r\n                <li class=\"intro-item\"><a href=\"/settings\">Settings</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n</main>\r\n";
},"useData":true});
templates['main'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "﻿<!--put basic html skeleton here-->\r\n<!DOCTYPE html>\r\n<html>\r\n    <head>\r\n        <meta charset=\"utf-8\" />\r\n        <title>Rules of Engagement</title>\r\n\r\n\r\n        <script src=\"\"></script>\r\n    </head>\r\n\r\n    <body>\r\n        "
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n    </body>\r\n</html>";
},"useData":true});
})();