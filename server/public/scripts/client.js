let MessageBoard= angular.module('MessageBoard', []);

MessageBoard.controller('MessageController', function($http){
    let vm =this;
    vm.messageHistory=[];

    getMessages();

    function getMessages(){
        console.log('in get messages');
        
        $http({
            method: 'GET',
            url:'/messages',
        }).then(function(response){
            console.log('back from server with', response);
            vm.messageHistory= response.data;
        }).catch(function(error){
            console.log('error getting message history', error);
        }) 
    }

    vm.addMessage =function(messageToAdd){
        console.log('in addMessage');
        
        $http({
            method:'POST',
            url: '/messages',
            data: messageToAdd
        }).then(function(response){
            console.log('In POST response of addMessage', response.data);
            vm.messageToAdd='';
            getMessages();
        }).catch(function(error){
            console.log('Error in Post', error);
        })
    }
    vm.deleteMessage=function(idToDelete){
        console.log('in deleteMessage');
        $http.delete('/messages/' + idToDelete)
        .then(function(response) {
          getMessages();
      }).catch(function(error){
          console.log('error deleting');
      })
        
    }
})