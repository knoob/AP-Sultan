sultanApp.directive('EnvironmentSelector', function factory() {
    alert('hello');
    var directiveDefintionObject =
{
    priority: 0,
    template: '<div>xxxx</div>', // or // function(tElement, tAttrs) { ... },
    // or
    // templateUrl: 'directive.html', // or // function(tElement, tAttrs) { ... },
    replace: false,
    transclude: false,
    restrict: 'E',
    scope: false,
    compile: function (elelment, attributes) {
        element.addClass('btn');
    },
    controller: function ($scope, $element, $attrs, $transclude, otherInjectables) { }
}
    return directiveDefintionObject;
})