import express from 'express';
import { join } from 'path';
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

const jobName = 'Widevine over MPEG-DASH';
