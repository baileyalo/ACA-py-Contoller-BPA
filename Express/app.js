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
router.get('/', async function(req, res) {
  console.log("Reached control!");
  restEndpoint = 'http://20.121.221.97:8080';
  //
  restend = 'http://20.151.204.61:8080/connections/'
  restData = {};
  restHeaders = {headers: {}};
  cons = await axios.get(restend, restData, restHeaders);
  console.log("Connections=", cons.data);
  res.status(200).send(conns.data);
    });

//route to connection
router.post('/acceptrequest', async function(req, res) {
  console.log("Reached acceptrequest!");
           //aca-py connection 
      restend = 'http://20.151.204.61:8080/connections/'; 

      restapi= restend + req.body?.connection_id + '/accept-request?my_endpoint='+ encodeURI(restend);
      restData = {};
      restHeaders = {
        headers: {
        }
      };
      axios
        .post(restapi, restData, restHeaders)
        .then(res => {
         console.log('statusCode: ${res.status}');
        })
        .catch(error => {
          console.error(error);
        });
      });
  router.post('/connections', function(req, res) {
          // console json 
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