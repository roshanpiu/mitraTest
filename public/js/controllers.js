angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $window, User, $ionicLoading, $ionicPopup) {
  
  $scope.user = {
    firstName: '',
    lastName : '',
    userName: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: null,
    email: '',
    country: '',
    state: '',
    phone: null,
    mobile: null,   
  }; 
  
  $scope.submitUser = function(form) {
    if(form.$valid) {
      $ionicLoading.show();
      User.addUser($scope.user).then(function (res) {
          console.log(res);
          $ionicLoading.hide();
          
          if(res.data.error){
              if(res.data.error.code == 11000){
                $ionicPopup.alert({
                  title: "User Creation Failed",
                  template: "The Username is already in use, please try a different username"
                });
              }
              else{
                $ionicPopup.alert({
                  title: "User Creation Failed",
                  template: res.data.error.message
                });
              }
            
          }
          else{
             $ionicPopup.alert({
                  title: res.data.info,
                });
          }

      });
     
    }
  };  
  
});

