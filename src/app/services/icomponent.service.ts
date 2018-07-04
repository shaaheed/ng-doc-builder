import { Subject } from "rxjs/Subject";
import { IPropertyChanged } from "../interfaces/iproperty-changed";
import { IProperty } from "../interfaces/iproperty";

export interface IComponentService {

    selectedComponent: { id: string, name: string }
    componentClicked: Subject<any>;
    configClicked: Subject<any>;
    valueChanged: Subject<{ newValue: IProperty, oldValue: IProperty }>;

}