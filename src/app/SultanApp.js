var sultanApp = angular.module('sultanApp', [])
    .factory('sentinelEnvironmentService', function ()
    {
        var allEnvironments = [];
        return {
            addEnvironment: function (sentinelEnvironment)
            {
                if (sentinelEnvironment.constructor == SentinelEnvironment)//sentinelEnvironment must be the correct type
                {
                    //duplicate environmentnames are not allowed
                    var i = 0, len = allEnvironments.length;
                    for (; i < len; i++)
                    {
                        if (allEnvironments[i].EnvironmentName == sentinelEnvironment.EnvironmentName)
                        {
                            return undefined;
                        }
                    }

                    allEnvironments.push(sentinelEnvironment);
                    return sentinelEnvironment;
                }
            },
            getAllEnvironments: function ()
            {
                return allEnvironments
            },
            setEnvironmentActive: function (sentinelEnvironment)
            {
                //find corresponding environment and set .isActive=true;
                var i = 0, len = allEnvironments.length;
                for (; i < len; i++)
                {
                    if (allEnvironments[i].EnvironmentName == sentinelEnvironment.EnvironmentName)
                    {
                        allEnvironments[i].isActive = true;
                        return true;
                    }
                }

            }
        };
    });