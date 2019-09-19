var scraper = require('./tools').scraper;
//scraper = function(url,parseFcn,filename)
//scrapes a URL, parses it with parseFcn, and archives the data in a JSON file called filename.

var ParseFcn = function($,data)
{
    var parent= $("#az-list-A");
    var children = parent.find("li")
    children.toArray()
    .forEach(function(item,index)
             {
             data.push($(item).text());
            });
};



scraper("https://www.marvel.com/comics/characters",ParseFcn,"filename.json");

