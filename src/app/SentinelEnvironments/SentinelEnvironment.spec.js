describe('Sentinel Environment Service', function ()
{
    describe('SentinelEnvironmentService Integration Tests', function ()
    {
        var sentinelEnvironmentService;
        beforeEach(module('sultanApp'));
        beforeEach(inject(function (_sentinelEnvironmentService_)
        {
            sentinelEnvironmentService = _sentinelEnvironmentService_;
        }));

        it('Angular module (sultanApp) should exist for these tests', function ()
        {
            expect(sultanApp).toBeDefined();
        });
        it('sentinelEnvironmentService should be injected into sultanApp', function ()
        {
            console.log(sentinelEnvironmentService.getAllEnvironments());
            expect(sentinelEnvironmentService).toBeDefined();
        });
    }),


    describe('SentinelEnvironmentService object', function ()
    {
        var sentinelEnvironmentService;
        beforeEach(module('sultanApp'));
        beforeEach(inject(function (_sentinelEnvironmentService_)
        {
            sentinelEnvironmentService = _sentinelEnvironmentService_;
        }));
        it('Should initialize with zero environments', function ()
        {
            expect(sentinelEnvironmentService.getAllEnvironments().length).toEqual(0);
        });
        it('Should allow you to add 1 environment', function ()
        {
            var env = new SentinelEnvironment("envNamex", "dbServerx", "dbCatalogx", "srcPathx", "archPathx", "xsdPathx");
            sentinelEnvironmentService.addEnvironment(env);
            var allEnvs = sentinelEnvironmentService.getAllEnvironments();
            expect(allEnvs.length).toEqual(1);
            expect(allEnvs[0].EnvironmentName).toEqual("envNamex");
        });
        it('Should allow you to add 2 environments', function ()
        {
            var env1 = new SentinelEnvironment("envNamex1", "dbServerx1", "dbCatalogx1", "srcPathx1", "archPathx1", "xsdPathx1");
            sentinelEnvironmentService.addEnvironment(env1);
            var env2 = new SentinelEnvironment("envNamex2", "dbServerx2", "dbCatalogx2", "srcPathx2", "archPathx2", "xsdPathx2");
            sentinelEnvironmentService.addEnvironment(env2);
            var allEnvs = sentinelEnvironmentService.getAllEnvironments();
            expect(allEnvs.length).toEqual(2);
            expect(allEnvs[0].EnvironmentName).toEqual("envNamex1");
            expect(allEnvs[1].EnvironmentName).toEqual("envNamex2");
        });
        it('Duplicate environment names are not allowed', function ()
        {
            var env1 = new SentinelEnvironment("envNamex", "dbServerx1", "dbCatalogx1", "srcPathx1", "archPathx1", "xsdPathx1");
            var returnedEnv1 = sentinelEnvironmentService.addEnvironment(env1);
            var env2 = new SentinelEnvironment("envNamex", "dbServerx2", "dbCatalogx2", "srcPathx2", "archPathx2", "xsdPathx2");
            var returnedEnv1 = sentinelEnvironmentService.addEnvironment(env2);//this should return 'undefined'
            var allEnvs = sentinelEnvironmentService.getAllEnvironments();
            expect(allEnvs.length).toEqual(1);
            expect(returnedEnv1).toEqual(undefined);
            expect(allEnvs[0].EnvironmentName).toEqual("envNamex");
        });

        it('Should allow you to specify a subset of "Active" environments', function ()
        {
            var env1 = new SentinelEnvironment("envNamex1", "dbServerx1", "dbCatalogx1", "srcPathx1", "archPathx1", "xsdPathx1");
            sentinelEnvironmentService.addEnvironment(env1);
            var env2 = new SentinelEnvironment("envNamex2", "dbServerx2", "dbCatalogx2", "srcPathx2", "archPathx2", "xsdPathx2");
            sentinelEnvironmentService.addEnvironment(env2);
            var isActive1 = sentinelEnvironmentService.setEnvironmentActive(env1);
            expect(isActive1).toEqual(true);
            var allEnvs = sentinelEnvironmentService.getAllEnvironments();
            expect(allEnvs[0].isActive).toEqual(true);
            expect(allEnvs[1].isActive).toBeFalsy();

            var isActive2 = sentinelEnvironmentService.setEnvironmentActive(env2);
            expect(isActive2).toEqual(true);
            var allEnvs = sentinelEnvironmentService.getAllEnvironments();
            expect(allEnvs[0].isActive).toEqual(true);
            expect(allEnvs[1].isActive).toEqual(true);
        });

        it('Should allow you to specify a subset of "Active" environments', function ()
        {
            var env1 = new SentinelEnvironment("envNamex1", "dbServerx1", "dbCatalogx1", "srcPathx1", "archPathx1", "xsdPathx1");
            sentinelEnvironmentService.addEnvironment(env1);
            var env2 = new SentinelEnvironment("envNamex2", "dbServerx2", "dbCatalogx2", "srcPathx2", "archPathx2", "xsdPathx2");
            sentinelEnvironmentService.addEnvironment(env2);
            var isActive1 = sentinelEnvironmentService.setEnvironmentActive(env1);
            expect(isActive1).toEqual(true);
            var allEnvs = sentinelEnvironmentService.getAllEnvironments();
            expect(allEnvs[0].isActive).toEqual(true);
            expect(allEnvs[1].isActive).toBeFalsy();

            var isActive2 = sentinelEnvironmentService.setEnvironmentActive(env2);
            expect(isActive2).toEqual(true);
            var allEnvs = sentinelEnvironmentService.getAllEnvironments();
            expect(allEnvs[0].isActive).toEqual(true);
            expect(allEnvs[1].isActive).toEqual(true);
        });

    }),




    describe('A Single Sentinel Environment Entity (SentinelEnvironment)', function ()
    {
        it('should hold specific properties passed in constructor (EnvironmentName, DatabaseServer, DatabaseCatalog, DefaultSourcePath, DefaultArchivePath, DefaultXsdPath)', function ()
        {
            var sentinelEnvironment = new SentinelEnvironment("envNamex", "dbServerx", "dbCatalogx", "srcPathx", "archPathx", "xsdPathx");
            expect(sentinelEnvironment.EnvironmentName).toEqual("envNamex", "ddd");
            expect(sentinelEnvironment.DatabaseServer).toEqual("dbServerx");
            expect(sentinelEnvironment.DatabaseCatalog).toEqual("dbCatalogx");
            expect(sentinelEnvironment.DefaultSourcePath).toEqual("srcPathx");
            expect(sentinelEnvironment.DefaultArchivePath).toEqual("archPathx");
            expect(sentinelEnvironment.DefaultXsdPath).toEqual("xsdPathx");
        });
        it('should be instanciated with ALL contructor arguemnts', function ()
        {
            var sentinelEnvironment = new SentinelEnvironment("envNamex", "dbServerx", "dbCatalogx", "srcPathx", "archPathx");
            expect(sentinelEnvironment.DefaultArchivePath).toBe(undefined);
        });

    }
    );


});