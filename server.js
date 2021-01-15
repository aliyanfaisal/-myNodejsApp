const express=require('express');
const bodyParser=require('body-parser');
const app = express();

app.use(express.urlencoded());
app.get('/',function(req,res)   {
    
    res.sendFile(__dirname+'/views/index.html');
    // console.log(req);
    // res.send("done");
});

app.post('/post-data', function(req, res){
    res.send(req.body.name);
});

app.listen(4000,function(){
    console.log('server running');
});


