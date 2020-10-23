import { Api } from './api.js';

export {CategoriesApi,Category};

class CategoriesApi{

    static get url(){
        return `${Api.baseUrl}/categories`;
    }

    static async getCategory(id,controller){
        return await Api.get(`${CategoriesApi.url}/${id}`, true, controller);
    }

    static async getCategories(controller){
        return await Api.get(`${CategoriesApi.url}`, true, controller);
    }

    static async createCategory(category,controller){
        return await Api.post(`${CategoriesApi.url}`, true,category, controller);
    }

    static async deleteCategory(id,controller){
        return await Api.delete(`${CategoriesApi.url}/${id}`, true, controller);
    }


}

class Category{
    constructor(name,detail,id){
        this.name = name;
        this.detail = detail;
        this.id=id;
    }
}