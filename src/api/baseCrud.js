import Api from "./api";

export default class {

  constructor(prefix) {
    this.prefix = prefix;
  }

  async index(params = {}) {
    return await Api.get(this.prefix, this.addParams(params));
  }

  async show(id, params = {}) {
    return await Api.get(this.prefix + id, this.addParams(params));
  }

  async store(data) {
    return await Api.post(this.prefix, data);
  }

  async destroy(id) {
    return await Api.delete(this.prefix + id);
  }

  update(id, data) {
    return Api.put(this.prefix + id, data);
  }

  addParams(searchParams) {
    const qParams = new URLSearchParams();
    Object.keys(searchParams).forEach((qParam) => {
      qParams.append(qParam, searchParams[qParam]);
    });
    return {
      params: qParams,
    };
  }
}
