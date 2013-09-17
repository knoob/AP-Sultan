describe('EnvironmentSelector Directive', function () {
    var $compile, $rootScope, element

    beforeEach(module('sultanApp'));
    beforeEach(inject(function (_$compile_, _$rootScope_) {

        $compile = _$compile_;

        $rootScope = _$rootScope_;
    }));
    it('Should be testable, callable in a test', function () {
        var linkingFn = $compile('<button></button>')
        element = linkingFn($rootScope);
        alert(element.hasClass('btn'));
        expect(element.hasClass('btn')).toBe(true);
    });
})