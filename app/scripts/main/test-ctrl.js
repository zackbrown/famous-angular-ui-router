'use strict';

angular.module('famousAngularStarter')
  .controller('TestCtrl', function ($scope, $famous) {
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Timer = $famous['famous/utilities/Timer'];

    $scope.spinner = {
      speed: 155
    };
    $scope.rotateY = new Transitionable(0);
    $scope.opacity = new Transitionable(1);
    $scope.rotateZ = new Transitionable(0);

    //run function on every tick of the Famo.us engine
    Timer.every(function(){
      var adjustedSpeed = parseFloat($scope.spinner.speed) / 1200;
      $scope.rotateY.set($scope.rotateY.get() + adjustedSpeed);
    }, 1);

    $scope.leave = function($done){
      console.log('done', $done)
      $scope.opacity.set(0, {duration: 500})
      $scope.rotateZ.set(2 * Math.PI, {duration: 500, curve: 'easeOut'}, $done);
    }

    $scope.enter = function($done){
      $scope.opacity.set(0);
      $scope.opacity.set(1, {duration: 500, curve: 'easeIn'}, $done)
    }

  });
