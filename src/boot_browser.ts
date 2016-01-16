import { platform } from 'angular2/core';
import { BROWSER_PROVIDERS, BROWSER_APP_PROVIDERS, } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { App } from './app/app';

platform(BROWSER_PROVIDERS).application(BROWSER_APP_PROVIDERS).bootstrap(App, [
  ROUTER_PROVIDERS
])
.then(() => {
  document.dispatchEvent(new Event('BootstrapComplete'));
});