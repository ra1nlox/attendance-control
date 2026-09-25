import * as pino from "pino"
import { format } from "date-and-time"

const now = new Date()
const formatedDate = format(now, "DD-MM-YYYY-HH-mm-ss")

const levels = {
  attendance: 35
}

const transport = pino.transport({
  targets: [
    {
      target: "pino-pretty",
      options: {
        destination: `./logs/${formatedDate}.log`,
        mkdir: true,
        append: true,
        colorize: false,
        translateTime: "SYS:dd-mm-yyyy HH:MM:ss",
        ignore: "pid,hostname",
        customLevels: "trace:10,debug:20,info:30,attendance:35,warn:40,error:50,fatal:60"
      }
    },
    {
      target: "pino-pretty",
      options: {
        destination: process.stdout.fd,
        colorize: true,
        translateTime: "SYS:dd-mm-yyyy HH:MM:ss",
        ignore: "pid,hostname",
        customLevels: "trace:10,debug:20,info:30,attendance:35,warn:40,error:50,fatal:60"
      }
    }
  ]
})

const logger = pino.pino({
  customLevels: levels,
}, transport)

export default logger
