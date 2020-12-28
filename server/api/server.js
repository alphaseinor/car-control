const express = require('express');
require('dotenv').config();

const server = express();

const circuitRouter = require('./circuit/circuit-router').router

server.use(express.json());

server.use('/circuit', circuitRouter)

server.use('/', (req, res)=>{
  res.status(200).json({error: "none", coding: process.env.CODING})
})


exports.server = server

