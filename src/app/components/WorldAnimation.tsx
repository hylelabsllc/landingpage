'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WorldAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const scrollRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    containerRef.current.appendChild(renderer.domElement);

    // Create Earth with higher detail
    const earthGeometry = new THREE.SphereGeometry(5, 256, 256);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('/images/world-map.jpg'),
      bumpMap: new THREE.TextureLoader().load('/images/world-map-bump.jpg'),
      bumpScale: 0.3,
      specularMap: new THREE.TextureLoader().load('/images/world-map-specular.jpg'),
      specular: new THREE.Color(0x333333),
      shininess: 25,
      transparent: true,
      opacity: 0.98
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Add clouds with improved material
    const cloudGeometry = new THREE.SphereGeometry(5.1, 256, 256);
    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('/images/world-clouds.jpg'),
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(clouds);

    // Add enhanced atmosphere with glow effect
    const atmosphereGeometry = new THREE.SphereGeometry(5.2, 256, 256);
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Add outer glow
    const outerGlowGeometry = new THREE.SphereGeometry(5.3, 256, 256);
    const outerGlowMaterial = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending
    });
    const outerGlow = new THREE.Mesh(outerGlowGeometry, outerGlowMaterial);
    scene.add(outerGlow);

    // Add stars with improved distribution and glow
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 5000;
    const starsPosArray = new Float32Array(starsCount * 3);
    const starsSizeArray = new Float32Array(starsCount);

    for (let i = 0; i < starsCount * 3; i += 3) {
      const radius = 15 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      starsPosArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      starsPosArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starsPosArray[i + 2] = radius * Math.cos(phi);
      
      starsSizeArray[i / 3] = Math.random() * 0.1;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPosArray, 3));
    starsGeometry.setAttribute('size', new THREE.BufferAttribute(starsSizeArray, 1));

    const starsMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Create data streams
    const streamsGroup = new THREE.Group();
    const streamCount = 30;
    const streams: THREE.Mesh[] = [];
    const streamSpeeds: number[] = [];
    const streamRotations: THREE.Vector3[] = [];
    const streamTrails: THREE.Line[] = [];
    const trailPoints: THREE.Vector3[][] = [];
    const trailLength = 20;

    // Create stream shape (more dynamic than simple arrows)
    const streamShape = new THREE.Shape();
    streamShape.moveTo(0, 0);
    streamShape.lineTo(1, 0.3);
    streamShape.lineTo(1, -0.3);
    streamShape.lineTo(0, 0);

    const streamGeometry = new THREE.ShapeGeometry(streamShape);
    const streamMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });

    // Create trail material
    const trailMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });

    for (let i = 0; i < streamCount; i++) {
      const stream = new THREE.Mesh(streamGeometry, streamMaterial);
      
      // Random position on a sphere
      const radius = 8 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      stream.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );

      // Random rotation
      stream.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      // Random speed
      streamSpeeds.push(0.03 + Math.random() * 0.04);
      
      // Store rotation direction
      streamRotations.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.03,
        (Math.random() - 0.5) * 0.03,
        (Math.random() - 0.5) * 0.03
      ));

      // Create trail
      const trailGeometry = new THREE.BufferGeometry();
      const trailPositions = new Float32Array(trailLength * 3);
      trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
      const trail = new THREE.Line(trailGeometry, trailMaterial);
      
      // Initialize trail points
      const points: THREE.Vector3[] = [];
      for (let j = 0; j < trailLength; j++) {
        points.push(stream.position.clone());
      }
      trailPoints.push(points);

      streams.push(stream);
      streamTrails.push(trail);
      streamsGroup.add(stream);
      streamsGroup.add(trail);
    }

    scene.add(streamsGroup);

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
    sunLight.position.set(20, 20, 20);
    sunLight.castShadow = true;
    scene.add(sunLight);

    const backLight = new THREE.DirectionalLight(0xffffff, 0.4);
    backLight.position.set(-20, -20, -20);
    scene.add(backLight);

    // Add subtle point lights for additional depth
    const pointLight1 = new THREE.PointLight(0x3b82f6, 0.5, 50);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x3b82f6, 0.3, 50);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    // Initial camera position
    camera.position.z = 12;

    // Smooth mouse movement with lerp
    const targetRotation = { x: 0, y: 0, z: 0 };
    const currentRotation = { x: 0, y: 0, z: 0 };
    const targetCameraPosition = { x: 0, y: 0, z: 12 };
    const currentCameraPosition = { x: 0, y: 0, z: 12 };

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Animation with smooth transitions
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      // Calculate scroll-based opacity
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollRef.current / maxScroll, 1);
      const opacity = Math.max(0.3 - scrollProgress * 0.3, 0);
      containerRef.current!.style.opacity = opacity.toString();

      // Smooth rotation based on mouse position
      targetRotation.x = mouseRef.current.y * 0.1;
      targetRotation.z = mouseRef.current.x * 0.1;
      
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
      currentRotation.z += (targetRotation.z - currentRotation.z) * 0.05;

      // Camera movement based on mouse position
      targetCameraPosition.x = mouseRef.current.x * 2;
      targetCameraPosition.y = -mouseRef.current.y * 2;
      
      currentCameraPosition.x += (targetCameraPosition.x - currentCameraPosition.x) * 0.05;
      currentCameraPosition.y += (targetCameraPosition.y - currentCameraPosition.y) * 0.05;
      
      camera.position.x = currentCameraPosition.x;
      camera.position.y = currentCameraPosition.y;
      camera.lookAt(0, 0, 0);

      // Apply rotations with smooth transitions
      earth.rotation.y += 0.0008;
      earth.rotation.x = currentRotation.x;
      earth.rotation.z = currentRotation.z;

      clouds.rotation.y += 0.0012;
      clouds.rotation.x = currentRotation.x;
      clouds.rotation.z = currentRotation.z;

      atmosphere.rotation.y += 0.0004;
      atmosphere.rotation.x = currentRotation.x;
      atmosphere.rotation.z = currentRotation.z;

      outerGlow.rotation.y += 0.0003;
      outerGlow.rotation.x = currentRotation.x;
      outerGlow.rotation.z = currentRotation.z;

      stars.rotation.y += 0.0001;
      stars.rotation.x = currentRotation.x * 0.05;
      stars.rotation.z = currentRotation.z * 0.05;

      // Animate data streams
      streams.forEach((stream, index) => {
        // Move stream towards center
        const direction = new THREE.Vector3().subVectors(new THREE.Vector3(0, 0, 0), stream.position).normalize();
        stream.position.add(direction.multiplyScalar(streamSpeeds[index]));

        // Rotate stream
        stream.rotation.x += streamRotations[index].x;
        stream.rotation.y += streamRotations[index].y;
        stream.rotation.z += streamRotations[index].z;

        // Update trail
        const points = trailPoints[index];
        points.push(stream.position.clone());
        points.shift();

        const positions = streamTrails[index].geometry.attributes.position.array as Float32Array;
        points.forEach((point, i) => {
          positions[i * 3] = point.x;
          positions[i * 3 + 1] = point.y;
          positions[i * 3 + 2] = point.z;
        });
        streamTrails[index].geometry.attributes.position.needsUpdate = true;

        // Reset stream position if it gets too close to center
        if (stream.position.length() < 5) {
          const radius = 8 + Math.random() * 4;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.random() * Math.PI;
          
          stream.position.set(
            radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.sin(phi) * Math.sin(theta),
            radius * Math.cos(phi)
          );

          // Clear trail when resetting
          points.forEach((_, i) => {
            points[i] = stream.position.clone();
          });
        }
      });

      renderer.render(scene, camera);
    };

    // Handle resize with debounce
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      containerRef.current?.removeChild(renderer.domElement);
      scene.remove(earth, clouds, atmosphere, outerGlow, stars, streamsGroup);
      earthGeometry.dispose();
      earthMaterial.dispose();
      cloudGeometry.dispose();
      cloudMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      outerGlowGeometry.dispose();
      outerGlowMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
      streamGeometry.dispose();
      streamMaterial.dispose();
      streamTrails.forEach(trail => trail.geometry.dispose());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default WorldAnimation;