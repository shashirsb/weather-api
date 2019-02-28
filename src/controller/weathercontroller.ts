import { Request, Response } from "express";
import * as express from "express";
import DataService from "../shared/services/data.services";
import { MainModel } from "../model/main.model";


export default class WeatherController {
    
    output: any;
    async findWeatherByCityName(req: Request, res: Response) {
        try {
            const vlModel = new MainModel();
            vlModel.baseUrl = "http://api.openweathermap.org";
            vlModel.apiKey = "87925b4a96e1fe685e6ff08db9ecc166";
            const params = req.body;
            const path = "/data/2.5/weather?";
            const queryString = "q=" + params.place;
            const url = path + queryString;
            let URL = vlModel.baseUrl + url + "&appid=" + vlModel.apiKey;
            // Call external api
            let externalResponse = await DataService.get(URL).then(
                (data: any) => {
                    return data;
                }
            );
            externalResponse = JSON.parse(externalResponse);
            res.json({ status: true, data: externalResponse });
        } catch (error) {
            res.json({ status: false, error });
        }
    }

    async findWeatherByCityID(req: Request, res: Response) {
        try {
            const vlModel = new MainModel();
            vlModel.baseUrl = "http://api.openweathermap.org";
            vlModel.apiKey = "87925b4a96e1fe685e6ff08db9ecc166";
            const params = req.body;
            const path = "/data/2.5/weather?";
            const queryString = "id=" + params.id;
            const url = path + queryString;
            let URL = vlModel.baseUrl + url + "&appid=" + vlModel.apiKey;

            // Call external api
            let externalResponse = await DataService.get(URL).then(
                (data: any) => {
                    return data;
                }
            );
            externalResponse = JSON.parse(externalResponse);
            res.json({ status: true, data: externalResponse });
        } catch (error) {
            res.json({ status: false, error });
        }
    }
}