function SentinelEnvironment(envName, dbServer, dbCatalog, srcPath, archPath, xsdPath)
{
    if (arguments.length != 6)
    {
        return undefined;
    }
       // { throw new Error("Arguaments must be provided for ALL constructor parameters") } //all paramters are required.
    {
        this.EnvironmentName = envName;
        this.DatabaseServer = dbServer;
        this.DatabaseCatalog = dbCatalog;
        this.DefaultSourcePath = srcPath;
        this.DefaultArchivePath = archPath;
        this.DefaultXsdPath = xsdPath;
    }
};
