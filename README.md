## Find Soundcloud Things
todo: description
***
```npm install```  
```bower install```  
```gulp serve``` to serve develop locally  
```gulp serve:dist``` to serve build locally  
```gulp test``` to run unit tests  
note: add a copy of the fonts folder to ```src``` as a workaround to see fonts when running ```gulp serve```.  
fonts are currently only accessible from dist with gulp-angular. for more workarounds and more information  
check out https://github.com/Swiip/generator-gulp-angular/issues/637#issuecomment-119404773.  

***
### client ID  
Add a client id to the ```client-id.constant.js``` file
```javascript
.constant('CLIENT', {
    // provide soundcloud api client id
    ID: ''
});
```
You can obtain a client id by registering your app.  
Visit: https://developers.soundcloud.com/ for details.  
API reference here: https://developers.soundcloud.com/docs/api/reference
