declare var app: any;

class MyTypescriptController{
    private variable: string = "Blog Controller reporting for duty.";

    private $inject: Array<string> = ["$scope"];

    constructor($scope: any){
        this.method();
    }

    private method(): void {
        console.log(this.variable);
    }
}

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', MyTypescriptController);