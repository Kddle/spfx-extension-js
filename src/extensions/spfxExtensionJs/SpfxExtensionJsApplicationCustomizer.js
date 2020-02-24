import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

const LOG_SOURCE = 'SpfxExtensionJsApplicationCustomizer';

/** A Custom Action which can be run during execution of a Client Side Application */
export default class SpfxExtensionJsApplicationCustomizer
  extends BaseApplicationCustomizer {

  onInit() {
    Log.info(LOG_SOURCE, `Initialized`);

    let message = "Heya";
    if (!message) {
      message = '(No properties were provided.)';
    }

    Dialog.alert(`Hello from :\n\n${message}`);

    return Promise.resolve();
  }
}
