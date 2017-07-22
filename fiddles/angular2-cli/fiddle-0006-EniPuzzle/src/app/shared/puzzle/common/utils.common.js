"use strict";
var Utils = (function () {
    function Utils() {
    }
    Utils.isEven = function (x) {
        return (x % 2) === 0;
    };
    Utils.generateSequence = function (min, max, count) {
        var range = [], number = 0, i = 0;
        while (i < count) {
            number = Math.floor(Math.random() * (max - min + 1)) + min;
            if (range.indexOf(number) === -1) {
                range.push(number);
                i++;
            }
        }
        return range;
    };
    Utils.generateSequentialSequence = function (min, max) {
        var sequence = [], i = 0, number = min, count = (max - min);
        if (count > 0) {
            while (i < (count + 1)) {
                sequence.push(number);
                number++;
                i++;
            }
        }
        return sequence;
    };
    Utils.generateGameSequence = function (min, max, count) {
        var sequence = this.generateSequence(min, max, count);
        while (!this.isValid(sequence)) {
            sequence = this.generateSequence(min, max, count);
        }
        return sequence;
    };
    Utils.isValid = function (sequence) {
        var inversionCounts = [], inversionSum = 0;
        sequence.forEach(function (a, x, arr) {
            var inversions = arr.filter(function (b, y) {
                return y > x && b < a;
            });
            if (inversions.length) {
                inversionCounts.push(inversions.length);
            }
            else {
                inversionCounts.push(0);
            }
        });
        inversionCounts.forEach(function (cnt) {
            inversionSum += cnt;
        });
        return this.isEven(inversionSum);
    };
    Utils.mapLevelDimensions = function (level) {
        switch (level) {
            case 8:
                return {
                    cols: 10,
                    rows: 10
                };
            case 7:
                return {
                    cols: 9,
                    rows: 9
                };
            case 6:
                return {
                    cols: 8,
                    rows: 8
                };
            case 5:
                return {
                    cols: 7,
                    rows: 7
                };
            case 4:
                return {
                    cols: 6,
                    rows: 6
                };
            case 3:
                return {
                    cols: 5,
                    rows: 5
                };
            case 2:
                return {
                    cols: 4,
                    rows: 4
                };
            default:
                return {
                    cols: 3,
                    rows: 3
                };
        }
    };
    Utils.overlay = function (updates, obj) {
        for (var prop in updates) {
            if (obj.hasOwnProperty(prop)) {
                obj[prop] = updates[prop];
            }
        }
        return obj;
    };
    Utils.mapColClass = function (value) {
        switch (value) {
            case 1:
            case 9:
            case 17:
            case 25:
            case 33:
            case 41:
            case 49:
            case 57:
                return 'col-a';
            case 2:
            case 10:
            case 18:
            case 26:
            case 34:
            case 42:
            case 50:
            case 58:
                return 'col-b';
            case 3:
            case 11:
            case 19:
            case 27:
            case 35:
            case 43:
            case 51:
            case 59:
                return 'col-c';
            case 4:
            case 12:
            case 20:
            case 28:
            case 36:
            case 44:
            case 52:
            case 60:
                return 'col-d';
            case 5:
            case 13:
            case 21:
            case 29:
            case 37:
            case 45:
            case 53:
            case 61:
                return 'col-e';
            case 6:
            case 14:
            case 22:
            case 30:
            case 38:
            case 46:
            case 54:
            case 62:
                return 'col-f';
            case 7:
            case 15:
            case 23:
            case 31:
            case 39:
            case 47:
            case 55:
            case 63:
                return 'col-g';
            default:
                return 'col-h';
        }
    };
    Utils.parseSubSequence = function (sequence, pos, range) {
        var subSequence = [], i = pos, lim = pos + range;
        sequence.map(function (element) {
            while (i < lim) {
                subSequence.push(sequence[i]);
                i++;
            }
        });
        return subSequence;
    };
    Utils.isValidMove = function (a, b) {
        var rowDelta = Math.abs(a.row - b.row), colDelta = Math.abs(a.col - b.col);
        if (a.col === b.col) {
            return (rowDelta === 1) && (colDelta === 0);
        }
        return false;
    };
    Utils.swap = function (a, b) {
        var valueA = a.value, isEmptyA = a.isEmpty, cssClassA = a.cssClass, valueB = b.value, isEmptyB = b.isEmpty, cssClassB = b.cssClass;
        a.value = valueB;
        a.isEmpty = isEmptyB;
        a.cssClass = cssClassB;
        b.value = valueA;
        b.isEmpty = isEmptyA;
        b.cssClass = cssClassA;
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXRpbHMuY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTtJQUFBO0lBNk9BLENBQUM7SUEzT1EsWUFBTSxHQUFiLFVBQWMsQ0FBQztRQUNiLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVNLHNCQUFnQixHQUF2QixVQUF3QixHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUs7UUFFckMsSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUNaLE1BQU0sR0FBRyxDQUFDLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVSLE9BQU8sQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDO1lBQ2pCLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDM0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25CLENBQUMsRUFBRSxDQUFDO1lBQ04sQ0FBQztRQUNILENBQUM7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVNLGdDQUEwQixHQUFqQyxVQUFrQyxHQUFHLEVBQUUsR0FBRztRQUN4QyxJQUFJLFFBQVEsR0FBRyxFQUFFLEVBQ2YsQ0FBQyxHQUFHLENBQUMsRUFDTCxNQUFNLEdBQUcsR0FBRyxFQUNaLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLE9B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QUFDO1FBRWpDLENBQUMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBRXZCLENBQUMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFFSCxZQUFDO0FBQUQsQ0FBQyxBQTdPRCxJQTZPQztBQTdPWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3F1YXJlT3B0aW9uc0ludGVyZmFjZX0gZnJvbSAnLi4vaW5kZXgnO1xuXG5leHBvcnQgY2xhc3MgVXRpbHMge1xuXG4gIHN0YXRpYyBpc0V2ZW4oeCkge1xuICAgIHJldHVybiAoeCAlIDIpID09PSAwO1xuICB9XG5cbiAgc3RhdGljIGdlbmVyYXRlU2VxdWVuY2UobWluLCBtYXgsIGNvdW50KSB7XG5cbiAgICBsZXQgcmFuZ2UgPSBbXSxcbiAgICAgIG51bWJlciA9IDAsXG4gICAgICBpID0gMDtcblxuICAgIHdoaWxlIChpIDwgY291bnQpIHtcbiAgICAgIG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gICAgICBpZiAocmFuZ2UuaW5kZXhPZihudW1iZXIpID09PSAtMSkge1xuICAgICAgICByYW5nZS5wdXNoKG51bWJlcik7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZ2U7XG4gIH1cblxuICBzdGF0aWMgZ2VuZXJhdGVTZXF1ZW50aWFsU2VxdWVuY2UobWluLCBtYXgpIHtcbiAgICBsZXQgc2VxdWVuY2UgPSBbXSxcbiAgICAgIGkgPSAwLFxuICAgICAgbnVtYmVyID0gbWluLFxuICAgICAgY291bnQgPSAobWF4IC0gbWluKTtcbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICB3aGlsZSAoaSA8IChjb3VudCArIDEpKSB7XG4gICAgICAgIHNlcXVlbmNlLnB1c2gobnVtYmVyKTtcbiAgICAgICAgbnVtYmVyKys7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNlcXVlbmNlO1xuICB9XG5cbiAgc3RhdGljIGdlbmVyYXRlR2FtZVNlcXVlbmNlKG1pbiwgbWF4LCBjb3VudCkge1xuICAgIGxldCBzZXF1ZW5jZSA9IHRoaXMuZ2VuZXJhdGVTZXF1ZW5jZShtaW4sIG1heCwgY291bnQpO1xuICAgIHdoaWxlICghdGhpcy5pc1ZhbGlkKHNlcXVlbmNlKSkge1xuICAgICAgc2VxdWVuY2UgPSB0aGlzLmdlbmVyYXRlU2VxdWVuY2UobWluLCBtYXgsIGNvdW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcXVlbmNlO1xuICB9XG5cbiAgc3RhdGljIGlzVmFsaWQoc2VxdWVuY2UpIHtcblxuICAgIGxldCBpbnZlcnNpb25Db3VudHMgPSBbXSxcbiAgICAgIGludmVyc2lvblN1bSA9IDA7XG5cbiAgICBzZXF1ZW5jZS5mb3JFYWNoKGZ1bmN0aW9uIChhLCB4LCBhcnIpIHtcbiAgICAgIGxldCBpbnZlcnNpb25zID0gYXJyLmZpbHRlcihmdW5jdGlvbiAoYiwgeSkge1xuICAgICAgICByZXR1cm4geSA+IHggJiYgYiA8IGE7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGludmVyc2lvbnMubGVuZ3RoKSB7XG4gICAgICAgIGludmVyc2lvbkNvdW50cy5wdXNoKGludmVyc2lvbnMubGVuZ3RoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludmVyc2lvbkNvdW50cy5wdXNoKDApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaW52ZXJzaW9uQ291bnRzLmZvckVhY2goZnVuY3Rpb24gKGNudCkge1xuICAgICAgaW52ZXJzaW9uU3VtICs9IGNudDtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmlzRXZlbihpbnZlcnNpb25TdW0pO1xuICB9XG5cbiAgc3RhdGljIG1hcExldmVsRGltZW5zaW9ucyhsZXZlbCkge1xuICAgIHN3aXRjaCAobGV2ZWwpIHtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb2xzOiAxMCxcbiAgICAgICAgICByb3dzOiAxMFxuICAgICAgICB9O1xuICAgICAgY2FzZSA3OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbHM6IDksXG4gICAgICAgICAgcm93czogOVxuICAgICAgICB9O1xuICAgICAgY2FzZSA2OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbHM6IDgsXG4gICAgICAgICAgcm93czogOFxuICAgICAgICB9O1xuICAgICAgY2FzZSA1OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbHM6IDcsXG4gICAgICAgICAgcm93czogN1xuICAgICAgICB9O1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbHM6IDYsXG4gICAgICAgICAgcm93czogNlxuICAgICAgICB9O1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbHM6IDUsXG4gICAgICAgICAgcm93czogNVxuICAgICAgICB9O1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbHM6IDQsXG4gICAgICAgICAgcm93czogNFxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb2xzOiAzLFxuICAgICAgICAgIHJvd3M6IDNcbiAgICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgb3ZlcmxheSh1cGRhdGVzLCBvYmopIHtcbiAgICBmb3IgKHZhciBwcm9wIGluIHVwZGF0ZXMpIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgb2JqW3Byb3BdID0gdXBkYXRlc1twcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHN0YXRpYyBtYXBDb2xDbGFzcyh2YWx1ZSkge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgIGNhc2UgOTpcbiAgICAgIGNhc2UgMTc6XG4gICAgICBjYXNlIDI1OlxuICAgICAgY2FzZSAzMzpcbiAgICAgIGNhc2UgNDE6XG4gICAgICBjYXNlIDQ5OlxuICAgICAgY2FzZSA1NzpcbiAgICAgICAgcmV0dXJuICdjb2wtYSc7XG4gICAgICBjYXNlIDI6XG4gICAgICBjYXNlIDEwOlxuICAgICAgY2FzZSAxODpcbiAgICAgIGNhc2UgMjY6XG4gICAgICBjYXNlIDM0OlxuICAgICAgY2FzZSA0MjpcbiAgICAgIGNhc2UgNTA6XG4gICAgICBjYXNlIDU4OlxuICAgICAgICByZXR1cm4gJ2NvbC1iJztcbiAgICAgIGNhc2UgMzpcbiAgICAgIGNhc2UgMTE6XG4gICAgICBjYXNlIDE5OlxuICAgICAgY2FzZSAyNzpcbiAgICAgIGNhc2UgMzU6XG4gICAgICBjYXNlIDQzOlxuICAgICAgY2FzZSA1MTpcbiAgICAgIGNhc2UgNTk6XG4gICAgICAgIHJldHVybiAnY29sLWMnO1xuICAgICAgY2FzZSA0OlxuICAgICAgY2FzZSAxMjpcbiAgICAgIGNhc2UgMjA6XG4gICAgICBjYXNlIDI4OlxuICAgICAgY2FzZSAzNjpcbiAgICAgIGNhc2UgNDQ6XG4gICAgICBjYXNlIDUyOlxuICAgICAgY2FzZSA2MDpcbiAgICAgICAgcmV0dXJuICdjb2wtZCc7XG4gICAgICBjYXNlIDU6XG4gICAgICBjYXNlIDEzOlxuICAgICAgY2FzZSAyMTpcbiAgICAgIGNhc2UgMjk6XG4gICAgICBjYXNlIDM3OlxuICAgICAgY2FzZSA0NTpcbiAgICAgIGNhc2UgNTM6XG4gICAgICBjYXNlIDYxOlxuICAgICAgICByZXR1cm4gJ2NvbC1lJztcbiAgICAgIGNhc2UgNjpcbiAgICAgIGNhc2UgMTQ6XG4gICAgICBjYXNlIDIyOlxuICAgICAgY2FzZSAzMDpcbiAgICAgIGNhc2UgMzg6XG4gICAgICBjYXNlIDQ2OlxuICAgICAgY2FzZSA1NDpcbiAgICAgIGNhc2UgNjI6XG4gICAgICAgIHJldHVybiAnY29sLWYnO1xuICAgICAgY2FzZSA3OlxuICAgICAgY2FzZSAxNTpcbiAgICAgIGNhc2UgMjM6XG4gICAgICBjYXNlIDMxOlxuICAgICAgY2FzZSAzOTpcbiAgICAgIGNhc2UgNDc6XG4gICAgICBjYXNlIDU1OlxuICAgICAgY2FzZSA2MzpcbiAgICAgICAgcmV0dXJuICdjb2wtZyc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ2NvbC1oJztcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcGFyc2VTdWJTZXF1ZW5jZShzZXF1ZW5jZSwgcG9zLCByYW5nZSkge1xuICAgIGxldCBzdWJTZXF1ZW5jZSA9IFtdLFxuICAgICAgaSA9IHBvcyxcbiAgICAgIGxpbSA9IHBvcyArIHJhbmdlO1xuXG4gICAgc2VxdWVuY2UubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICB3aGlsZSAoaSA8IGxpbSkge1xuICAgICAgICBzdWJTZXF1ZW5jZS5wdXNoKHNlcXVlbmNlW2ldKTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YlNlcXVlbmNlO1xuXG4gIH1cblxuICBzdGF0aWMgaXNWYWxpZE1vdmUoYTogU3F1YXJlT3B0aW9uc0ludGVyZmFjZSwgYjogU3F1YXJlT3B0aW9uc0ludGVyZmFjZSk6IGJvb2xlYW4ge1xuICAgIGxldCByb3dEZWx0YSA9IE1hdGguYWJzKGEucm93IC0gYi5yb3cpLFxuICAgICAgY29sRGVsdGEgPSBNYXRoLmFicyhhLmNvbCAtIGIuY29sKTtcbiAgICBpZiAoYS5jb2wgPT09IGIuY29sKSB7XG4gICAgICByZXR1cm4gKHJvd0RlbHRhID09PSAxKSAmJiAoY29sRGVsdGEgPT09IDApO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBzd2FwKGE6IFNxdWFyZU9wdGlvbnNJbnRlcmZhY2UsIGI6IFNxdWFyZU9wdGlvbnNJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICBsZXQgdmFsdWVBOiBudW1iZXIgPSBhLnZhbHVlLFxuICAgICAgaXNFbXB0eUE6IGJvb2xlYW4gPSBhLmlzRW1wdHksXG4gICAgICBjc3NDbGFzc0E6IHN0cmluZyA9IGEuY3NzQ2xhc3MsXG4gICAgICB2YWx1ZUI6IG51bWJlciA9IGIudmFsdWUsXG4gICAgICBpc0VtcHR5QjogYm9vbGVhbiA9IGIuaXNFbXB0eSxcbiAgICAgIGNzc0NsYXNzQjogc3RyaW5nID0gYi5jc3NDbGFzcztcblxuICAgIGEudmFsdWUgPSB2YWx1ZUI7XG4gICAgYS5pc0VtcHR5ID0gaXNFbXB0eUI7XG4gICAgYS5jc3NDbGFzcyA9IGNzc0NsYXNzQjtcblxuICAgIGIudmFsdWUgPSB2YWx1ZUE7XG4gICAgYi5pc0VtcHR5ID0gaXNFbXB0eUE7XG4gICAgYi5jc3NDbGFzcyA9IGNzc0NsYXNzQTtcbiAgfVxuXG59XG4iXX0=