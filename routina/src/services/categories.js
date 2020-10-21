import { Api } from './api.js';

export {CategoriesApi,Category};

class CategoriesApi{

    static get url(){
        return `${Api.baseUrl}/categories`;
    }

    static async getCategory(id,controller){
        return await Api.get(`${CategoriesApi.url}/${id}`, false, controller);
    }

    static async getCategories(controller){
        return await Api.get(`${CategoriesApi.url}`, false, controller);
    }

    static async createCategory(category){
        return await Api.get(`${CategoriesApi.url}`, false,category, controller);
    }

    static async getCategory(id,category,controller){
        return await Api.put(`${CategoriesApi.url}/${id}`, false, controller);
    }


}

class Category{
    constructor(name,detail,id){
        this.name = name;
        this.detail = detail;
        this.id=id;
    }
}