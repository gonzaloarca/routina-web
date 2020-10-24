import { RoutinesApi, Routine, Cycle, Exercise, ImageModel } from "../services/routines.js";
import { CategoriesApi, Category } from "../services/categories.js";
import { UserApi, Credentials } from '../services/user.js';


export { DatabaseCreator };

class DatabaseCreator {
    static username = "agustormakh";
    static password = "1234567890";

    static random_item(items){
  
        return items[Math.floor(Math.random()*items.length)];
    }

    static async login() {
        try {
            let cred = new Credentials(this.username, this.password);
            await UserApi.login(cred);
        } catch (error) {
            console.log(error);
        }

    }

    static async logout() {
        try {
            await UserApi.logout();
        } catch (error) {
            console.log(error);
        }
    }

    static typeItems = [2, 3, 4, 5, 6];
    static muscleGroupItems = ["Full body", "Legs", "Arms"];
    static duration = ["under 15","15-30","30-45","45-60","above 60"];
    static levels=[ "rookie", "beginner", "intermediate", "advanced", "expert" ];
   
    static async createRoutine(name, detail, muscleGroup, duration, difficultyLevel, rounds, type) {
        //primero validar que haya al menos una rutina
        console.log("CREATE RUTINE_____________________________________");
        //crear la rutina
        const routine = new Routine(
            name,
            `${detail}|${muscleGroup}|${duration}`,
            true,
            difficultyLevel,
            {id:type}
        );
        const res = await RoutinesApi.createRoutine(routine);

        const routineId = res.id;
        //crear los ciclos
        console.log("CREATE CYCLES_____________________________________");
        for (const cycle of rounds) {
            let index = rounds.indexOf(cycle);
            console.log(index);
            console.log(cycle.name);
            const cycleResponse = await RoutinesApi.createRoutineCycle(
                routineId,
                new Cycle(cycle.name, "detail", "exercise", index+1, 1)
            );

            const cycleId = cycleResponse.id;
            //crear los ejercicios de cada cycle
            console.log("CREATE EXERCISES_____________________________________");
            console.log(cycle);
            for (const exercise of cycle.exercises) {
                const exerciseResponse = await RoutinesApi.createCycleExercise(
                    routineId,
                    cycleId,
                    new Exercise(exercise.name, exercise.detail, "exercise", exercise.duration, exercise.repetitions)
                );
                const exerciseId = exerciseResponse.id;
                //subir las imagenes de cada ejercicio
                await RoutinesApi.createExerciseImage(
                    routineId,
                    cycleId,
                    exerciseId,
                    new ImageModel(1, exercise.image)
                );
            }
        }
    }


 

    static async createInitialCategories() {
        const res = await CategoriesApi.createCategory(new Category("global-category", "initial category"));
        console.log(res);
        for (let category of this.categories) {
            const res2 = await CategoriesApi.createCategory(new Category(category.name, category.detail));
            console.log(res2);
        }

    }


    static firstPart=["strenghten ", "Heavy ", "Light ", "medium "];
    static secondPart=["Full","Arms","Legs","Abs"];

    
    static async  createRandomRoutine(){
        let name = this.random_item(this.firstPart) + this.random_item(this.secondPart); 
        let detail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
        let muscleGroup = this.random_item(this.muscleGroupItems);
        let duration = this.random_item(this.duration);
        let difficultyLevel =this.random_item(this.levels);
        let type= this.random_item(this.typeItems);

        let roundNumber=  Math.floor(Math.random()*6)+1;
        let rounds=[];
        for(let roundIndex = 0; roundIndex<roundNumber;roundIndex++){
            rounds[roundIndex]={};
            rounds[roundIndex].name = "Round " + roundIndex;
            rounds[roundIndex].exercises=[];
            let exerciseNumber =  Math.floor(Math.random()*12)+1;
            for(let exerciseIndex = 0; exerciseIndex<exerciseNumber;exerciseIndex++){
                let ex = this.random_item(this.exercises);
                rounds[roundIndex].exercises[exerciseIndex]={
                    name:ex.ej,
                    image:ex.link,
                    duration:5,
                    repetitions:0,
                    detail:"",
                    type:"exercise",
                    
                }
            }

        }
        console.log(name);
        console.log(detail);
        console.log(muscleGroup);
        console.log(duration);
        console.log(rounds);
        console.log(difficultyLevel);
        console.log(type);

        await this.createRoutine(name, detail, muscleGroup, duration, difficultyLevel, rounds, type);
    }

    static async createRandomRoutines(qty){
       for(let i = 0; i<qty;i++) await this.createRandomRoutine(); 
    }


    static async createDB() {
        await this.login();
        await this.createInitialCategories();
        await this.createInitialRoutine();
        await this.createCycleRoutineMain();
        await this.createExercises();
        await this.createRandomRoutines(25);
        //this.logout();

    }

    static async deleteDB() {
        await this.login();

        let categories = await CategoriesApi.getCategories();
        let routines = await RoutinesApi.getRoutines();
        for (const routine of routines.results) {
            let cycles = await RoutinesApi.getRoutineCycles(routine.id);
            for (const cycle of cycles.results) {
                await RoutinesApi.deleteRoutineCycle(routine.id, cycle.id);
            }
            RoutinesApi.deleteRoutine(routine.id);
        }

        categories.results.forEach(category => {

            CategoriesApi.deleteCategory(category.id);

        });


        //this.logout();
    }


    static async createInitialRoutine() {
        try {
            const res = await RoutinesApi.createRoutine(new Routine("global-routine", "this routine contains a unique cycle with all the exercises", true, "rookie", { id: 1 }));
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    static async createCycleRoutineMain() {
        try {
            await RoutinesApi.createRoutineCycle(1, new Cycle("global-cycle", "detail", "warmup", 1, 1));
        } catch (error) {
            console.log(error);
        }
    }
    static async createExercises() {
        for (let i = 0; i < this.exercises.length; i++) {
            const res = await RoutinesApi.createCycleExercise(1, 1, new Exercise(this.exercises[i].ej, "details", "exercise", 0, 0));
            console.log("EXERCISE RESPONSE _________________________________________________________________________________________");
            console.log(res);
            const exerciseId = res.id;
            await RoutinesApi.createExerciseImage(1, 1, exerciseId, new ImageModel(1, this.exercises[i].link));
        }

    }

    static exercises = [
        { ej: "squats", link: "https://res.cloudinary.com/atormakh/image/upload/v1603495875/y3ryp44puaxlgc7wdnr4.jpg" },
        { ej: "russian twists", link: "https://res.cloudinary.com/atormakh/image/upload/v1603499408/russian_twists_lrocm9.jpg" },
        { ej: "pushups", link: "https://res.cloudinary.com/atormakh/image/upload/v1603499408/Pushup_ix4gt6.jpg" },
        { ej: "deadlift", link: "https://res.cloudinary.com/atormakh/image/upload/v1603499408/deadlift_wq4hce.jpg" },
        { ej: "crunches", link: "https://res.cloudinary.com/atormakh/image/upload/v1603499409/crunches_kqbtu6.jpg" },
        { ej: "dips", link: "https://res.cloudinary.com/atormakh/image/upload/v1603499408/dips_irgktf.jpg" },
        { ej: "plank", link: "https://res.cloudinary.com/atormakh/image/upload/v1603499409/plancha_quocaq.jpg" },
        { ej: "side plank", link: "https://res.cloudinary.com/atormakh/image/upload/v1603499409/plancha_lateral_w33c8q.jpg" },
        { ej: "inclined pushups", link: "https://res.cloudinary.com/atormakh/image/upload/v1603499410/flexiones_inclinadas_oxto04.jpg" },
    ];

    static categories = [
        { name: "CARDIO", detail: "" },
        { name: "STRENGTH", detail: "" },
        { name: "HIIT", detail: "" },
        { name: "YOGA", detail: "" },
        { name: "PILATES", detail: "" },
    ];

}