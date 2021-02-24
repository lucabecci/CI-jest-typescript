import request from "supertest";
import Server from "../../src/server";

describe("Test in index endpoint", () => {
    const server = new Server();
    test("GET / - index endpoint of index service", async () => {
        const result = await request(server._app).get("/");
        expect(result.text).toEqual(
            JSON.stringify({
                success: true,
                message: "Hello",
            })
        );
        expect(result.status).toEqual(200);
    });
});
