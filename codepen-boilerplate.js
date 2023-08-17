import * as THREE from 'https://unpkg.com/three@0.155.0/build/three.module.js';

// 1. Scene
const scene = new THREE.Scene();

// 2. Camera
const camera = new THREE.PerspectiveCamera(
  75, // Field of View
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near clipping plane
  1000 // Far clipping plane
);
camera.position.z = 5; // Position the camera along the z-axis

// 3. Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. Geometry and Material
const geometry = new THREE.BoxGeometry(); // A simple cube geometry
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

// 5. Add mesh to scene
scene.add(cube);

// 6. Render Loop
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01; // Rotate cube around x-axis
  cube.rotation.y += 0.01; // Rotate cube around y-axis

  renderer.render(scene, camera);
}

animate();

// 7. Handle window resizing
window.addEventListener('resize', () => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});
