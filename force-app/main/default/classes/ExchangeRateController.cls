public with sharing class ExchangeRateController {
    @AuraEnabled(cacheable=true)
    public static Map<String, Object> getExchangeRates() {
        String endpoint = 'live';
        String access_key = '38fbefcddfe803de40c2b5fd3f61c419';
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('http://api.exchangerate.host/' + endpoint + '?access_key=' + access_key);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        if(response.getStatusCode() == 200) {
            return (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
        } else {
            return new Map<String, Object>{ 'error' => 'Failed to fetch exchange rates' };
        }
    }
}
