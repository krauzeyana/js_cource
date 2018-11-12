(function () {

    function checkUndefined(value) {
        if (typeof value == "undefined") {
            console.log("You variable is undefined");
            return false;
        }
        else {
            console.log("You variable isn't undefined");
            return true;
        }
    }

    function checkNull(value) {
        if (value === null) {
            console.log("You variable is null");
            return false;
        }
        else {
            console.log("You variable isn't null");
            return true;
        }
    }

    function checkNaN(value) {
        if (isNaN(value)) {
            console.log("You variable is NaN");
            return false;
        }
        else {
            console.log("You variable isn't NaN");
            return true;
        }
    }

    function isEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }

        return true;
    }

    function myMap(obj) {
        var i = 0;
        for (var prop in obj) {
            obj[prop] = i;
            i++;
        }
        return obj;
    }

    function myRandom(from, to) {
        var rand = from - 0.5 + Math.random() * (to - from + 1)
        rand = Math.round(rand);
        return rand;
    }

    function myEquals(a, b) {
        if (a === b) {
            return true;
        }

        if (a == null || typeof (a) != "object" || b == null || typeof (b) != "object") {
            return false;
        }

        var propertiesA = 0, propertiesB = 0;
        for (var property in a) {
            propertiesA += 1;
        }
        for (var property in b) {
            propertiesB += 1;
            if (!(property in a) || !myEquals(a[property], b[property])) {
                return false;
            }
        }
        return propertiesA == propertiesB;
    }

    
    function deleteProperty(a){
        for(var pr in a){
            if(!checkNull(a[pr])){
                delete a[pr];
            }
        }
        return a;
    }
})();