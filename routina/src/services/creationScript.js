import { RoutinesApi, Routine, Cycle } from "../services/routines.js";
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
}