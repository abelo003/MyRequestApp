/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
    $('.carousel').carousel({
        interval: 5000
    });
});

var myAngularApp = angular.module('MyRequestApp', ['ngRoute']).directive('test', function() {
});

//Información general
myAngularApp.controller('InicioController', function ($scope) {
    
    $scope.archivoActual = {
        nombre: "Jimbo"
    };
    
    $scope.fnInitArchivo = function(nombre, tamano, fechaCreacion){
        if(nombre === ""){
            $scope.archivoActual = null;
            $('#modalSeleccionArchivo').modal('show');
        }
        else{
            $scope.archivoActual = {
                nombre: nombre,
                tamano: tamano,
                fechaCreacion: fechaCreacion
            };
        }
    };
    
    
    
});