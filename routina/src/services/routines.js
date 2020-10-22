import { Api } from './api.js';

export { RoutinesApi};

class RoutinesApi {


    static get url() {
        return `${Api.baseUrl}/routines`;
    }

    static async getRoutines(difficulty,page,size,orderBy,direction,controller){
        let parameters =parametersFormatter(page,size,orderBy,direction);
        if(difficulty!==null && difficulty!==''){
            parameters+=`difficulty=${difficulty}`;
        }
        parameters="";
        return await Api.get(`${RoutinesApi.url}/?${parameters}`, true, controller);
         
    }
    static async createRoutine(routine,controller){
        return await Api.post(`${RoutinesApi.url}=`, true,routine, controller);
    }
    
    static async getRoutine(id,controller){
       return await Api.get(`${RoutinesApi.url}/${id}`, false, controller);
        
    }

    static async updateRoutine(id,routine,controller){
        return await Api.put(`${RoutinesApi.url}/${id}`, false,routine, controller);
    }

    static async deleteRoutine(id,controller){
        return await Api.get(`${RoutinesApi.url}/${id}`, false, controller);
    }

    // static async getRoutineExecutions(id,page,size,orderBy,direction,controller){

    // }

    

    // static async getRoutineRatings(){}

    // static async createRoutineRating(){}

    // static async getRoutineCycles(id,controller){

    // }

    // static async createRoutineCycle(){

    // }

    // static async getRoutineCycle(routineId,cycleId,controller){}

    // static async updateRoutineCycle(routineId,cycleId,controller){}

    // static async deleteRoutineCycle(routineId,cycleId,controller){}

    // static async getCycleExcercises(routineId,cycleId,controller){}

    // static async createCycleExercise(routineId,cycleId,controller){}

    // static async getCycleExcercise(routineId,cycleId,exerciseId,controller){}

    // static async updateCycleExcercise(routineId,cycleId,exerciseId,controller){}

    // static async deleteCycleExercise(routineId,cycleId,exerciseId,controller){}
    
}


function parametersFormatter(page,size,orderBy,direction){
    let parameters = "";
    let concatenate = false;
    if(page instanceof Number && page>=0){
        parameters+=`page=${page}`;
    }
    if(concatenate == true){
        parameters+="&";
    }
    if(size instanceof Number && size>=0){
        parameters+=`size=${size}`;
    }
    if(concatenate == true){
        parameters+="&";
    }
    if(orderBy!==null && orderBy!==''){
        parameters+=`orderBy=${orderBy}`;
    }
    if(concatenate == true){
        parameters+="&";
    }
    if(direction!==null && direction!==''){
        parameters+=`direction=${direction}`;
    }
    if(concatenate == true){
        parameters+="&";
    }
    return parameters;
}
