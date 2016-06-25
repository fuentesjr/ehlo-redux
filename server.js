var jsxtransform = require('express-jsxtransform'),
    express = require('express'),
    app = express();
    
app.use(jsxtransform());
app.use(express.static('public'));

app.server = app.listen(3000, function() {
  console.log('App listening on port 3000');
})
