import { Api } from './api.js';

export { RoutinesApi,Routine,Cycle,Exercise,Rating,ImageModel,RoutineReal,RoutineSlide};

class RoutinesApi {


    static get url() {
        return `${Api.baseUrl}/routines`;
    }

    static async getFullRoutine(id){
        const routineResponse =  await this.getRoutine(id);
        let routine = new RoutineReal(routineResponse);
        console.log("RUTINA ANTES DE SER CASTEADA");
        console.log(routineResponse);
        //descargar todos los ciclos
        const cyclesResponse = await this.getRoutineCycles(id,);
        const cycles = cyclesResponse.results;
        routine.addCycles(cycles);
        for(let i=0;i<cycles.length;i++){
            const cycleId = cycles[i].id;
            const exercisesRes = await this.getCycleExcercises(id,cycleId);
            routine.addExercisesToCycles(i,exercisesRes);
            for(let j=0;j<exercisesRes.results.length;j++){
                let exercise = exercisesRes.results[j];
                const imagesRes = await this.getExerciseImages(id,cycleId,exercise.id);
                routine.addImagesToExercise(i,j,imagesRes);
            }
        }
        return routine;
    }

    static async getSlideRoutines(){
        const routinesResponses = await this.getRoutines();
        const routines = routinesResponses.results;
        let skipped=0;
        const result = [];
        for(let i=0;i<routines.length;i++){
            try{
                let routine = new RoutineSlide(routines[i]);
           
            const cyclesResponse = await this.getRoutineCycles(routine.id);
            
            let cycleId = cyclesResponse.results[0].id;
            const exercisesRes = await this.getCycleExcercises(routine.id,cycleId);
            
            const imageRes = await this.getExerciseImages(routine.id,cycleId,exercisesRes.results[0].id);
            
            routine.addImage(imageRes.results[0].url)
            result[i-skipped] =  routine;
            }catch(error){
                console.log("slide routine error " + error);
                console.log(routines[i]);
                skipped++;
            }
            
        }
        return result;
        
        // console.log("RUTINA ANTES DE SER CASTEADA");
        // console.log(routineResponse);
        // //descargar todos los ciclos
        // const cyclesResponse = await this.getRoutineCycles(id,);
        // const cycles = cyclesResponse.results;
        // routine.addCycles(cycles);
        // for(let i=0;i<cycles.length;i++){
        //     const cycleId = cycles[i].id;
        //     const exercisesRes = await this.getCycleExcercises(id,cycleId);
        //     routine.addExercisesToCycles(i,exercisesRes);
        //     for(let j=0;j<exercisesRes.results.length;j++){
        //         let exercise = exercisesRes.results[j];
        //         const imagesRes = await this.getExerciseImages(id,cycleId,exercise.id);
        //         routine.addImagesToExercise(i,j,imagesRes);
        //     }
        // }
        // return routine;
    }

    static async getFullRoutines(id){
        const routineResponse =  await this.getRoutine(id);
        let routine = new RoutineReal(routineResponse);
        console.log("RUTINA ANTES DE SER CASTEADA");
        console.log(routineResponse);
        //descargar todos los ciclos
        const cyclesResponse = await this.getRoutineCycles(id,);
        const cycles = cyclesResponse.results;
        routine.addCycles(cycles);
        for(let i=0;i<cycles.length;i++){
            const cycleId = cycles[i].id;
            const exercisesRes = await this.getCycleExcercises(id,cycleId);
            routine.addExercisesToCycles(i,exercisesRes);
            for(let j=0;j<exercisesRes.results.length;j++){
                let exercise = exercisesRes.results[j];
                const imagesRes = await this.getExerciseImages(id,cycleId,exercise.id);
                routine.addImagesToExercise(i,j,imagesRes);
            }
        }
        return routine;
    }

    static async getFullRoutinesSMT(){
        const parameters="size=500";
        const routineResponses = await Api.get(`${RoutinesApi.url}/?${parameters}`, true);
        let routines = [];
        for(let i=0;i<routineResponses.results.length;i++){
            routines[i] = new RoutineReal(routineResponses.results[i]);
        
        }
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

class RoutineSlide{
    constructor(routine){
        this.id = routine.id;
        this.name = routine.name;
        let piped = routine.detail.split("|");
        this.detail = piped[0];
        this.muscleGroup = piped[1];
        this.duration = piped[2];
        this.type = RoutineReal.categoryIdToType(routine.category.id);
        //this.type = routine.category.id;
        this.difficultyLevel = RoutineReal.difficultyEnumToNum(routine.difficulty); 
        this.averageRating = routine.averageRating;
        this.creator = {};
        this.creator.avatarUrl = routine.creator.avatarUrl;
        this.creator.gender = routine.creator.gender;
        this.creator.username = routine.creator.username;
        this.creator.id = routine.creator.id;
        this.creator.dateCreated = routine.creator.dateCreated;
        this.creator.dateLastActive = routine.creator.dateLastActive;
    }

    addFirstCycle(cycles){
        this.cycles = cycles;
    }

    addExercisesToCycles(indexCycle,exercises){
        this.cycles[indexCycle].exercises = exercises.results;
    }

    addImage(imagesRes){
        this.image = imagesRes;
    }

    static categoryIdToType(id){
        switch(id){
            case 1:
                return "CARDIO";
            case 2:
                return "STRENGTH";
            case 3:
                return "HIIT";
            case 4:
                return "YOGA";
            case 5:
                return "PILATES";
            default:
                return null;
        }
    }

    static difficultyEnumToNum(difficulty){
        switch(difficulty){
            case "rookie":
                return 0;
            case "beginner":
                return 1;
            case "intermediate":
                return 2;
            case "advanced":
                return 3;
            case "expert":
                return 4;
            default:
                return null;
        }
    }
    
    
}

class RoutineReal{
    constructor(routine){
        this.name = routine.name;
        let piped = routine.detail.split("|");
        this.detail = piped[0];
        this.muscleGroup = piped[1];
        this.duration = piped[2];
        this.type = RoutineReal.categoryIdToType(routine.category.id);
        //this.type = routine.category.id;
        this.difficultyLevel = RoutineReal.difficultyEnumToNum(routine.difficulty); 
        this.creator = {};
        this.creator.avatarUrl = routine.creator.avatarUrl;
        this.creator.gender = routine.creator.gender;
        this.creator.username = routine.creator.username;
        this.creator.id = routine.creator.id;
        this.creator.dateCreated = routine.creator.dateCreated;
        this.creator.dateLastActive = routine.creator.dateLastActive;
    }

    addCycles(cycles){
        this.cycles = cycles;
    }

    addExercisesToCycles(indexCycle,exercises){
        this.cycles[indexCycle].exercises = exercises.results;
    }

    addImagesToExercise(indexCycle,exerciseId,imagesRes){
        this.cycles[indexCycle].exercises[exerciseId].image = imagesRes.results[0].url;
    }

    static categoryIdToType(id){
        switch(id){
            case 1:
                return "CARDIO";
            case 2:
                return "STRENGTH";
            case 3:
                return "HIIT";
            case 4:
                return "YOGA";
            case 5:
                return "PILATES";
            default:
                return null;
        }
    }

    static difficultyEnumToNum(difficulty){
        switch(difficulty){
            case "rookie":
                return 0;
            case "beginner":
                return 1;
            case "intermediate":
                return 2;
            case "advanced":
                return 3;
            case "expert":
                return 4;
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
