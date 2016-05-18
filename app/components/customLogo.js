function customLogo() {

    return {
        restrict: "A,E,C",

        //A Stands of attribute
        //E stands for Element
        //C stands for class
        template: '<a href="#" class="navbar-brand">bbbbb</a>'

    };
}

angular.module('vehicleDealers')
    .directive('customLogo', [customLogo])
