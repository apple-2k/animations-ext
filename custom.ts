let l: number
let wait: number
/**
* Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
* Weitere Informationen unter https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="1"
    "nothing",
    //% block="2"
    "effect1"
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     */
    //% block="Animiere $a mit $n FPS und $e"
    export function animate(a: any, n: number, e: MyEnum): void {
        
        for (let Index = 0; Index <= a.length - 1; Index++) {
            a[Index].showImage(0)
            basic.pause(n * 1000)
        }
    basic.clearScreen()
    }


    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
