'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WorldAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Create Earth
    const earthGeometry = new THREE.SphereGeometry(5, 128, 128);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('/images/world-map.jpg'),
      bumpMap: new THREE.TextureLoader().load('/images/world-map-bump.jpg'),
      bumpScale: 0.2,
      specularMap: new THREE.TextureLoader().load('/images/world-map-specular.jpg'),
      specular: new THREE.Color(0x333333),
      shininess: 15,
      transparent: true,
      opacity: 0.95
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Add clouds
    const cloudGeometry = new THREE.SphereGeometry(5.1, 128, 128);
    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('/images/world-clouds.jpg'),
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide
    });
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(clouds);

    // Add atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(5.2, 128, 128);
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Add stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 3000;
    const starsPosArray = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount * 3; i++) {
      const radius = 15 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      starsPosArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      starsPosArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starsPosArray[i + 2] = radius * Math.cos(phi);
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPosArray, 3));
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1);
    sunLight.position.set(20, 20, 20);
    scene.add(sunLight);

    const backLight = new THREE.DirectionalLight(0xffffff, 0.3);
    backLight.position.set(-20, -20, -20);
    scene.add(backLight);

    camera.position.z = 12;

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate Earth based on mouse position
      earth.rotation.y += 0.001;
      earth.rotation.x = mouseRef.current.y * 0.1;
      earth.rotation.z = mouseRef.current.x * 0.1;

      // Rotate clouds slightly faster
      clouds.rotation.y += 0.0015;
      clouds.rotation.x = mouseRef.current.y * 0.1;
      clouds.rotation.z = mouseRef.current.x * 0.1;

      // Rotate atmosphere
      atmosphere.rotation.y += 0.0005;
      atmosphere.rotation.x = mouseRef.current.y * 0.1;
      atmosphere.rotation.z = mouseRef.current.x * 0.1;

      // Rotate stars very slowly
      stars.rotation.y += 0.0001;
      stars.rotation.x = mouseRef.current.y * 0.05;
      stars.rotation.z = mouseRef.current.x * 0.05;

      renderer.render(scene, camera);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeChild(renderer.domElement);
      scene.remove(earth, clouds, atmosphere, stars);
      earthGeometry.dispose();
      earthMaterial.dispose();
      cloudGeometry.dispose();
      cloudMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 opacity-40"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default WorldAnimation;