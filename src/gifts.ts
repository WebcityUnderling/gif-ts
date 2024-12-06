import * as THREE from 'three';
import { VideoTexture } from "three";

interface Gift {
    path: string,
    width: number, 
    height: number,
}

export const createGiftTexture = (videoPath: string): VideoTexture => {
  const video = document.createElement('video');
  video.src = videoPath;
  video.loop = true; 
  video.muted = true;
  video.playsInline = true;
  video.autoplay = true;
  video.play();

  // Create a video texture
  const videoTexture = new THREE.VideoTexture(video);
  videoTexture.minFilter = THREE.LinearFilter;
  videoTexture.magFilter = THREE.LinearFilter;
  videoTexture.format = THREE.RGBFormat;
  return videoTexture
}

export const gifts: Gift[] =  [
    {
        path: 'test.mp4',
        width: 640,
        height: 640,
    }
]