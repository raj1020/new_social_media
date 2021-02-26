import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import {MONGOURI} from './keys';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect(MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true});



//