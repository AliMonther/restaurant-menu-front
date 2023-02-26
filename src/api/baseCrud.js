import Api from "./api";
import {useTokenStore} from "../stores/token";
import TokenService from "../services/TokenService";
export default class {

  constructor(prefix) {
    this.prefix = prefix;
    this.tokenStore = new useTokenStore();
    this.token = this.tokenStore.getToken();
    this.tokenService = new TokenService();
  }

  async index(params = {} ) {
    return await Api.get(this.prefix, this.addParams(params));
  }

  async show(id, params = {}) {
    return await Api.get(this.prefix + id, this.addParams(params));
  }

  async getDetails( params = {}) {
    console.log('this.addParams(params)');
    console.log(this.addParams(params));
    return await Api.get(this.prefix, this.addParams(params));
  }

  async store(data) {
    return await Api.post(this.prefix, data , {headers : this.addHeaders()});
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
      headers : this.addHeaders()
    };
  }

  addHeaders(){
    return {
      authorization : 'Bearer '+this.tokenService.get()
    }
  }
}
