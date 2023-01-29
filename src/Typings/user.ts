import {IExercise} from "./exercise";
import {Pushup} from "@/Exercises/Pushup";

export default interface User {
    initialLoad: boolean;
    firstName?: string;
    lastName?: string;
    age?: number;
    weight?: number;
    height?: number;
    workoutStreak?: number;
    totalHours?: number;
    totalCalories?: number;
    totalWorkouts?: number;
    ExercisesToComplete?: number;
    Exercises: IExercise[];
    currentExercise: IExercise | null;
}

export const InitialUser: User = {
    initialLoad: true,
    firstName: '',
    lastName: '',
    age: 0,
    weight: 0,
    height: 0,
    workoutStreak: 0,
    totalHours: 0,
    totalCalories: 0,
    totalWorkouts: 0,
    ExercisesToComplete: 0,
    Exercises: [new Pushup()],
    currentExercise: null,
};