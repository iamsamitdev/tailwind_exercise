// HTTP
const http = require('http')
const path = require('path')
const fs = require('fs')

function getPage(page){
    const filePath = path.join(__dirname, page)
    return fs.readFileSync(filePath)
}

function handleFiles(req, res){
    const fileType = path.extname(req.url) || '.html'

    if(fileType === '.html'){

        res.setHeader('Content-Type','text/html')
        res.writeHead(200)
        // res.write('<h1>Hello</h1>')

        if(req.url === '/'){
            res.write(getPage('public/pages/index.html'))
        }else if(req.url === '/about'){
            res.write(getPage(`public/pages/${req.url}.html`))
        }
        
        res.end()
        
    } else if(fileType === '.css'){

        res.setHeader('Content-Type','text/css')
        res.writeHead(200)
        res.write(getPage('style.css'))
        res.end()

    }else{

        res.writeHead(404)
        res.end()

    }
}

http.createServer((req, res)=>{

    handleFiles(req,res);

}).listen(5500)