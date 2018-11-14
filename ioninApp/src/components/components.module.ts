import { NgModule } from '@angular/core';
import { MyComponent } from './my/my';
import { JiajuComponent } from './jiaju/jiaju';
@NgModule({
	declarations: [MyComponent,
    JiajuComponent],
	imports: [],
	exports: [MyComponent,
    JiajuComponent]
})
export class ComponentsModule {}
