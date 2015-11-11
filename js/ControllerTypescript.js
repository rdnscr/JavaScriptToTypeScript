var MyTypescriptController = (function () {
    function MyTypescriptController($scope) {
        this.variable = "Blog Controller reporting for duty.";
        this.$inject = ["$scope"];
        this.method();
    }
    MyTypescriptController.prototype.method = function () {
        console.log(this.variable);
    };
    return MyTypescriptController;
})();
/**
 * Controls the Blog
 */
app.controller('BlogCtrl', MyTypescriptController);
//# sourceMappingURL=ControllerTypescript.js.map