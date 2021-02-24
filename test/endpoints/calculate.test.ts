import request from "supertest";
import Server from "../../src/server";

describe("Test in calculate endpoint", () => {
    const server = new Server();
    //first
    test("POST /calculate - if everything is correct", async () => {
        const result = await request(server._app)
            .post("/calculate")
            .send({ n1: 25, n2: 25 });
        expect(result.text).toEqual(
            JSON.stringify({
                success: true,
                result: 50,
            })
        );
        expect(result.status).toEqual(200);
    });

    //second
    test("POST /calculate - if the client not send n1 and n2", async () => {
        const result = await request(server._app).post("/calculate");
        expect(result.text).toEqual(
            JSON.stringify({
                success: false,
                message: "Please complete the params",
            })
        );
        expect(result.status).toEqual(400);
    });

    //third
    test("POST /calculate - if the client not send a number type", async () => {
        const result = await request(server._app)
            .post("/calculate")
            .send({ n1: "25", n2: "25" });
        expect(result.text).toEqual(
            JSON.stringify({
                success: false,
                message: "Please send numbers",
            })
        );
        expect(result.status).toEqual(400);
    });
});
