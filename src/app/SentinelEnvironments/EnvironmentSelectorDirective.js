sultanApp.directive('EnvironmentSelector', function factory(injectables)
{
    var directiveDefintionObject =
{
    priority: 0,
    template: '<div>xxxx</div>', // or // function(tElement, tAttrs) { ... },
    // or
    // templateUrl: 'directive.html', // or // function(tElement, tAttrs) { ... },
    replace: false,
    transclude: false,
    restrict: 'A',
    scope: false,
    controller: function ($scope, $element, $attrs, $transclude, otherInjectables) { }
}
    return directiveDefintionObject;
})