import {Keypoint} from "@tensorflow-models/pose-detection";
import math3d from "math3d";

var Vector3 = math3d.Vector3;

export default function calculateAngle(keyPoint1: Keypoint, keyPoint2: Keypoint, keyPoint3: Keypoint): number {
    let vector1 = new Vector3(keyPoint1.x, keyPoint1.y, keyPoint1.z);
    let vector2 = new Vector3(keyPoint2.x, keyPoint2.y, keyPoint2.z);

    const mag1 = Math.sqrt(vector1.x ** 2 + vector1.y ** 2 + vector1.z ** 2);
    const mag2 = Math.sqrt(vector2.x ** 2 + vector2.y ** 2 + vector2.z ** 2);
    const mag = mag1 * mag2;

    const dot = vector1.x * vector2.x + vector1.y * vector2.y + vector1.z * vector2.z;
    const cosine = mag && dot / mag;
    return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
