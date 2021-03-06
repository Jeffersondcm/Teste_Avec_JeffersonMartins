import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ServiceProvider } from '../providers/Service/Service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SobrePage } from '../pages/sobre/sobre';
import { SitePage } from '../pages/site/site';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SobrePage,
    SitePage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SobrePage,
    SitePage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
