import * as THREE from 'three'
const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const canvas = document.getElementById('canvas')
canvas.width = WIDTH
canvas.height = HEIGHT

const colors = [0xF3FEB0, 0xFEA443, 0x705E78, 0xA5AAA3, 0x812F33]

//scene
const scene = new THREE.Scene()

//red cube
for(let i = 0; i < 100; i++) {
  let randomPosX = Math.floor(Math.random()*40)
  let randomPosY = Math.floor(Math.random()*40)
  let randomPosZ = Math.floor(Math.random()*40)
  let color = colors[Math.floor(Math.random()*colors.length)]
  let w = Math.floor(Math.random()*3) + 1
  let h = Math.floor(Math.random()*3) + 1
  let d = Math.floor(Math.random()*3) + 1
  let geometry = new THREE.BoxGeometry(w,h,d)
  let material = new THREE.MeshBasicMaterial({color: color})
  let mesh = new THREE.Mesh(geometry, material)
  mesh.position.x = randomPosX 
  mesh.position.y = randomPosY
  mesh.position.z = randomPosZ
  scene.add(mesh)
}

//camera
const camera = new THREE.PerspectiveCamera(75, WIDTH/HEIGHT)

window.addEventListener('mousemove', function(e) { 
})

camera.position.z = 50
camera.position.x = 20
camera.position.y = 20
scene.add(camera)

//renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
})

renderer.render(scene, camera)





