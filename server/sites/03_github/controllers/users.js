'use strict'


var data = {
  periods: [
    {
        name: "Spring 2016",
        users: [
            'andyroberson',
            'ashlenrennr',
            'brmayes',
            'cgharford',
            'chenchik'
        ]
    }
  ]
};

exports.list = function(req, res) {
  
  res.render('list', data);
  
    
};

exports.create = function(req, res) {
  
  
  
    
};

exports.update = function(req, res) {
  
 
  
    
};

exports.remove = function(req, res) {
  
 
  
    
};
