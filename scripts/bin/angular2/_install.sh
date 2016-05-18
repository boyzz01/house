#!/usr/bin/env bash
# ---------------------------------------------------------------------------------------------------|
#  Repo                    : https://github.com/bradyhouse/house_____________________________________|
#  Specification           : N/A_____________________________________________________________________|
#  Specification Path      : N/A_____________________________________________________________________|
#  Author                  : brady house_____________________________________________________________|
#  Create date             : 05/02/2016______________________________________________________________|
#  Description             : ANGULAR2 CLI INSTALL SETUP______________________________________________|
#  Entry Point             : ngInstall_______________________________________________________________|
#  Input Parameters        : N/A_____________________________________________________________________|
#  Initial Consumer        : ../fiddle-angular-2.sh__________________________________________________|
# ---------------------------------------------------------------------------------------------------|
#  Revision History::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::|
# ---------------------------------------------------------------------------------------------------|
# Baseline Ver - CHANGELOG.MARKDOWN ~ 201605020420
# ---------------------------------------------------------------------------------------------------|

function isNgInstalled() {
    if [[ ! $(which ng;) ]]
    then
        echo "false";
    else
        echo "true";
    fi
}

function ngInstall() {
    groupLog "ngInstall";
    installed=$(isNgInstalled;);
    if [[ "${installed}" == "false" ]]
    then
        npm install -g angular-cli;
    fi
}
