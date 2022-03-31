"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let strong;
    (function (strong) {
        strong[strong["acuaman"] = 0] = "acuaman";
        strong[strong["batman"] = 1] = "batman";
        strong[strong["flash"] = 5] = "flash";
        strong[strong["superman"] = 100] = "superman";
    })(strong || (strong = {}));
    const fuerzaFlash = strong.flash;
    const fuerzaSuperman = strong.superman;
    const fuerzaBatman = strong.batman;
    const fuerzaAcuaman = strong.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
