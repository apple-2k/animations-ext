> Any problems? Open the page [here.](https://aha-ha.github.io/animations-erweiterung/)
## Add the extension to Makecode
Dieses Repository kann als **Erweiterung** in MakeCode hinzugefügt werden.
This repository can be added as **extension** in MakeCode.
* öffne [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klicke auf **Neues Projekt**
* klicke auf **Erweiterungen** unter dem Zahnrad-Menü
* nach **https://github.com/aha-ha/animations-erweiterung** suchen und importieren
Klappt nicht? Dann importiere die [hex-Datei](https://raw.githubusercontent.com/aha-ha/Files/main/flipbook-ext.hex) (Eventuell noch Rechtsklick und Speichern unter drücken, falls der Browser nur Zahlensalat anzeigt statt die Datei herunterzuladen...)
Achtung: Dafür gibt es nur selten Updates...
* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gear menu
* search for **https://github.com/aha-ha/animations-erweiterung** and import it
Doesn't work? Then import the [hex-file](https://raw.githubusercontent.com/aha-ha/Files/main/flipbook-ext.hex) (Possibly right-click and press Save As, if the browser only shows number salad instead of downloading the file...).
Attention: There are rarely updates for this...
## Dieses Projekt bearbeiten
Hast du eine Idee, wie man die Erweiterung verbessern oder Fehler beheben kann?
* Dann öffne [das Repository](https://github.com/aha-ha/animations-erweiterung)
* und kopiere dieses Repository mit der Schaltfläche "Fork".
* öffne [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klicke auf **Importieren** und dann auf **Dein GitHub-Repository**
* wähle das Repository aus. Das sollte **DeinBenutzername/animations-erweiterung** sein, wenn du das Repository nicht umbenannt hast.
* Fertig! Viel Spaß beim bearbeiten.
## Edit this project
Do you have an idea how to improve the extension or fix bugs?
* Then open [the repository](https://github.com/aha-ha/animations-erweiterung)
* and copy this repository with the "Fork" button.
* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click **Import** and then click **Your GitHub Repository**.
* select the repository. This should be **yourusername/animation-extension** if you didn't rename the repository.
* Done! Have fun editing.
# Docs
## Starte Animation #flipbook-animate
Spielt eine Reihe von Bildern hintereinander ab, ähnlich wie bei einem Daumenkino.
### Verwendung
#### Blöcke
![Animiere Bild1, Bild2 alle 500 ms](https://raw.githubusercontent.com/aha-ha/Files/main/Blocks1.png)
## Start animation #flipbook-animate
Plays a series of images one after the other, similar to a flipbook.
### Usage
#### blocks
![Animate image1, image2 every 500 ms](https://raw.githubusercontent.com/aha-ha/Files/main/Blocks4.png)
#### JavaScript / TypeScript
```TypeScript
``TypeScript
flipbook.animate([images.createImage(`
    . . # . .
    . # # . .
@@ -44,27 +44,27 @@
```
#### (Micro)Python
```Python
flipbook.animate([images.create_image("""
flipbook.animate([images.create_image(""
            . . # . .
                . # # . .
                . . # . .
                . . # . .
                . . # . .
        """),
        images.create_image("""
        images.create_image(""
            . # # . .
                # . . # .
                . . # . .
                . # . . .
                # # # # .
        """)],
    500)
```
### Beispiel
#### Blöcke
![Ein Beispiel für eine Animation](https://raw.githubusercontent.com/aha-ha/Files/main/Blocks2.png)
### Example
#### blocks
![An example of an animation](https://raw.githubusercontent.com/aha-ha/Files/main/Blocks5.png)
#### JavaScript / TypeScript
```TypeScript
```JavaScript
flipbook.animate([
images.createImage(`
    # # # # #
@@ -143,19 +143,19 @@
        """)],
    300)
```
## Läuft eine Animation? #flipbook-isrunning
### Verwendung
#### Blöcke
![Abfrage "Läuft eine Animation"](https://raw.githubusercontent.com/aha-ha/Files/main/Blocks3.png)
## Is an animation running? #flipbook-isrunning
### Usage
#### blocks
![Query "Is an animation running?"](https://raw.githubusercontent.com/aha-ha/Files/main/Blocks6.png)
#### JavaScript / TypeScript
```JavaScript
if (flipbook.isrunning()) {
	// Animation läuft
	// animation is running
}
```
#### (Micro)Python
```Python
if flipbook.isrunning():
    # Animation läuft
    # animation is running
    pass
```
