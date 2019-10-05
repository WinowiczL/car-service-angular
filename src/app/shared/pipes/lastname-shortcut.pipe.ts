import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "lastnameShortcut"
})
export class LastnameShortcutPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (!value) {
      return "";
    } else {
      return value.charAt(0) + ".";
    }
  }
}
