
> Irgendwelche Probleme? Öffne die Seite [hier.](https://aha-ha.github.io/animations-erweiterung/)
## Die Erweiterung zu Makecode hinzufügen

Dieses Repository kann als **Erweiterung** in MakeCode hinzugefügt werden.

* öffne [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klicke auf **Neues Projekt**
* klicke auf **Erweiterungen** unter dem Zahnrad-Menü
* nach **https://github.com/aha-ha/animations-erweiterung** suchen und importieren
Klappt nicht? Dann importiere die [hex-Datei](https://raw.githubusercontent.com/aha-ha/Files/main/flipbook-ext.hex) (Eventuell noch Rechtsklick und Speichern unter drücken, falls der Browser nur Zahlensalat anzeigt statt die Datei herunterzuladen...)
Achtung: Dafür gibt es nur selten Updates...

## Dieses Projekt bearbeiten
Hast du eine Idee, wie man die Erweiterung verbessern oder Fehler beheben kann?
* Dann öffne [das Repository](https://github.com/aha-ha/animations-erweiterung)
* und kopiere dieses Repository mit der Schaltfläche "Fork".
* öffne [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klicke auf **Importieren** und dann auf **Dein GitHub-Repository**
* wähle das Repository aus. Das sollte **DeinBenutzername/animations-erweiterung** sein, wenn du das Repository nicht umbenannt hast.
* Fertig! Viel Spaß beim bearbeiten.

# Docs
## Starte Animation #flipbook-animate
Spielt eine Reihe von Bildern hintereinander ab, ähnlich wie bei einem Daumenkino.
### Verwendung
#### Blöcke
![Animiere Bild1, Bild2 alle 500 ms](https://raw.githubusercontent.com/aha-ha/Files/main/Blocks1.png)
#### JavaScript / TypeScript
```TypeScript
flipbook.animate([images.createImage(`
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    . . # . .
    `), images.createImage(`
    . # # . .
    # . . # .
    . . # . .
    . # . . .
    # # # # .
    `)], 500)
```
#### (Micro)Python
```Python
flipbook.animate([images.create_image("""
            . . # . .
                . # # . .
                . . # . .
                . . # . .
                . . # . .
        """),
        images.create_image("""
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
#### JavaScript / TypeScript
```TypeScript
flipbook.animate([
images.createImage(`
    # # # # #
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `),
images.createImage(`
    # # # # #
    # # # # #
    # # . . .
    # # . . .
    # # . . .
    `),
images.createImage(`
    # # # # #
    # # # # #
    # # # # #
    # # # . .
    # # # . .
    `),
images.createImage(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # .
    `),
images.createImage(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
], 300)

```
#### (Micro)Python
```Python
flipbook.animate([images.create_image("""
            # # # # #
                # . . . .
                # . . . .
                # . . . .
                # . . . .
        """),
        images.create_image("""
            # # # # #
                # # # # #
                # # . . .
                # # . . .
                # # . . .
        """),
        images.create_image("""
            # # # # #
                # # # # #
                # # # # #
                # # # . .
                # # # . .
        """),
        images.create_image("""
            # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # .
        """),
        images.create_image("""
            # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
        """)],
    300)
```
## Läuft eine Animation? #flipbook-isrunning
### Verwendung
#### Blöcke
![Abfrage "Läuft eine Animation"](https://raw.githubusercontent.com/aha-ha/Files/main/Blocks3.png)
#### JavaScript / TypeScript
```JavaScript
if (flipbook.isrunning()) {
	// Animation läuft
}
```
#### (Micro)Python
```Python
if flipbook.isrunning():
    # Animation läuft
    pass
```