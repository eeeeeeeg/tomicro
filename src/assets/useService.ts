import { App } from "@vue/runtime-core";

export function useService(app: App<Element>) {
  app.provide('routerBasePath', window.__MICRO_APP_ENVIRONMENT__ ? '/tabledemo/' : '/');
}