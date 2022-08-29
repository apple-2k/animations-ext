
/**
* Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
* Weitere Informationen unter https://makecode.microbit.org/blocks/custom
*/


/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace flipbook {
    /**
     * Creates a Animation with a array of Images.
     * @param n describe parameter here, eg: 20
     */
    //% block="Animiere $a mit $n FPS"
    export function animate(a: Image[], n: number): void {
        
        for (let Index = 0; Index <= a.length - 1; Index++) {
            a[Index].showImage(0)
            basic.pause((1 / n) * 1000)
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
