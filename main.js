import * as THREE from 'three'
const WIDTH = 600
const HEIGHT = 400
const canvas = document.getElementById('canvas')
canvas.width = WIDTH
canvas.height = HEIGHT
//scene
const scene = new THREE.Scene()

//red cube

const colors = [0xff0000, 0xff0055, 0x00ff00, 0x0000ff]

const geometry = new THREE.BoxGeometry(1,1,1)

for(let i = 0; i < 10; i++) {
  const material = new THREE.MeshBasicMaterial({color: colors[Math.floor(Math.random()*colors.length)]})
  let mesh = new THREE.Mesh(geometry, material)
  mesh.position.x = i*10
  console.log(mesh)
  scene.add(mesh)
}

//camera
const camera = new THREE.PerspectiveCamera(75, WIDTH/HEIGHT)
camera.position.z = 10
camera.position.x = 1
camera.position.y = 2
scene.add(camera)

//renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
})

renderer.render(scene, camera)





