export interface IExercise {
    solver(currentPose: { x: number; y: number; z: number; score: number; name: string; }[]): void;

    name: string;
    description: string;
    video: string;
    category: string;
    equipment: string;
    muscles: string;
    muscles_secondary: string;
    muscles_neutral: string;
    is_completed: boolean;
    reps: number;
    weight: number;
    difficulty: number;
    badPose: string[];
    PB: number;

    // Solver Variables
    frameCounter: number;
    compareValue: number;
    maxValue: number;
    minValue: number;
    adder1: number;
    adder2: number
    pushUpCountValue: number;
    elbowScore: number;
    formScore: number[];
    kneeScore: number;
    hipScore: number;
    totalElbowScore: number;
}