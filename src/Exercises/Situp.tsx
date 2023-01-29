import {IExercise} from "@/Typings/exercise";

export class Situp implements IExercise {
    id = 0;
    formScore = [];
    name = "Situp";
    description = "A Situp is a exercise where you lay on your back and lift your upper body up";
    video = "https://www.youtube.com/embed/WSon5E798w";
    category = "core";
    equipment = "bodyweight";
    muscles = "abs";
    muscles_secondary = "";
    muscles_neutral = "";
    is_completed = false;
    sets = 10;
    reps = 3;
    weight = -1;
    difficulty = 1;
    badPose: string[] = [];
    PB = 0;

    constructor() {
        this.solver = this.solver.bind(this);
        this.decrementSets = this.decrementSets.bind(this);
        this.decrementReps = this.decrementReps.bind(this);
        this.addBadPose = this.addBadPose.bind(this);
    }

    solver(currentPose: { x: number; y: number; z: number; score: number; name: string; }[]): void {
        console.log(currentPose);
    }

    decrementSets() {
        this.sets--;
    }

    decrementReps() {
        this.reps--;
    }

    addBadPose(badPose: string) {
        this.badPose.push(badPose);
    }
}