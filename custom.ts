let animation_running: boolean
enum animation_effects {
    //% block="erscheinen"
    show,
    //% block="verblassen"
    hide
}

/**
* Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
* Weitere Informationen unter https://makecode.microbit.org/blocks/custom
*/

/**
 * Custom blocks
 */
//% weight=100 color=#104d01 icon="\uf008"
namespace flipbook {
    /**
     * Creates a Animation with a array of Images.
     * @param n the time between two images, eg: 500
     * @param a An Array of Images, eg: Image[]
     */
    //% block="Animiere $a alle $n ms"
    //% n.min=100 n.max=5000
    //% n.shadow=timePicker
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
   
        }


