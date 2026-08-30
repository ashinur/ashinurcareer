const http = require('http');
const port = process.env.PORT || 10000;
const target = 'https://ashinur-career-838w.hatchable.site';
http.createServer((req,res)=>{
  const location = target + (req.url || '/');
  res.writeHead(302,{Location:location,'Cache-Control':'no-store'});
  res.end();
}).listen(port,'0.0.0.0');
