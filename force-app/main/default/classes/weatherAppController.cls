public with sharing class weatherAppController {

    @AuraEnabled
    public static String getWeatherDetails(String input){
        String url ='https://api.openweathermap.org/data/2.5/weather?q='+ input + '&units=metric' + getKey() ;
        String response =getResponse(url);
        return response;

    }

    public static String getResponse(String strUrl){
        Http http = new Http();
        HttpRequest req =new HttpRequest();
        HttpResponse res = new HttpResponse();
        req.setMethod('GET');
        req.setEndpoint(strUrl);
        req.setTimeout(12000);
        res= http.send(req);
        String responseBody =res.getBody();
        return responseBody;

    }


    public static string getKey(){
        String key ='66f7373cc270884c67970a74bb21f89f'; //System.Label.WeatherApiKey
        String output ='&appid=' + key;
        return output;

    }

}