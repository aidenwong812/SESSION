import { createElement, useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { godRayScript } from "@/lib/consts/god-ray-red-script"

const TextureMesh = () => {
  const mesh = useRef(null)
  useFrame((state) => {
    const { clock, mouse } = state
    if (mesh.current) {
      mesh.current.material.uniforms.u_mouse.value = [mouse.x, mouse.y]
      mesh.current.material.uniforms.u_time.value = clock.getElapsedTime()
    }
  })

  const element = useMemo(
    () =>
      createElement(
        "mesh",
        {
          ref: mesh,
          position: [0, 0, 0],
          scale: 1,
          rotation: [0, 0, 0],
        },
        createElement("planeGeometry", { args: [512, 512] }),
        createElement("shaderMaterial", {
          fragmentShader: godRayScript,
          vertexShader: `
        void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
          uniforms: {
            u_color: { value: [1, 0.26666666666666666, 0.16862745098039217, 1] },
            u_alternate: { value: [1, 0.41568627450980394, 0.16862745098039217, 1] },
            u_intensity: { value: 0.495 },
            u_rays: { value: 0.055 },
            u_reach: { value: 0.279 },
            u_noise: { value: false },
            u_noise_color: { value: [1, 1, 1, 0.75] },
            u_time: { value: 0 },
            u_mouse: { value: [0, 0] },
            u_resolution: { value: [512, 512] },
          },
          wireframe: false,
          wireframeLinewidth: 0,
          dithering: false,
          flatShading: true,
          doubleSided: true,
          glslVersion: "100",
        }),
      ),
    [],
  )

  return element
}

export default TextureMesh
