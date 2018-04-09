import { NgForm } from '@angular/forms';

export class FormsUtils {

  static isValid(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      FormsUtils.runValidations(ngForm.form.controls);
      return false;
    }
    return true;
  }
   private static runValidations(controls) {
      for (const i in controls) {
        controls[i].markAsDirty();
        controls[i].markAsTouched();
      }
    }

}
