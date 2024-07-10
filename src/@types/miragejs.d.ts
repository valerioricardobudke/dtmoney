import { Server as MirageServer } from 'miragejs';
// src/@types/miragejs.d.ts
declare module 'miragejs' {
    interface ServerConfig {
        namespace: string;
        get: any;
    }
  
    export function createServer(config?: ServerConfig): any;
  }