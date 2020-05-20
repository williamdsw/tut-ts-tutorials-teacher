define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Band = /** @class */ (function () {
        function Band(name, genres, origin) {
            this.name = name;
            this.genres = genres;
            this.origin = origin;
        }
        Band.prototype.displayInformation = function () {
            console.log('Band Information \n', 'Name: ', this.name, '\nGenres: ', this.genres.join(','), '\nOrigin: ', this.origin);
        };
        return Band;
    }());
    exports.Band = Band;
});
