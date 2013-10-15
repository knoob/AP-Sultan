describe('EnvironmentSelector Directive', function () {
    var $compile, $rootScope, element, sentinelEnvironmentService

    beforeEach(module('sultanApp'));
    beforeEach(inject(function (_$compile_, _$rootScope_, _sentinelEnvironmentService_) {

        $compile = _$compile_;
        $rootScope = _$rootScope_;
        sentinelEnvironmentService = _sentinelEnvironmentService_;
    }));
    it('Should be testable, callable in a testx', function () {
        var linkingFn = $compile('<button></button>')
        element = linkingFn($rootScope);
        //alert($rootScope);
        expect(element.hasClass('btn')).toBe(true);
    });
    it('Should be able to have access to sentinelEnvironmentService', function () {
        var linkingFn = $compile('<button></button>')
        element = linkingFn($rootScope);
        //alert($rootScope);
        expect(element.hasClass('btn')).toBe(true);
    });
})