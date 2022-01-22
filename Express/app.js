const express    = require('express');        
const app        = express();               
const bodyParser = require('body-parser');
const axios = require ('axios');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;        
const router = express.Router();  


//webhook
//const con = 'http://20.151.204.61:8080';

//routes created 
app.use(express.static(__dirname+'/topic'));

app.use('/topic', router);

router.get('/', function(req, res) {
    res.send('Welcome to our Topics!' );
});
//route to connection
router.post('/connections', function(req, res) {
    console.log(req.body);
    currstate= req.body?.rfc23_state;
    
    switch (currstate){
        case "invitation-sent":
            console.log ('Invitation created ');
            console.log ('connection ID:', req.body?.connection_id);
        break;
        case 'request-recieved':
            console.log ('connection ID:', req.body?.connection_id);
            console.log ('Request Accepted');
            
            restend = 'http://20.151.204.61:8080/connections/'; 

          restapi= restend + req.body?.connection_id + '/accept-request?my_endpoint='+ encodeURI(restend);
          restData = {};
      restHeaders = {
        headers: {
        }
      };
      axios
        .post(restURL, restData, restHeaders)
        .then(res => {
          console.log('statusCode: ${res.status}');
        })
        .catch(error => {
          console.error(error);
        })

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

  }
  res.status(200).send("OK");
});

app.listen(port);
console.log('listening on port ' + port);