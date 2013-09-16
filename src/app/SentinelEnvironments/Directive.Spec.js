describe('EnvironmentSelector Directive', function () {
    var $compile, $rootScope, element, scope;

    beforeEach(module('sultanApp'));
    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));
    it('Should display the name of the environment attribute', function () {
        var element = $compile('<EnvironmentSelector></EnvironmentSelector>')
        alert(element);
        expect(element.hasClass('btn').toBe(true));
    });
})