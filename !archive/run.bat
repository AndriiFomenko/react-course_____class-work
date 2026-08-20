@echo off
echo Cleaning up .git, .next, .cursor, node_modules, dist...
FOR /d /r . %%d in (.git .next .cursor node_modules dist disk) DO @IF EXIST "%%d" (
    echo Removing: %%d
    RD /S /Q "%%d"
)
echo Cleanup completed.
pause