var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one': {
        title:'article one | manoj duli',
        heading:'article one',
        date:'19 th november 2016',
        content:`
            <p>
                    HAI THIS IS "MANOJ DULI"THIS IS MY FIRST ARTICLE. HAI THIS IS "MANOJ DULI" THIS IS MY FIRST ARTICLE.HAI THIS IS "MANOj DULI"THIS IS MY FIRST ARTICLE. HAI THIS IS "MANOJ DULI"THIS IS MY FIRST ARTICLE.
            </p>
                                 
            <p>
                    HAI THIS IS "MANOJ DULI"THIS IS MY FIRST ARTICLE. HAI THIS IS "MANOJ DULI" THIS IS MY FIRST ARTICLE.HAI THIS IS "MANOJ DULI"THIS IS MY FIRST ARTICLE. HAI THIS IS "MANOJ DULI"THIS IS MY FIRST ARTICLE.
                        
            </p>
            <p>
                    HAI THIS IS "MANOJ DULI"THIS IS MY FIRST ARTICLE. HAI THIS IS "MANOJ DULI" THIS IS MY FIRST ARTICLE.HAI THIS IS "MANOJ DULI"THIS IS MY FIRST ARTICLE. HAI THIS IS "MANOJ DULI"THIS IS MY FIRST ARTICLE.
            </p>` 
                
                
    },
    'article-two': {
        title:'article two | manoj duli',
            heading:'article two',
            date:'15 th november 2016',
            content:`
                <p>
                    HAI THIS IS "MANOJ DULI"THIS IS MY SECOND ARTICLE. HAI THIS IS "MANOJ DULI" THIS IS MY SECOND ARTICLE.
                </p>`
       },
    'article-three': {
        title:'article two | manoj duli',
            heading:'article two',
            date:'11 th november 2016',
            content:`
                <p>
                    HAI THIS IS "MANOJ DULI"THIS IS MY SECOND ARTICLE. HAI THIS IS "MANOJ DULI" THIS IS MY SECOND ARTICLE.
                </p>`
        }
};    
function createtemplate(data){
            
        var title=data.title;
        var date=data.date;
        var heading=data.heading;
        var content=data.content;

var htmltemplate=`
        <html>
        <head>
            <title>
               ${title}
            </title>
            <meta name="viexport" content="width-device-width,initial-scale-1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
              <div>
                <a href="/">home</a>
              </div>
              <hr/>
              <h3>
                ${heading}
              </h3>
              <div>
               ${date}
              </div>
              <div>
                ${content}
              </div>
            </div>
           
        </body>
    </html>
    `;
    return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    //articleName==article-one
    //articles[articleName]=={} content object for article one
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});