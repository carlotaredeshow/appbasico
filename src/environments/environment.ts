// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://appbasico.web.app/cadastro',
  firebaseConfig : {
    apiKey: "AIzaSyBwPqVXENq1MpLIm1QXUBBAeoRtwDNNC_8",
    authDomain: "appbasico.firebaseapp.com",
    databaseURL: "https://appbasico.firebaseio.com",
    projectId: "appbasico",
    storageBucket: "appbasico.appspot.com",
    messagingSenderId: "844488375730",
    appId: "1:844488375730:web:c34a54e4fdc2c465b438ab"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
