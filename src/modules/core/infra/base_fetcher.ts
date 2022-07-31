export default abstract class BaseFetcher {
  private api_url: string;
  private api_host: string;
  private api_port: number;
  private resource: string;

  constructor(resource: string) {
    this.resource = resource;

    this.api_host = import.meta.env.VITE_ADMIN_GATEWAY_HOST;
    this.api_port = import.meta.env.VITE_ADMIN_GATEWAY_PORT;

    let url = '';
    if(this.remote_gateway_configured()) {
      url = `http://${this.api_host}:${this.api_port}/${this.resource}`;
    }

    this.api_url = url;
  }

  public remote_gateway_configured(): boolean {
    let configured: boolean = true;

    if(!this.api_host) {
      console.info('api_host undefined');
      configured = false;
    }

    if(!this.api_port) {
      console.info('api_port undefined');
      configured = false;
    }

    if(!this.resource) {
      console.info('resource type undefined');
      configured = false;
    }

    return configured;
  }

  protected async fetch_api_resources(query = "" as string, id?: number): Promise<any> {
    let target: string = this.api_url;

    if(id) {
      target = '/' + id;
    }

    if(query) {
      target = target + '?' + query;
    }

    const response: Response = await fetch(target, {
      'Content-type': 'application/json'
    })
    .then(response => response.json())
    .catch((err: any) => console.error(err));

    return response;
  }
};
