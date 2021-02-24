import Server from "../../src/server";
import express from "express";

describe("Tests in Server", () => {
    const server = new Server();
    it("Test in server for compared with Application  ", () => {
        expect(typeof server._app).toEqual(typeof express);
    });
});
