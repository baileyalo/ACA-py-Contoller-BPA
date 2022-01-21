const express    = require('express');        
const app        = express();               
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3001;        
const router = express.Router();  

//webhook

const con = 'http://50.16.62.134:3001';

//routes created 
app.use(express.static(__dirname+'/topic'));
router.get('/', function(req, res) {
    res.send('Welcome to our Topics!' );
});
//route to nft meta data
router.post('/connections', function(req, res) {
    console.log(req.body);
    currstate= req.body?.rfc23_state;
    
    switch (state){
        case "invitation-sent":
            console.log ('Invitation created ');
            console.log ('connection ID:'. req.body?.connection_id);
        break;
        case 'request-recieved':
            console.log ('connection ID:'. req.body?.connection_id);
            console.log ('Request Accepted');

            restapi= 'http://20.151.204.61:8080/connections/' + req.body?.connection_id + '/accept-request?my_endpoint=http%'
        res.send(currstate);   

    }
    
});


app.use('/topic', router);
app.listen(port);
console.log('listening on port ' + port);