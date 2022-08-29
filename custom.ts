let l: number
let wait: number
/**
* Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
* Weitere Informationen unter https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="keinem Effekt"
    "nothing",
    //% block="erscheinen"
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
     * @param a describe parameter here
     * @param e describe parameter here
     */
    //% block="Animiere $a mit $n FPS und $e"
    export function animate(a: any, n: number, e: MyEnum): void {
        
        l = a.length -1
        wait = (1 / n) * 1000
        for (let i = 0; i < l; i++) {
            a[i].showImage(0)
            basic.pause(wait)
        }
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
