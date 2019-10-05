import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { LastnameShortcutPipe } from "./pipes/lastname-shortcut.pipe";
import { ImportantDirective } from './directives/important.directive';

@NgModule({
  declarations: [HeaderComponent, LastnameShortcutPipe, ImportantDirective],
  imports: [CommonModule],
  exports: [HeaderComponent, LastnameShortcutPipe, ImportantDirective]
})
export class SharedModule {}
