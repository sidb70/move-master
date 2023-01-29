import styled from "styled-components";
import {UserContext} from "@/pages/_app";
import {useContext, useEffect, useRef, useState} from "react";
import Webcam from "react-webcam";

import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';

const VIDEO_CONSTRAINTS = {
    width: 640,
    height: 480,
    facingMode: "external",
};

export default function Camera() {
    const {user} = useContext(UserContext);
    const webcamRef = useRef() as React.MutableRefObject<Webcam>;

    const badPose = () => {
        if (user.currentExercise!.badPose.length > 0)
            return "red"

        return "none"
    }

    // Load The Pose Detection Model
    async function loadVideo() {
        const model = poseDetection.SupportedModels.BlazePose;
        const detector = await poseDetection.createDetector(model, {runtime: 'tfjs'});

        const poses = await detector.estimatePoses(webcamRef.current!.video!);
        console.log(poses);
    }

    useEffect(() => {
        if (!webcamRef.current) return;
        loadVideo();
    }, [webcamRef.current]);

    return <>
        <VideoCamera ref={webcamRef} videoConstraints={VIDEO_CONSTRAINTS} color={badPose()}/>
    </>;
}

const VideoCamera = styled(Webcam)<{ color: string }>`
  width: 100%;
  height: 100%;
  background-color: #000;

  border: 1px solid ${({color}) => color};
`;