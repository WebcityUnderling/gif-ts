import './style.css'
import { createGiftTexture } from './gifts.ts';
import {box, lid} from './meshes.ts'

import * as THREE from 'three';

// Scene, Camera, Renderer setup
const scene = new THREE.Scene();
const loader = new THREE.TextureLoader()
scene.background = loader.load('bg.png')
const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.setZ(20)
camera.position.setY(7)
camera.rotateX(-0.3);

const light = new THREE.AmbientLight( 0xffffff );
scene.add( light );

const lightLeft = new THREE.PointLight( 0xffffff, 1800, 0 );
lightLeft.position.set( 20, -5, 10 );
scene.add( lightLeft );

const lightRight = new THREE.PointLight( 0xffffff, 400, 0 );
lightRight.position.set( -20, 0, 10 );
scene.add( lightRight );


//It's a plane with a gif on it!
const geometry = new THREE.PlaneGeometry( 6,6);
const material = new THREE.MeshBasicMaterial({side: THREE.DoubleSide, map: createGiftTexture('test.mp4')});
const plane = new THREE.Mesh( geometry, material );
scene.add( plane );


const giftbox = box();
const giftlid = lid();
giftlid.position.setY(3)

scene.add(giftlid)
scene.add(giftbox)

let opened = false;

function animate() {
  const hasGiftbox = scene.children.find(o => o.id == giftbox.id)
  renderer.render( scene, camera );
  if (hasGiftbox) {
    if (opened) {
      giftbox.position.y += -0.2
      giftbox.rotation.y += -0.02
      giftbox.rotation.x += 0.02
      giftlid.rotation.y += -0.02
      giftlid.position.y += 0.15
      giftlid.rotation.x += -0.06
    } else {
      giftbox.rotation.y += -0.01
      giftlid.rotation.y += -0.01
    }
    if (giftbox.position.y < -20 ) {
      scene.remove(giftbox)
      scene.remove(giftlid)
    }
  }
}
renderer.setAnimationLoop( animate );

window.addEventListener('resize', () => {
  renderer.setSize( window.innerWidth, window.innerHeight );
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix()
})

const button = document.querySelector('#open-gift');

button?.addEventListener('click', () => {
  opened = true;
})
