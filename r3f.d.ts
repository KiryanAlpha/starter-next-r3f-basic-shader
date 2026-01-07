import * as THREE from 'three';
import { extend } from '@react-three/fiber';

declare module '@react-three/fiber' {
  interface ThreeElements {
    boxShaderMaterial: {
      uTime?: number;
      uColorStart?: THREE.Color;
      uColorEnd?: THREE.Color;
      [key: string]: any; // Pour d'autres props si besoin
    };
  }
}