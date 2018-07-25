(function () {
    'use strict';

    angular
        .module('ultra-app')
        .component('matchesList', {
            template:
                '<li ng-repeat="match in $ctrl.matches">' +
                    '<span>{{ match.$.Name }}</span>' +
                    // '<pre>{{ match | json }}</pre>' +
                '</li>',
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
