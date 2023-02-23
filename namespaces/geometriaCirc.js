"use strict";
//NAMESPACE
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        Area.Pi = 3.14;
        function circunferencia(raio) {
            return Area.Pi * Math.pow(raio, 2); //Área da circunferência
        }
        Area.circunferencia = circunferencia;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
//# sourceMappingURL=geometriaCirc.js.map