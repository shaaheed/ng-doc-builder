import { CommonService } from "./services/common.service";
import { BaseCommonComponent } from "./base-common.component";

export class BaseConfigComponent extends BaseCommonComponent {

    model: any;

    constructor(public common: CommonService) {
        super(common);
    }

    initModel<T>() {
        this.model = this.common.getModel<T>();
        this.common.openSettings.subscribe(x => {
            this.model = this.common.getModel<T>();
        })
    }

}