import calculateAngle from "@/angle";
import {IExercise} from "@/Typings/exercise";

export class Pushup implements IExercise {
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
    reps = 0;
    weight = 0;
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
    pushUpCountValue = 0;
    elbowScore = 0;
    formScore: number[] = [];
    kneeScore = 0;
    hipScore = 0;
    totalElbowScore = 0;

    constructor() {
        this.solver = this.solver.bind(this);
    }

    solver(currentPose: { x: number; y: number; z: number; score: number; name: string; }[]): void {
        this.frameCounter++;

        // grab currentpose 28, 26, 24, 12, 14, 16, 18, 20, 22
        // print all those angles scores to console, if less than 0.5 then return
        const confidence_check = 0.7;
        if (currentPose[28].score < confidence_check || currentPose[26].score < confidence_check || currentPose[24].score < confidence_check || currentPose[12].score < confidence_check || currentPose[14].score < confidence_check || currentPose[16].score < confidence_check) {
            // if(this.frameCounter % 10 === 0) this.badPose.push("Not enough data");
            return;
        }

        const kneeAngle = calculateAngle(currentPose[28], currentPose[26], currentPose[24]);
        if (currentPose[28].score < 0.5 || currentPose[26].score < 0.5 || currentPose[24].score < 0.5) {
            this.badPose.push("Knee Angle");
            return;
        }

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
        if (currentPose[26].score < 0.5 || currentPose[24].score < 0.5 || currentPose[12].score < 0.5) {
            this.badPose.push("Hip Angle");
            return;
        }

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
        if (currentPose[12].score < 0.5 || currentPose[14].score < 0.5 || currentPose[16].score < 0.5) {
            this.badPose.push("Elbow Angle");
            return;
        }

        if (elbowAngle) {
            //when user starts with the momentum to move up.
            if (elbowAngle >= this.compareValue + 0.08) {
                this.maxValue = elbowAngle;
                this.compareValue = elbowAngle;
                this.pushUpCountValue += this.adder1;
                this.adder1 = 0;
                this.adder2 = 0.6;
                if (this.pushUpCountValue >= 1) {
                    this.reps += 1;
                    // console.log("push up count: " + this.reps);
                    this.pushUpCountValue = 0;
                }


                // get the elbow score
                // console.log(this.minValue, ', min value');
                if (0 <= this.minValue && this.minValue <= Math.PI / 5) {
                    // add elbowScore/2 for when user reach the highest point and lowest point
                    this.elbowScore += 0.48;
                } else if (Math.PI / 5 <= this.minValue && this.minValue <= Math.PI / 4) {
                    this.elbowScore += 0.45;
                } else if (Math.PI / 4 <= this.minValue && this.minValue <= 3 * Math.PI / 10) {
                    this.elbowScore += 0.4;
                } else {
                    this.elbowScore += 0.25;
                }


                //when elbow Score > 0.51 which means it's bigger than the single value that's going to be store if user just
                //reach the highest or lowest point, but smaller than those two compare. So when ever that if statement
                // is met, that means the user finished a set.
                if (this.elbowScore > 0.49) {
                    //cal the avg score
                    let average = (this.kneeScore + this.hipScore + this.elbowScore) / 3;
                    this.maxValue = 0;
                    this.minValue = Math.PI;
                    this.formScore.push(average);
                    this.elbowScore = 0;
                    this.kneeScore = 0;
                    this.hipScore = 0;
                }
            }

            if (elbowAngle <= this.compareValue - 0.08) {
                this.minValue = elbowAngle;
                this.compareValue = elbowAngle;
                this.pushUpCountValue += this.adder2;
                this.adder2 = 0;
                this.adder1 = 0.6;
                if (this.pushUpCountValue >= 1) {
                    // console.log("push up count: " + this.reps);
                    this.pushUpCountValue = 0;
                    // console.log(this.reps);
                    this.reps += 1;

                    if(this.reps > this.PB){
                        this.PB = this.reps;
                    }
                }

                // get the elbow score
                if (19 * Math.PI / 20 <= this.maxValue && this.maxValue <= 21 * Math.PI / 20) {
                    // add elbowScore/2 for when user reach the highest point and lowest point
                    this.elbowScore += 0.48;
                } else if (18 * Math.PI / 20 <= elbowAngle && elbowAngle <= 19 * Math.PI / 20) {
                    this.elbowScore += 0.45;
                } else if (17 * Math.PI / 20 <= elbowAngle && elbowAngle <= 18 * Math.PI / 20) {
                    this.elbowScore += 0.4;
                } else {
                    this.elbowScore += 0.25;
                }
                this.totalElbowScore+= this.elbowScore;
                // console.log(this.totalElbowScore, ', total elbow score,', this.reps);


                //when elbow Score > 0.51 which means it's bigger than the single value that's going to be store if user just
                //reach the highest or lowest point, but smaller than those two compare. So when ever that if statement
                // is met, that means the user finished a set.
                // console.log(this.elbowScore, ', elbow score');
                if (this.elbowScore > 0.49) {
                    //cal the avg score
                    let average = (this.kneeScore + this.hipScore + this.elbowScore) / 3

                    this.maxValue = 0;
                    this.minValue = Math.PI;
                    this.formScore.push(average);
                    this.elbowScore = 0;
                    this.kneeScore = 0;
                    this.hipScore = 0;
                }
            }

        }
    }

}