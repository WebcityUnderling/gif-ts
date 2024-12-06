import * as THREE from 'three';

const loader = new THREE.TextureLoader()



export const box = () => {

  const cubeMaterials = [
    new THREE.MeshLambertMaterial({ side: THREE.DoubleSide, color: 0xbbbbbb, map: loader.load('box-texture.jpg'), bumpMap: loader.load('bump.jpg') }), //right side
    new THREE.MeshLambertMaterial({ side: THREE.DoubleSide, color: 0xbbbbbb, map: loader.load('box-texture.jpg'), bumpMap: loader.load('bump.jpg') }), //left side
    new THREE.MeshLambertMaterial({ side: THREE.DoubleSide, transparent: true, opacity: 0}), //top side
    new THREE.MeshLambertMaterial({ side: THREE.DoubleSide, color: 0xbbbbbb, map: loader.load('box-texture-bottom.jpg'), bumpMap: loader.load('bump-bottom.jpg')}), //bottom side
    new THREE.MeshLambertMaterial({ side: THREE.DoubleSide, color: 0xbbbbbb, map: loader.load('box-texture.jpg'), bumpMap: loader.load('bump.jpg') }), //front side
    new THREE.MeshLambertMaterial({ side: THREE.DoubleSide, color: 0xbbbbbb, map: loader.load('box-texture.jpg'), bumpMap: loader.load('bump.jpg') }), //back side
  ];
  
  const geometry = new THREE.BoxGeometry( 6, 6, 6 ); 

  const cube = new THREE.Mesh( geometry, cubeMaterials ); 
  return cube;
}

export const lid = () => {
  const cubeMaterials = [
    new THREE.MeshLambertMaterial({ side: THREE.DoubleSide, color: 0xbbbbbb, map: loader.load('box-texture.jpg'), bumpMap: loader.load('bump.jpg') }), //right side
    new THREE.MeshLambertMaterial({ side: THREE.DoubleSide, color: 0xbbbbbb, map: loader.load('box-texture.jpg'), bumpMap: loader.load('bump.jpg') }), //left side
    new THREE.MeshLambertMaterial({ side: THREE.DoubleSide, color: 0xbbbbbb, map: loader.load('box-texture-bottom.jpg'), bumpMap: loader.load('bump-bottom.jpg')}), //bottom side
    new THREE.MeshLambertMaterial({ side: THREE.DoubleSide, transparent: true, opacity: 0}), //top side
    new THREE.MeshLambertMaterial({ side: THREE.DoubleSide, color: 0xbbbbbb, map: loader.load('box-texture.jpg'), bumpMap: loader.load('bump.jpg') }), //front side
    new THREE.MeshLambertMaterial({ side: THREE.DoubleSide, color: 0xbbbbbb, map: loader.load('box-texture.jpg'), bumpMap: loader.load('bump.jpg') }), //back side
  ];
  
  const geometry = new THREE.BoxGeometry( 6.1, 1, 6.1 ); 

  const cube = new THREE.Mesh( geometry, cubeMaterials ); 
  return cube;
}