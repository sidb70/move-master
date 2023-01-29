export interface IExercise {
    id: number;
    name: string;
    description: string;
    image: string;
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
    time: number;
    PB: number;
}