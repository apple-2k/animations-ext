let animation_running: boolean
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
    //% block="Animiere $a alle $n ms"
    //% n.min=1 n.max=10000
    //% n.fieldOptions.precision=1
    export function animate(a: Image[], n: number): void {
        animation_running = true
        for (let Index = 0; Index <= a.length - 1; Index++) {
            a[Index].showImage(0)
            basic.pause(n)
        }
        animation_running = false
        basic.clearScreen()
    }


    /**
     * returns true if an animation is running.
     */
    //% block="Läuft eine Animation?"
    export function isrunning(): boolean {
        return animation_running
    }

    /**
     * Show an image with many effects.
     */
    //% block=""
    export function animateimg(img: Image): void {

    }
}

