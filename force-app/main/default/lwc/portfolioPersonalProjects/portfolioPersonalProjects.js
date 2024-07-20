import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class PortfolioPersonalProjects extends LightningElement {
    BMICalculator =`${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`
    AlarmClock =`${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`
    CurrencyCalculator =`${PortfolioAssets}/PortfolioAssets/Projects/CurrencyCalculator.png`
    WeatherApp =`${PortfolioAssets}/PortfolioAssets/Projects/WeatherApp.png`
    Survey =`${PortfolioAssets}/PortfolioAssets/Projects/Survey.png`
    NoteTakingApp =`${PortfolioAssets}/PortfolioAssets/Projects/NoteTakingApp.png`

    projects=[
        {
            "name":"BMI Calculator App",
            "img":this.BMICalculator,
            "link":"https://eduardodiazportfolio-dev-ed.develop.my.site.com/portfolio/bmi-calculator"
        },
        {
            "name":"Alarm Clock App",
            "img":this.AlarmClock,
            "link":"https://eduardodiazportfolio-dev-ed.develop.my.site.com/portfolio/alarm-clock"
        },
        {
            "name":"Currency Converter App",
            "img":this.CurrencyCalculator,
            "link":"https://eduardodiazportfolio-dev-ed.develop.my.site.com/portfolio/currency-converter"
        },
        {
            "name":"Weather App",
            "img":this.WeatherApp,
            "link":"https://eduardodiazportfolio-dev-ed.develop.my.site.com/portfolio/weather-app"
        },

        {
            "name":"Survey App",
            "img":this.Survey,
            "link":"https://eduardodiazportfolio-dev-ed.develop.my.site.com/survey/survey/runtimeApp.app?invitationId=0Kiak0000001CGr&surveyName=employee_survey&UUID=336d8197-4dff-47e6-94a8-df72c6b06a06"
        },

        {
            "name":"Note Taking App",
            "img":this.NoteTakingApp,
            "link":"https://eduardodiazportfolio-dev-ed.develop.my.site.com/portfolio/note-taking-app"
        }
        

    ]
}