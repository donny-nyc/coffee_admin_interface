import type Resource from '../core/infra/resource';

const as_query = (resources = [] as Resource[]): string => {
  let query_string: string = "";

  const resourceMap: Map<string, number[]> = 
    resources.reduce((pv: Map<string, number[]>, r: Resource) => {
      const values = pv.get(r.getResourceType()) || [] as number[];
      values.push(r.getId());
      pv.set(r.getResourceType(), values);
      return pv;
  }, new Map<string, number[]>());

  let resourceStrings: Map<string, string> = new Map<string, string>();

  resourceMap.forEach((value: number[], key: string) => {
    resourceStrings.set(key, key + '=' + value.join(','));
  });

  let values = resourceStrings.values();

  query_string = values.next().value;

  for(let v = values.next(); !v.done; v = values.next()) {
    query_string += '&' + v.value;
  }

  return query_string;
}

export default as_query;
