angular.module('starter.services', [])

.factory('User', function($http) {

  function addUser(User) {

    var req = {
      method: 'POST',
      url: '/user',
      headers: {
        'Content-Type': 'application/json'
      },
      data: User
    };

    return $http(req);
  }

  return {
    addUser: addUser

  };
});