/**
 * Created by barais on 20/01/15.
 */
declare module "mraa" {

    module mraa{
        function getVersion() : string;
        function setPriority(priority:number):number
        function getPlatformType() :number
        function printError(result:number)
        function pinModeTest(pin:number, mode:number):boolean
        function  adcRawBits():number
        function adcSupportedBits():number
        function getPlatformName():string
        function setLogLevel(level:number):number
        export class Gpio {
            constructor(pin:number);
            constructor(pin:number, owner:boolean, raw:boolean);
            edge(number):number;
            mode(mode:number):number;
            dir(mode:number):number;
            read():number;
            write(number):number;
            useMmap(boolean):number;
            getPin():number;
        }


    }
    export = mraa;
}