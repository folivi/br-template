import { Injectable } from '@angular/core';
import {MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';


export class BrMissingTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams) {
      console.log("params", params);

        return '[missing translation]';
    }
}
