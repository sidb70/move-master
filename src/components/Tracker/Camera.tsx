import styled from "styled-components";
import {UserContext} from "@/pages/_app";
import {useContext, useEffect, useRef} from "react";
import Webcam from "react-webcam";

import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';

const VIDEO_CONSTRAINTS = {
    width: 640,
    height: 480,
    facingMode: "external",
};

export default function Camera() {
    const {user, setUser} = useContext(UserContext);
    const webcamRef = useRef<Webcam>(null);

    const badPose = () => {
        if (user.currentExercise!.badPose.length > 0) return "red"
        return "none"
    }

    async function loadVideo(detector: poseDetection.PoseDetector) {
        if (!webcamRef.current) return;

        const video = webcamRef.current.video!;
        video.width = video.videoWidth;
        video.height = video.videoHeight;
        if (video.videoWidth === 0 || video.videoHeight === 0) return;

        const poses = await detector.estimatePoses(video);
        if (poses.length === 0) return;
        setUser({...user, currentPose: poses[0].keypoints3D || []});
    }

    useEffect(() => {
        const LoadPoses = async () => {
            const model = poseDetection.SupportedModels.BlazePose;
            const detector = await poseDetection.createDetector(model, {
                runtime: "tfjs",
                modelType: 'full',
            });

            return setInterval(async () => await loadVideo(detector), 250);
        }

        LoadPoses().then(interval => () => clearInterval(interval));
    }, []);

    return <VideoCamera ref={webcamRef} videoConstraints={VIDEO_CONSTRAINTS} color={badPose()}/>
}

const VideoCamera = styled(Webcam)<{ color: string }>`
  width: 100%;
  height: 100%;
  background-color: #000;

  border: 1px solid ${({color}) => color};
`;