import {Component} from "@angular/core";

@Component({
    selector: "app-produto", //tag where the ProductComponent is rendered
    template: "<html><body>{{getName()}}</body></html>"
})

export class ProductComponent {
    public name: string;
    public availableToSell: boolean;

    public getName(): string {
        return "Hello World";
    }


}