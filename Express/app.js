const express    = require('express');        
const app        = express();               
const bodyParser = require('body-parser');
const { response } = require('express');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3001;        
const router = express.Router();  


//webhook
//const con = 'http://20.151.204.61:8080';

//routes created 
app.use(express.static(__dirname+'/topic'));
router.get('/', function(req, res) {
    res.send('Welcome to our Topics!' );
});
//route to connection
router.post('/connections', function(req, res) {
    console.log(req.body);
    currstate= req.body?.rfc23_state;
    
    switch (state){
        case "invitation-sent":
            console.log ('Invitation created ');
            console.log ('connection ID:', req.body?.connection_id);
        break;
        case 'request-recieved':
            console.log ('connection ID:', req.body?.connection_id);
            console.log ('Request Accepted');
            break;
        case "response-sent":
          console.log("*** Invitation Response sent to invitee");
          console.log("Connection ID=", req.body?.connection_id);
          break;
        case "completed":
          console.log("*** Connection is complete!");
          console.log("Connection ID=", req.body?.connection_id);
          break;
        case "undefined":
          console.log("XXX Unkown connection state");
          console.log("Connection ID=", req.body?.connection_id);

            restapi= 'http://20.151.204.61:8080/connections/' + req.body?.connection_id + 'accept-request?my_endpoint=http%3A%2F%2F20.151.204.61%3A8000';
        res.send(currstate);   
        };    

        axios
        .post(restapi)
        .then(response =>{
        console.log ('statuscode: ${response.status}');

        })
        .catch(err => {
          console.error(err);
        })      
    
    res.status(200).send("OK");

    });
    

app.use('/topic', router);
app.listen(port);
console.log('listening on port ' + port);