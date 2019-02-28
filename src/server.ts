import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";

import ApiRoutes from "./routes/api.routes";

class Server {
    public app: express.Application;
    constructor() {
      this.app = express();
      this.init();
    }

    public init() {
  
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use("/", ApiRoutes.router);
      }

}

// export
export default new Server().app;
