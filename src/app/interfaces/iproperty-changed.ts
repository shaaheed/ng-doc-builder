// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { IProperty } from "./iproperty";

export interface IPropertyChanged {
    
    onPropertyChanged(newValue: IProperty, oldValue: IProperty): void;

}