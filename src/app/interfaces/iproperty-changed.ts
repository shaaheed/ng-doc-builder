import { IProperty } from "./iproperty";

export interface IPropertyChanged {
    
    onPropertyChanged(newValue: IProperty, oldValue: IProperty): void;

}