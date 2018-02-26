/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
    $('.carousel').carousel({
        interval: 8000
    });
    $('#modalPregunta').modal({
        backdrop: 'static',
        keyboard: false,
        show: false
    });

    var modalConfirm = function (callback) {

        $("#modal-btn-si").on("click", function () {
            callback(true);
        });

        $("#modal-btn-no").on("click", function () {
            callback(false);
        });
    };

    modalConfirm(function (confirm) {
        if (confirm) {
            $("#bgRespuesta").css("display", "block");
            $(".container-fluid").css("display", "none");
            var videoSRCauto = "https://www.youtube.com/embed/iKzRIweSBLA" + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
            $("#frameVideo iframe").attr('src', videoSRCauto);
        } else {
            alert("Respetaré tu respuesta ;)");
        }
    });
});

var myAngularApp = angular.module('MyRequestApp', ['ngRoute']).directive('test', function () {
});

//Información general
myAngularApp.controller('InicioController', function ($scope) {

    $scope.archivoActual = {
        nombre: "Jimbo"
    };

    $scope.fnInitArchivo = function (nombre, tamano, fechaCreacion) {
        if (nombre === "") {
            $scope.archivoActual = null;
            $('#modalSeleccionArchivo').modal('show');
        } else {
            $scope.archivoActual = {
                nombre: nombre,
                tamano: tamano,
                fechaCreacion: fechaCreacion
            };
        }
    };



});