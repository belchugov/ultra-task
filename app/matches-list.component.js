(function () {
    'use strict';

    angular
        .module('ultra-app')
        .component('matchesList', {
            templateUrl: './app/matches-list.html',
            controller: MatchesListController
        });

    function MatchesListController(UltraService) {
        var _this = this;
        function loadMatches() {
            return UltraService.getMatches()
                .then(function (response) {
                    _this.matches = response;
                }).catch(function (error) {
                    console.log(error);
                });
        }

        this.$onInit = function () {
            loadMatches();
        }
    }
})();
