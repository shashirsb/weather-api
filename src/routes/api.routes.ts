import * as express from "express";
import WeatherController from "./../controller/weathercontroller";


class ApiRoutes {
    public router: express.Router;
    public weatherCtrl: WeatherController;

    constructor() {
        this.router = express.Router();
        this.weatherCtrl = new WeatherController();
    this.init();

    }

    init() {
        const prefix = "/api/";

        // Weather Controller

        this.router.post(prefix + "weather/findByCityId", this.weatherCtrl.findWeatherByCityID);
        this.router.post(prefix + "weather/findByCityName", this.weatherCtrl.findWeatherByCityName);

        
    }

}

export default new ApiRoutes();