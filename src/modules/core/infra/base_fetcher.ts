import type Resource from './resource';

export default abstract class BaseFetcher {
  abstract get(): Resource;

  constructor(api_host: string, api_port: number, resource_type: string) {
    this.api_host = api_host;
    this.api_port = api_port;
    this.resource_type = resource_type;

    if(!this.api_host) {
      console.info(`[${this.resource_type}]: api_host undefined`);
    }

    if(!this.api_port) {
      console.info(`[${this.resource_type}]: api_port undefined`);
    }
  }

  prepare_api_url(): string {
    let url = undefined;

    if(this.api_host && this.api_port) {
      url = `http://${this.api_host}:${this.api_port}/${this.resource_type}`;
    }

    return url;
  }
};
