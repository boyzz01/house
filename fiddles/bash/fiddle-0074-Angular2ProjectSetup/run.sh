#!/usr/bin/env bash

source bin/_common.sh;
source bin/_install_global.sh;
source bin/_add_directories.sh;
source bin/_init.sh;
source bin/_add_typingsrc.sh;
source bin/_install_save.sh;
source bin/_install_save_ng2.sh;
source bin/_add_gulpfile.sh;
source bin/_add_karma_conf.sh;


clear;
echo "$0" | sed 's/\.\///g' | awk '{print toupper($0)}'
echo "Bash version ${BASH_VERSION}..."


function catch() {
    case $1 in
        0)  endLog "environment configured";
            ;;
        1)  echo "_add_directory.sh: createRootDirectory() failed";
            ;;
        2)  echo "_install_global.sh: npmInstallBowerGlobal() failed";
            ;;
        3)  echo "_install_global.sh: npmInstallGulpGlobal() failed";
            ;;
        4)  echo "_install_global.sh: npmInstallTypingsGlobal() failed";
            ;;
        5)  echo "_install_global.sh: npmInstallTypescriptGlobal() failed";
            ;;
        6)  echo "_install_global.sh: npmInstallBrowserifyGlobal() failed";
            ;;
        7)  echo "_install_global.sh: npmInstallBrowserSyncGlobal() failed";
            ;;
        9)  echo "_init.sh: createTypingsRcFile() failed";
            ;;
        10) echo "_init.sh: npmInit() failed";
            ;;
        11) echo "_install_save.sh: npmInstallGulpTypescript() failed";
            ;;
        12) echo "_install_save_ng2.sh: npmInstallNg2() failed";
            ;;
        14)  echo "_init.sh: bowerInit() failed";
            ;;
        17) echo "_install_save.sh: npmInstallGulpTslintSaveDev() failed";
            ;;
        18) echo "_install_save.sh: npmInstallBrowserifySaveDev() failed";
            ;;
        19) echo "_install_save.sh: npmInstallVinylTransformSaveDev() failed";
            ;;
        20) echo "_install_save.sh: npmInstallGulpUglifySaveDev() failed";
            ;;
        21) echo "_install_save.sh: npmInstallGulpSourceMapsSaveDev() failed";
            ;;
        22) echo "_install_save.sh: npmInstallMochaSaveDev() failed";
            ;;
        23) echo "_install_save.sh: npmInstallKarmaSaveDev() failed";
            ;;
        24) echo "_install_save.sh: npmInstallBrowserSyncSaveDev() failed";
            ;;
        25) echo "_add_gulpfile.sh: addGulpFile() failed";
            ;;
        26) echo "_add_karma_conf.sh: addKarmaConf() failed";
            ;;
        *)  echo "fubar! Something went wrong."
            ;;
    esac
    exit $1
}
# try
(
    _path="fiddle";
    if [ "$#" -eq 1 ]; then _path=$1; fi
    addDirectories "${_path}" || exit 1;
    cd "${_path}";
    npmInstallBowerGlobal || exit 2;
    npmInstallGulpGlobal || exit 3;
    npmInstallTypingsGlobal || exit 4;
    npmInstallTypescriptGlobal || exit 5;
    npmInstallBrowserifyGlobal || exit 6;
    npmInstallBrowserSyncGlobal || exit 7;
    createTypingsRcFile || exit 9;
    npmInit || exit 10;
    npmInstallGulpTypescript || exit 11;
    npmInstallNg2 || exit 12;
    bowerInit || exit 14;
    npmInstallGulpTslintSaveDev || exit 17;
    npmInstallBrowserifySaveDev || exit 18;
    npmInstallVinylTransformSaveDev || exit 19;
    npmInstallGulpUglifySaveDev || exit 20;
    npmInstallGulpSourceMapsSaveDev || exit 21;
    npmInstallMochaSaveDev || exit 22;
    npmInstallKarmaSaveDev || exit 23;
    npmInstallBrowserSyncSaveDev || exit 24;
    addGulpFile || exit 25;
    addKarmaConf || exit 26;
)
catch $?;





