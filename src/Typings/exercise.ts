export interface IExercise {
    solver(currentPose: { x: number; y: number; z: number; score: number; name: string; }[]): void;

    formScore: number[];
    id: number;
    name: string;
    description: string;
    video: string;
    category: string;
    equipment: string;
    muscles: string;
    muscles_secondary: string;
    muscles_neutral: string;
    is_completed: boolean;
    sets: number;
    reps: number;
    weight: number;
    difficulty: number;
    badPose: string[];
    PB: number;
}