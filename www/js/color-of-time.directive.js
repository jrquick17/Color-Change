(function() {
    'use strict';

    angular.module('color-of-time').directive('colorOfTime', colorOfTime);

    colorOfTime.$inject = [
        'ColorOfTimeService',
        'DefaultService'
    ];

    function colorOfTime(
        ColorOfTimeService,
        DefaultService
    ) {
        return {
            restrict: 'AE',
            replace:  true,
            scope: {
                increment: '=',
                skip:      '=',
                style:     '='
            },
            link: function(scope, elem, attrs) {
                var styles = DefaultService.get(
                    scope.style,
                    'background-color'
                ).split(',');

                var stylesCount = styles.length;
                for (var i = 0; i < stylesCount; i++) {
                    var style = styles[i];

                    elem.css(
                        style,
                        ColorOfTimeService.getColor(scope)
                    );
                }
            }
        };
    }
})();