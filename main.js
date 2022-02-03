import * as THREE from 'three'
const WIDTH = 600
const HEIGHT = 400
const canvas = document.getElementById('canvas')
canvas.width = WIDTH
canvas.height = HEIGHT
//scene
const scene = new THREE.Scene()

//red cube
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//camera
const camera = new THREE.PerspectiveCamera(75, WIDTH/HEIGHT)
camera.position.z = 3
scene.add(camera)

//renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
})

renderer.render(scene, camera)





