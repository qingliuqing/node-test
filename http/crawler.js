const http = require('http');

const download = (url,callback) => {
  http.get(url,(res) => {
    let  data = "";
    res.on("data",(chunk) => {
      data += chunk;
    });
    res.on("end",() => {callback(data)});
  }).on("error",() => {callback(data)})
};

// download("http://www.imooc.com",(data)=>{
//   console.log(data)
// })
exports.download = download;
