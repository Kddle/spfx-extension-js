import React from 'react';
import ReactDOM from 'react-dom';
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer, PlaceholderName } from '@microsoft/sp-application-base';
import HelloWorld from './components/HelloWorld';

const LOG_SOURCE = 'SpfxExtensionJsApplicationCustomizer';

/** A Custom Action which can be run during execution of a Client Side Application */
export default class SpfxExtensionJsApplicationCustomizer extends BaseApplicationCustomizer {
  onInit() {
    Log.info(LOG_SOURCE, `SPFX-Extension-JS Initializing...`);

    this.context.placeholderProvider.changedEvent.add(this, this.renderExtension);
    this.renderExtension();

    return Promise.resolve();
  }

  renderExtension() {
    if (!this._bottomPlaceholder) {
      this._bottomPlaceholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom);

      if (!this._bottomPlaceholder) {
        Log.error(LOG_SOURCE, "Couldn't create the bottom placeholder element.");
        return;
      }

      const element = React.createElement(HelloWorld);
      ReactDOM.render(element, this._bottomPlaceholder.domElement);

      Log.info(LOG_SOURCE, `SPFX-Extension-JS Initialized !`);
    }
  }
}
