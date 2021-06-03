# launcher-server

An example of how an app should be structured in order to be compatible with launcher
* apps/
    * test_application/
        * manifest.json (mandatory)
        * icon.jpg (mandatory)
        * win/
            * 1.0.0.0/
                * signature.json (mandatory)
                * file1.txt
                * assets/
                * config.json
        * linux/
            * 3.4.1.0/
                * signature.json (mandatory)
                * game.exe
            * 2.0.0.1/
                * signature.json (mandatory)
                * game.exe
