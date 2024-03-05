import { Canvas } from "@react-three/fiber"
import TextureMesh from "./TextureMesh"

const glSettings = {
  preserveDrawingBuffer: true,
  premultipliedAlpha: false,
  alpha: true,
  transparent: true,
  antialias: true,
  precision: "highp",
  powerPreference: "high-performance",
}

const cameraSettings = {
  fov: 75,
  near: 0.1,
  far: 1000,
  position: [0, 0, 5],
}

const GreenGodRayAnimation = () => (
  <Canvas
    gl={glSettings}
    dpr={[1, 1]}
    camera={cameraSettings}
    style={{ height: "512px", width: "100%" }}
  >
    <TextureMesh />
  </Canvas>
)

export default GreenGodRayAnimation
