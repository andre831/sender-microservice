import express from "express";

export interface Server {
  app: express.Express;
  port: number;
  start(): void;
}
