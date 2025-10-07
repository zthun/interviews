import { ZLogEntryBuilder, ZLoggerConsole } from "@zthun/lumberjacky-log";
import { Welcome } from "./index.mjs";

const logger = new ZLoggerConsole(console);

logger.log(new ZLogEntryBuilder().info().message(Welcome).build());
