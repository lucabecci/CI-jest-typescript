import express, { Application, Request, Response } from "express";
import { add } from "./helpers/calculate";
class Server {
    public _app: Application;

    constructor() {
        this._app = express();
        this._app.use(express.json());
        this._app.use(express.urlencoded({ extended: false }));
        this.initRoutes();
    }

    private initRoutes() {
        this._app.get("/", (_req: Request, res: Response) => {
            return res.status(200).json({
                success: true,
                message: "Hello",
            });
        });

        this._app.post("/calculate", (req: Request, res: Response) => {
            try {
                const { n1, n2 } = req.body;
                if (n1 == null || n2 == null) {
                    return res.status(400).json({
                        success: false,
                        message: "Please complete the params",
                    });
                }
                if (typeof n1 != "number" || typeof n2 != "number") {
                    return res.status(400).json({
                        success: false,
                        message: "Please send numbers",
                    });
                }
                const result = add(n1, n2);
                return res.status(200).json({
                    success: true,
                    result: result,
                });
            } catch (e) {
                console.log(e);
                return res.status(500).json({
                    success: false,
                    message: "Internal server error",
                });
            }
        });
    }

    public run() {
        this._app.listen(process.env.PORT || 3000, () => {
            console.log("Server on PORT:", process.env.PORT || 3000);
        });
    }
}

export default Server;
