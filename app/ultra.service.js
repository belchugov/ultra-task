(function () {
    'use strict';

    angular
        .module('ultra-app')
        .service('UltraService', UltraService);

    UltraService.$inject = ['$http'];

    /* @ngInject */
    function UltraService($http) {
        this.getMatches = getMatches;

        ////////////////

        function getMatches() {
            return $http.get('http://localhost:8081/matches').then(function (response) {
                return response.data.XmlSports.Sport[0].Event;
            }).catch(function (error) {
                console.log(error);
            })
        }
    }

})();
