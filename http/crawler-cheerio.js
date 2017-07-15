const cheerio = require("cheerio");
const server = require("./crawler");
const url = "http://open.163.com/special/opencourse/englishs1.html";

server.download(url,(data) => {
  if(data){
    let $ = cheerio.load(data);
    $(".u-ctitle a").each((i,e) => {
      console.log($(e).attr("href"));
    });
    console.log("down");
  }else {
    console.log("error");
  }
});
