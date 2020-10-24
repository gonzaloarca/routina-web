import { RoutinesApi, Routine, Cycle,Exercise,ImageModel } from "../services/routines.js";
import { CategoriesApi, Category } from "../services/categories.js";
import { UserApi, Credentials } from '../services/user.js';


export { DatabaseCreator };

class DatabaseCreator {
    static username = "agustormakh";
    static password = "1234567890";

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



    static async createDB() {
        await this.login();
        await this.createInitialCategory();
        await this.createInitialRoutine();
        await this.createCycleRoutineMain();
        await this.createExercises();
        //this.logout();

    }

    static async deleteDB() {
        await this.login();

        let categories = await CategoriesApi.getCategories();
        let routines = await RoutinesApi.getRoutines();
        console.log(routines.results);
        routines.results.forEach(routine => {
            RoutinesApi.deleteRoutine(routine.id);

        });

        categories.results.forEach(category => {

            CategoriesApi.deleteCategory(category.id);

        });


        //this.logout();
    }

    static async createInitialCategory() {
        const res = await CategoriesApi.createCategory(new Category("global-category", "initial category"));
        console.log(res);
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
        for(let i=0;i<this.exercises.length;i++){
            const res = await RoutinesApi.createCycleExercise(1, 1, new Exercise(this.exercises.map(item=>item.ej)[i], this.exercises[i], "exercise", 0, 0));
            const exerciseId = res.id;
            await RoutinesApi.createExerciseImage(1, 1, exerciseId, new ImageModel(1, this.exercises.map(item=>item.link)[i]));
        }

    }

    static exercises=[
        {ej:"squats",link:"https://res.cloudinary.com/atormakh/image/upload/v1603495875/y3ryp44puaxlgc7wdnr4.jpg"},
        {ej:"russian twists",link:"https://res.cloudinary.com/atormakh/image/upload/v1603499408/russian_twists_lrocm9.jpg"},
        {ej:"pushups" , link:"https://res.cloudinary.com/atormakh/image/upload/v1603499408/Pushup_ix4gt6.jpg"},
        {ej:"deadlift" , link:"https://res.cloudinary.com/atormakh/image/upload/v1603499408/deadlift_wq4hce.jpg"},
        {ej:"crunches" , link:"https://res.cloudinary.com/atormakh/image/upload/v1603499409/crunches_kqbtu6.jpg"},
        {ej:"dips" , link:"https://res.cloudinary.com/atormakh/image/upload/v1603499408/dips_irgktf.jpg"},
        {ej:"plank" , link:"https://res.cloudinary.com/atormakh/image/upload/v1603499409/plancha_quocaq.jpg"},
        {ej:"side plank" , link:"https://res.cloudinary.com/atormakh/image/upload/v1603499409/plancha_lateral_w33c8q.jpg"},
        {ej:"inclined pushups" , link:"https://res.cloudinary.com/atormakh/image/upload/v1603499410/flexiones_inclinadas_oxto04.jpg"},     
    ];

}