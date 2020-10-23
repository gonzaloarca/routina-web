import { Api } from './api.js';

export { RoutinesApi,Routine,Cycle,Exercise,Rating};

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
       return await Api.get(`${RoutinesApi.url}/${id}`, true, controller);
        
    }

    static async updateRoutine(id,routine,controller){
        return await Api.put(`${RoutinesApi.url}/${id}`, true,routine, controller);
    }

    static async deleteRoutine(id,controller){
        return await Api.get(`${RoutinesApi.url}/${id}`, true, controller);
    }

    static async getRoutineExecutions(id,page,size,orderBy,direction,controller){
        let parameters =parametersFormatter(page,size,orderBy,direction);
        parameters="";
        return await Api.get(`${RoutinesApi.url}/${id}/executions?${parameters}`,true,controller);
    }

    static async createRoutineExecutions(id,duration,controller){
        return await Api.post(`${RoutinesApi.url}/${id}/executions`,true,duration,controller);
    }

    static async getRoutineRatings(id,page,size,orderBy,direction,controller){
            let parameters =parametersFormatter(page,size,orderBy,direction);
            parameters="";
            return await Api.get(`${RoutinesApi.url}/${id}/ratings?${parameters}`,true,controller);
    }

    static async createRoutineRating(id,rating,controller){
        return await Api.post(`${RoutinesApi.url}/${id}/ratings`,true,rating,controller);
    }

    static async getRoutineCycles(id,page,size,orderBy,direction,controller){
        let parameters =parametersFormatter(page,size,orderBy,direction);
        parameters="";
        return await Api.get(`${RoutinesApi.url}/${id}/cycles?${parameters}`,true,controller);
    }

    static async createRoutineCycle(id,cycle,controller){
        return await Api.post(`${RoutinesApi.url}/${id}/cycles`,true,cycle,controller);
    }

    static async getRoutineCycle(routineId,cycleId,controller){
        return await Api.get(`${RoutinesApi.url}/${routineId}/cycles/${cycleId}`,true,controller);
    }

    static async updateRoutineCycle(routineId,cycleId,cycle,controller){
        return await Api.put(`${RoutinesApi.url}/${routineId}/cycles/${cycleId}`,true,cycle,controller);
    }

    static async deleteRoutineCycle(routineId,cycleId,controller){
        return await Api.delete(`${RoutinesApi.url}/${routineId}/cycles/${cycleId}`,true,controller);
    }

    static async getCycleExcercises(routineId,cycleId,page,size,orderBy,direction,controller){
        let parameters =parametersFormatter(page,size,orderBy,direction);
        parameters="";
        return await Api.get(`${RoutinesApi.url}/${routineId}/cycles/${cycleId}?${parameters}`,true,controller);
    }

    static async createCycleExercise(routineId,cycleId,exercise,controller){
        return await Api.post(`${RoutinesApi.url}/${routineId}/cycles/${cycleId}`,true,exercise,controller);
    }

    static async getCycleExcercise(routineId,cycleId,exerciseId,controller){
        return await Api.get(`${RoutinesApi.url}/${routineId}/cycles/${cycleId}/exercises/${exerciseId}`,true,controller);
    }

    static async updateCycleExcercise(routineId,cycleId,exerciseId,exercise,controller){
        return await Api.put(`${RoutinesApi.url}/${routineId}/cycles/${cycleId}/exercises/${exerciseId}`,true,exercise,controller);
    }

    static async deleteCycleExercise(routineId,cycleId,exerciseId,controller){
        return await Api.delete(`${RoutinesApi.url}/${routineId}/cycles/${cycleId}/exercises/${exerciseId}`,true,controller);
    }
    
}

class Routine{
    constructor(name,detail,isPublic,difficulty,category){
        this.name=name;
        this.detail=detail;
        this.isPublic=isPublic;
        this.difficulty=difficulty;
        this.category=category;
    }
}

class Cycle{
    constructor(name,detail,type,order,repetitions){
        this.name=name;
        this.detail=detail;
        this.type=type;
        this.order=order;
        this.repetitions=repetitions;
    }
}

class Exercise{
    constructor(name,detail,type,duration,repetitions){
        this.name=name;
        this.detail=detail;
        this.type=type;
        this.duration=duration;
        this.repetitions=repetitions;
    }
}

class Rating{
    constructor(score,review){
        this.score=score;
        this.review=review;
    }
}


function parametersFormatter(page,size,orderBy,direction){
    let parameters = "";
    let concatenate = false;
    if(isNaN(page)){
        parameters+=`page=${page}`;
    }
    if(concatenate === true){
        parameters+="&";
    }
    if(isNaN(size)){
        parameters+=`size=${size}`;
    }
    if(concatenate === true){
        parameters+="&";
    }
    if(orderBy!==null && orderBy!==''){
        parameters+=`orderBy=${orderBy}`;
    }
    if(concatenate === true){
        parameters+="&";
    }
    if(direction!==null && direction!==''){
        parameters+=`direction=${direction}`;
    }
    if(concatenate === true){
        parameters+="&";
    }
    return parameters;
}
