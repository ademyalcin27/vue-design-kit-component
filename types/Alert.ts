import type { ValueOf } from "./Helper";

export const Alerts = {
  INFO: "info",
  WARNING: "warning",
  ERROR: "error",
  SUCCESS: "success",
  MESSAGE: "message",
} as const;

export type AlertNames = ValueOf<typeof Alerts>;
