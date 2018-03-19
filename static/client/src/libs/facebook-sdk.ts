import secrets  from './../environments/secrets';

(<any>window).fbAsyncInit = ()=> {
    FB.init({
      appId            : secrets.facebookAppId,
      cookie           : true, 
      xfbml            : false,
      version          : 'v2.9'
    });
    FB.AppEvents.logPageView();
};

(function(d, s, id){
    let js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "assets/js/facebook-sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));