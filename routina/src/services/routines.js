import { Api } from './api.js';

export { RoutinesApi,Routine,Cycle,Exercise,Rating,ImageModel,RoutineReal};

class RoutinesApi {


    static get url() {
        return `${Api.baseUrl}/routines`;
    }

    static async getFullRoutine(id){
        const routineResponse =  await this.getRoutine(id);
        let routine = new RoutineReal(routineResponse);
        //descargar todos los ciclos
        const cyclesResponse = await this.getRoutineCycles(id,);
        const cycles = cyclesResponse.results;
        routine.addCycles(cycles);
        for(let i=0;i<cycles.length;i++){
            const res = await this.getCycleExcercises(id,cycles[i].id);
            routine.addExercisesToCycles(i,res);
        }
        return routine;
    }

    static async getRoutines(difficulty,page,size,orderBy,direction,controller){
        let parameters =parametersFormatter(page,size,orderBy,direction);
        if(difficulty!==null && difficulty!==''){
            parameters+=`difficulty=${difficulty}`;
        }
        parameters="size=500";
        return await Api.get(`${RoutinesApi.url}/?${parameters}`, true, controller);
         
    }
    static async createRoutine(routine,controller){
        return await Api.post(`${RoutinesApi.url}`, true,routine, controller);
    }
    
    static async getRoutine(id,controller){
       return await Api.get(`${RoutinesApi.url}/${id}`, true, controller);
        
    }

    static async updateRoutine(id,routine,controller){
        return await Api.put(`${RoutinesApi.url}/${id}`, true,routine, controller);
    }

    static async deleteRoutine(id,controller){
        return await Api.delete(`${RoutinesApi.url}/${id}`, true, controller);
    }

    //------------------------------------------------------------
    //EXECUTIONS
    //-----------------------------------------------------------
    static async getRoutineExecutions(id,page,size,orderBy,direction,controller){
        let parameters =parametersFormatter(page,size,orderBy,direction);
        parameters="";
        return await Api.get(`${RoutinesApi.url}/${id}/executions?${parameters}`,true,controller);
    }

    static async createRoutineExecutions(id,duration,controller){
        return await Api.post(`${RoutinesApi.url}/${id}/executions`,true,duration,controller);
    }
    //------------------------------------------------------------
    //RATING
    //-----------------------------------------------------------
    static async getRoutineRatings(id,page,size,orderBy,direction,controller){
            let parameters =parametersFormatter(page,size,orderBy,direction);
            parameters="";
            return await Api.get(`${RoutinesApi.url}/${id}/ratings?${parameters}`,true,controller);
    }

    static async createRoutineRating(id,rating,controller){
        return await Api.post(`${RoutinesApi.url}/${id}/ratings`,true,rating,controller);
    }

    //------------------------------------------------------------
    //CYCLES
    //-----------------------------------------------------------
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

    //------------------------------------------------------------
    //EXERCISES
    //-----------------------------------------------------------
    static async getCycleExcercises(routineId,cycleId,page,size,orderBy,direction,controller){
        let parameters =parametersFormatter(page,size,orderBy,direction);
        parameters="size=500";
        return await Api.get(`${RoutinesApi.url}/${routineId}/cycles/${cycleId}/exercises?${parameters}`,true,controller);
    }

    static async createCycleExercise(routineId,cycleId,exercise,controller){
        return await Api.post(`${RoutinesApi.url}/${routineId}/cycles/${cycleId}/exercises`,true,exercise,controller);
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

    static async createExerciseImage(routineId,cycleId,exerciseId,image,controller){
        return await Api.post(`${RoutinesApi.url}/${routineId}/cycles/${cycleId}/exercises/${exerciseId}/images`,true,image,controller);
    }

    static async getExerciseImages(routineId,cycleId,exerciseId,controller){
        return await Api.get(`${RoutinesApi.url}/${routineId}/cycles/${cycleId}/exercises/${exerciseId}/images`,true,controller);
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

class RoutineReal{
    constructor(routine){
        this.name = routine.name;
        let piped = routine.detail.split("|");
        this.detail = piped[0];
        this.muscleGroup = piped[1];
        this.duration = piped[2];
        this.type = this.categoryIdToType(routine.category.id);
    }

    static addCycles(cycles){
        this.cycles = cycles;
    }

    static addExercisesToCycles(indexCycle,exercises){
        this.cycles[indexCycle].exercises = exercises;
    }

    static categoryIdToType(id){
        switch(id){
            case 2:
                return "CARDIO";
            case 3:
                return "STRENGTH";
            case 4:
                return "HIIT";
            case 5:
                return "YOGA";
            case 6:
                return "PILATES";
            default:
                return null;
        }
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

class ImageModel{
    constructor(number,url){
        this.number=number;
        this.url=url;
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
