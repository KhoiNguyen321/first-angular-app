import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header.component';
import { error } from 'console';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  bootstrapApplication(HeaderComponent, appConfig)
  .catch((err)=> console.error(err));
  