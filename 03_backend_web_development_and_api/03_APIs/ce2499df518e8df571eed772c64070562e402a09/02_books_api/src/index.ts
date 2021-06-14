import fetch, { Response } from "node-fetch";
import * as data from "./data/library.json";
import { startServer } from "./server";

startServer(data);
