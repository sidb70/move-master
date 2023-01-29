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
    time = 0;
    PB = 0;


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