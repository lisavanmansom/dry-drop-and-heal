# scroll-driven-animation / creative coding spike

**Live-link: https://dry-drop-and-heal-git-homepage-s-6f2274-lisavanmansoms-projects.vercel.app/homepage**

### Thema

![Image](https://github.com/user-attachments/assets/bfb73bca-5e4b-404b-9805-1365e3c28d16)

### Scrolldriven animation 1

Ik heb in Figma 2 'glass windows' gemaakt, deze wil ik via een scrolldriven-animation uit het scherm animeren. Als je de site opent is de bedoeling dat je niks ziet door het glass-effect. Als je scrollt verplaatsen de png's uit de viewport en kan je de inhoud van de site bekijken

The cover starts at a height of 100vh and shrinks to 10vh as you scroll the root scroller. This is done over a scroll distance of 90vh, put in place using the animation-range property.

Note that you can’t use position: sticky; here though, as resizing the cover’s height would shrink down the entire height of the document, and therefore affecting the available scroll distance. Instead, the cover is positioned using position: fixed;. To counteract the content jumping up in response, a margin-top of 100vh is added to the body.

### Scrolldriven animation 2

De _sticky skeleton_ animatie is op dezelfde manier opgebouwd als de _glass animation_ alleen blijft de skeleton sticky in beeld tijdens het scrollen. Dit zou eventueel ook met `position: sticky;` mogelijk zijn. Aan de onderkant van de section verdwijnt de skeleton, hierdoor is er een mogelijkheid om verder te gaan met andere sections.

### Scrolldriven animation 3 / Horizontal scroll section

Ik heb de `section` een volledige viewport height gegeven voor zodat het eenvoudige kan scrollen. Door de viewtimeline kan de er getracked worden wanneer er gehorizontaal moet worden gescrolled.

Bij `.pin-wrap-sticky` is de property `position: sticky;` meegegeven zodat het in beeld blijft tijdens het scrollen. De `.pin-wrap` wordt uiteindelijk geanimeerd op de `viewtimeline`. Verder staan er properties voor de positie bij `.pin-wrap` class, hierdoor kan alles zichtbaar worden tijdens de horizontal scroll.

# Visuals

<img width="1050" alt="Scherm­afbeelding 2024-12-06 om 10 19 17" src="https://github.com/user-attachments/assets/7a6e29f5-4ca8-4c14-8514-cf68657abc37">
<img width="1050" alt="Scherm­afbeelding 2024-12-06 om 11 01 26" src="https://github.com/user-attachments/assets/8ddab5ef-ecc0-4148-8ea3-468d3a0a0d2b">
<img width="1050" alt="Scherm­afbeelding 2024-12-06 om 10 41 10" src="https://github.com/user-attachments/assets/c40c08b9-1ec4-4024-b8b5-cfbabacbdb66">
