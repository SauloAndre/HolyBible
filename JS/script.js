let vers;
let escolha;

const text = document.querySelector('#versicle');

function randonVerse() {
    escolha = Math.round(Math.random() * 10);
    switch (escolha) {
        case 1:
            vers = "Vengeance is mine, and recompense,At the time when their foot shall slide: For the day of their calamity is at hand, And the things that are to come upon them shall make haste. - Deuteronômio 32:35";
            break;
        case 2:
            vers = "Thine eyes did see mine unformed substance; And in thy book they were all written, Even the days that were ordained for me, When as yet there was none of them... - Salmos 139:16";
            break;
        case 3:
            vers = "But he was wounded for our transgressions, he was bruised for our iniquities; the chastisement of our peace was upon him; and with his stripes we are healed. - Isaías 53:5";
            break;
        case 4:
            vers = "I have loved you, saith Jehovah. Yet ye say, Wherein hast thou loved us? Was not Esau Jacob’s brother? saith Jehovah: yet I loved Jacob; - Malaquias 1:2";
            break;
        case 5:
            vers = "In the beginning was the Word, and the Word was with God, and the Word was God. - João 1:1";
            break;
        case 6:
            vers = "because that, knowing God, they glorified him not as God, neither gave thanks; but became vain in their reasonings, and their senseless heart was darkened. - Romanos 1:21";
            break;
        case 7:
            vers = "And such were some of you: but ye were washed, but ye were sanctified, but ye were justified in the name of the Lord Jesus Christ, and in the Spirit of our God. - 1 Coríntios 6:11";
            break;
        case 8:
            vers = "For we are his workmanship, created in Christ Jesus for good works, which God afore prepared that we should walk in them. - Efésios 2:10";
            break;
        case 9:
            vers = "For when by reason of the time ye ought to be teachers, ye have need again that some one teach you the rudiments of the first principles of the oracles of God; and are become such as have need of milk, and not of solid food. - Hebreus 5:12";
            break;
        case 10:
            vers = "We love, because he first loved us. - 1 João 4:19"
            break;
        default:
            break;
    }

    text.textContent = vers;
}

window.onload = function() {
    randonVerse();
}


