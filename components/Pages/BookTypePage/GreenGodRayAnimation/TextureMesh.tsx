import { createElement, useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { godRayScript } from "@/lib/consts/god-ray-green-script"

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
            u_color: { value: [0.6313725490196078, 0.9176470588235294, 0.01568627450980392, 1] },
            u_alternate: {
              value: [0.6313725490196078, 0.9176470588235294, 0.01568627450980392, 1],
            },
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
