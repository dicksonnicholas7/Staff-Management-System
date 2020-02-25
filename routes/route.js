var express = require('express');
var route = express.Router();
var Contact = require('../models/contacts');


route.get('/contacts', 
function (req,res) {
   Contact.find(function (err, contacts) {
                if(err){
                    res.json(err);
                }else{
                    res.json(contacts);
                } 
            });
}
);
route.post('/contacts', 
function (req,res) {

   var newContact = new Contact(
       {
           first_name:req.body.first_name,
           last_name:req.body.last_name,
           phone:req.body.phone
       }
   );
            newContact.save(function (err, contact) {
                if(err){
                    res.json(err);
                }else{
                    res.json(contact);
                }    
            });
}
);
route.delete('/contacts/:id', 
function (req,res) {
   Contact.deleteOne({_id:req.params.id},function (err, response) {
                if(err){
                    res.json(err);
                }else{
                    res.json(response);
                }
                
            });
}
);

module.exports = route;