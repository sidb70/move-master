import calculateAngle from "@/angle";
import {IExercise} from "@/Typings/exercise";

export class Pushup implements IExercise {
    id = 0;
    name = "Pushup";
    description = "A push-up is an exercise that works the chest, shoulders, triceps, and core. To perform a push-up, start in a plank position with your hands placed slightly wider than shoulder-width apart and your body in a straight line from your head to your heels. Lower your body by bending your elbows and keeping them close to your body. Push back up to the starting position by straightening your arms. Repeat the movement for the desired number of repetitions. It's important to maintain a straight line through the body, avoid sagging in the middle or raising the hips too high, keep the neck and spine in a neutral position and avoid looking up or down."
    image = "Its a Image";
    video = "https://www.youtube.com/embed/IODxDxX7oi4";
    category = "push";
    equipment = "bodyweight";
    muscles = "chest";
    muscles_secondary = "triceps";
    muscles_neutral = "shoulders";
    is_completed = false;
    sets = 2;
    reps = 5;
    weight = -1;
    difficulty = 1;
    badPose: string[] = [];
    PB = 0;

    // Solver Variables
    frameCounter = 0;
    compareValue = 0;
    maxValue = 0;
    minValue = 0;
    adder1 = 0.6;
    adder2 = 0.6;
    pushUpCounter = 0;
    pushUpCountValue = 0;
    elbowScore = 0;
    formScore: number[] = [];
    kneeScore = 0;
    hipScore = 0;

    constructor() {
        this.solver = this.solver.bind(this);
    }

    solver(currentPose: { x: number; y: number; z: number; score: number; name: string; }[]): void {
        this.frameCounter++;

        const kneeAngle = calculateAngle(currentPose[28], currentPose[26], currentPose[24]);
        if ((19 * Math.PI / 20) <= kneeAngle && kneeAngle <= (21 * Math.PI / 20)) {
            this.kneeScore = 1;
        } else if (18 * Math.PI / 20 <= kneeAngle && kneeAngle <= 19 * Math.PI / 20) {
            this.kneeScore = 0.9;
        } else if (17 * Math.PI / 20 <= kneeAngle && kneeAngle <= 18 * Math.PI / 20) {
            this.kneeScore = 0.8;
        } else {
            this.kneeScore = 0.5;
        }


        const hipAngle = calculateAngle(currentPose[26], currentPose[24], currentPose[12]);
        if (19 * Math.PI / 20 <= hipAngle && hipAngle <= 21 * Math.PI / 20) {
            this.hipScore = 1;
        } else if (18 * Math.PI / 20 <= hipAngle && hipAngle <= 19 * Math.PI / 20) {
            this.hipScore = 0.9;
        } else if (17 * Math.PI / 20 <= hipAngle && hipAngle <= 18 * Math.PI / 20) {
            this.hipScore = 0.8;
        } else {
            this.hipScore = 0.5;
        }


        let elbowAngle = calculateAngle(currentPose[12], currentPose[14], currentPose[16]);
        if (elbowAngle) {
            //when user starts with the momentum to move up.
            this.compareValue = 0;
            if (elbowAngle >= this.compareValue) {
                this.maxValue = elbowAngle;
                this.compareValue = elbowAngle;
                this.pushUpCountValue += this.adder1;
                this.adder1 = 0;
                this.adder2 = 0.6;
                if (this.pushUpCountValue >= 1) {
                    this.pushUpCounter += 1;
                    this.pushUpCountValue = 0;
                }


                // get the elbow score
                if (0 <= this.maxValue && this.maxValue <= Math.PI / 5) {
                    // add elbowScore/2 for when user reach the highest point and lowest point
                    this.elbowScore += 0.5;
                } else if (Math.PI / 5 <= elbowAngle && elbowAngle <= Math.PI / 4) {
                    this.elbowScore += 0.45;
                } else if (Math.PI / 4 <= elbowAngle && elbowAngle <= 3 * Math.PI / 10) {
                    this.elbowScore += 0.4;
                } else {
                    this.elbowScore += 0.25;
                }


                //when elbow Score > 0.51 which means it's bigger than the single value that's going to be store if user just
                //reach the highest or lowest point, but smaller than those two compare. So when ever that if statement
                // is met, that means the user finished a set.
                if (this.elbowScore > 0.51) {
                    //cal the avg score
                    let average = (this.kneeScore + this.hipScore + this.elbowScore) / 3
                    this.formScore.push(average);
                    this.elbowScore = 0;
                    this.kneeScore = 0;
                    this.hipScore = 0;
                }
            }


            if (elbowAngle <= this.compareValue) {
                this.minValue = elbowAngle;
                this.compareValue = elbowAngle;
                this.pushUpCountValue += this.adder2;
                this.adder2 = 0;
                this.adder1 = 0.6;
                if (this.pushUpCountValue >= 1) {
                    this.pushUpCounter += 1;
                    this.pushUpCountValue = 0;
                    console.log("PUSHUP!!!");
                    console.log(this.pushUpCounter);
                }


                // get the elbow score
                if (19 * Math.PI / 20 <= this.maxValue && this.maxValue <= 21 * Math.PI / 20) {
                    // add elbowScore/2 for when user reach the highest point and lowest point
                    this.elbowScore += 0.5;
                } else if (18 * Math.PI / 20 <= elbowAngle && elbowAngle <= 19 * Math.PI / 20) {
                    this.elbowScore += 0.45;
                } else if (17 * Math.PI / 20 <= elbowAngle && elbowAngle <= 18 * Math.PI / 20) {
                    this.elbowScore += 0.4;
                } else {
                    this.elbowScore += 0.25;
                }


                //when elbow Score > 0.51 which means it's bigger than the single value that's going to be store if user just
                //reach the highest or lowest point, but smaller than those two compare. So when ever that if statement
                // is met, that means the user finished a set.
                if (this.elbowScore > 0.51) {
                    //cal the avg score
                    let average = (this.kneeScore + this.hipScore + this.elbowScore) / 3
                    this.formScore.push(average);
                    this.elbowScore = 0;
                    this.kneeScore = 0;
                    this.hipScore = 0;
                }
            }

        }
    }

}