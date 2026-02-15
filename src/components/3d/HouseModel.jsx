import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { OrbitControls, PerspectiveCamera, Float, Stars, Sparkles, Cloud, Environment } from '@react-three/drei';
import * as THREE from 'three';

const GlassMaterial = () => (
    <meshPhysicalMaterial
        roughness={0.05}
        transmission={0.98}
        thickness={0.8}
        color="#e0f2fe"
        ior={1.5}
        clearcoat={1}
        clearcoatRoughness={0.1}
        transparent
        opacity={0.9}
    />
);

const Tree = ({ position, scale = 1 }) => {
    return (
        <group position={position} scale={scale}>
            {/* Trunk */}
            <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[0.08, 0.15, 1, 8]} />
                <meshStandardMaterial
                    color="#92400e"
                    roughness={0.9}
                    metalness={0.1}
                />
            </mesh>
            {/* Foliage - layered for depth */}
            <mesh position={[0, 1.4, 0]} castShadow>
                <coneGeometry args={[0.6, 0.8, 8]} />
                <meshStandardMaterial
                    color="#65a30d"
                    roughness={0.85}
                />
            </mesh>
            <mesh position={[0, 1.7, 0]} castShadow>
                <coneGeometry args={[0.5, 0.7, 8]} />
                <meshStandardMaterial
                    color="#84cc16"
                    roughness={0.85}
                />
            </mesh>
            <mesh position={[0, 1.95, 0]} castShadow>
                <coneGeometry args={[0.35, 0.5, 8]} />
                <meshStandardMaterial
                    color="#a3e635"
                    roughness={0.85}
                />
            </mesh>
        </group>
    );
};

const House = (props) => {
    const group = useRef();

    useFrame((state, delta) => {
        // Slower, smoother rotation that works with Float
        group.current.rotation.y += delta * 0.08;
    });

    return (
        <group ref={group} {...props} dispose={null}>
            {/* Base Platform - Fixed shadow artifacts */}
            <mesh position={[0, -1.15, 0]} receiveShadow>
                <cylinderGeometry args={[3.5, 3.5, 0.3, 64]} />
                <meshStandardMaterial
                    color="#94a3b8"
                    roughness={0.4}
                    metalness={0.2}
                />
            </mesh>

            {/* Grass Platform - Properly spaced to avoid z-fighting */}
            <mesh position={[0, -0.98, 0]} receiveShadow>
                <cylinderGeometry args={[3.2, 3.2, 0.08, 64]} />
                <meshStandardMaterial
                    color="#22c55e"
                    roughness={0.95}
                    metalness={0}
                />
            </mesh>

            {/* Pathway - Properly elevated above grass */}
            <mesh position={[0, -0.93, 2]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[1, 2]} />
                <meshStandardMaterial
                    color="#e2e8f0"
                    roughness={0.7}
                    metalness={0.1}
                />
            </mesh>

            {/* Main Structure 1 - Improved proportions */}
            <mesh position={[-0.5, 0.1, 0]} castShadow receiveShadow>
                <boxGeometry args={[2.5, 2.2, 2]} />
                <meshStandardMaterial
                    color="#f1f5f9"
                    roughness={0.3}
                    metalness={0.1}
                />
            </mesh>

            {/* Main Structure 2 (Accent Tower) - Better proportions */}
            <mesh position={[1, 0.3, 0.5]} castShadow receiveShadow>
                <boxGeometry args={[1.5, 2.6, 1.5]} />
                <meshStandardMaterial
                    color="#f472b6"
                    roughness={0.4}
                    metalness={0.2}
                />
            </mesh>

            {/* Roof 1 - With overhang */}
            <mesh position={[-0.5, 1.7, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
                <coneGeometry args={[2.3, 1.4, 4]} />
                <meshStandardMaterial
                    color="#3b82f6"
                    roughness={0.5}
                    metalness={0.3}
                />
            </mesh>

            {/* Roof overhang detail */}
            <mesh position={[-0.5, 1.05, 0]} rotation={[0, Math.PI / 4, 0]}>
                <boxGeometry args={[2.6, 0.08, 2.6]} />
                <meshStandardMaterial
                    color="#60a5fa"
                    roughness={0.6}
                    metalness={0.2}
                />
            </mesh>

            {/* Roof 2 (Flat Modern) - With overhang */}
            <mesh position={[1, 1.65, 0.5]} castShadow>
                <boxGeometry args={[1.7, 0.12, 1.7]} />
                <meshStandardMaterial
                    color="#3b82f6"
                    roughness={0.5}
                    metalness={0.3}
                />
            </mesh>

            {/* Door Frame - Properly spaced */}
            <mesh position={[-0.5, -0.35, 1.005]}>
                <planeGeometry args={[0.75, 1.4]} />
                <meshStandardMaterial
                    color="#64748b"
                    roughness={0.6}
                />
            </mesh>

            {/* Door - No z-fighting */}
            <mesh position={[-0.5, -0.35, 1.02]}>
                <planeGeometry args={[0.65, 1.3]} />
                <meshStandardMaterial
                    color="#d97706"
                    roughness={0.4}
                    metalness={0.2}
                />
            </mesh>

            {/* Door handle */}
            <mesh position={[-0.3, -0.35, 1.03]}>
                <sphereGeometry args={[0.03, 16, 16]} />
                <meshStandardMaterial
                    color="#fbbf24"
                    roughness={0.2}
                    metalness={0.9}
                />
            </mesh>

            {/* Large Window Side - Better placement */}
            <group position={[-1.76, 0.2, 0]}>
                <mesh rotation={[0, -Math.PI / 2, 0]}>
                    <planeGeometry args={[1.3, 1.3]} />
                    <GlassMaterial />
                </mesh>
                {/* Window frame */}
                <mesh rotation={[0, -Math.PI / 2, 0]} position={[0, 0, -0.01]}>
                    <planeGeometry args={[1.35, 1.35]} />
                    <meshStandardMaterial
                        color="#64748b"
                        side={THREE.DoubleSide}
                    />
                </mesh>
            </group>

            {/* Large Window Front Accent - Better placement */}
            <group position={[1, 0.6, 1.26]}>
                <mesh>
                    <planeGeometry args={[1.1, 1.3]} />
                    <GlassMaterial />
                </mesh>
                {/* Window frame */}
                <mesh position={[0, 0, -0.01]}>
                    <planeGeometry args={[1.15, 1.35]} />
                    <meshStandardMaterial
                        color="#64748b"
                        side={THREE.DoubleSide}
                    />
                </mesh>
            </group>

            {/* Additional side windows */}
            <group position={[0.5, 0.6, -1.005]} rotation={[0, Math.PI, 0]}>
                <mesh>
                    <planeGeometry args={[0.6, 0.8]} />
                    <GlassMaterial />
                </mesh>
                <mesh position={[0, 0, -0.01]}>
                    <planeGeometry args={[0.65, 0.85]} />
                    <meshStandardMaterial
                        color="#64748b"
                        side={THREE.DoubleSide}
                    />
                </mesh>
            </group>

            {/* Modern Vertical Slat Decor - Enhanced */}
            <group position={[1.76, 0.3, 0]}>
                {[...Array(6)].map((_, i) => (
                    <mesh key={i} position={[0, 0, (i * 0.28) - 0.7]} castShadow>
                        <boxGeometry args={[0.08, 2.6, 0.08]} />
                        <meshStandardMaterial
                            color="#d97706"
                            roughness={0.4}
                            metalness={0.3}
                        />
                    </mesh>
                ))}
            </group>

            {/* Decorative base trim */}
            <mesh position={[-0.5, -0.9, 0]} castShadow>
                <boxGeometry args={[2.6, 0.1, 2.1]} />
                <meshStandardMaterial
                    color="#94a3b8"
                    roughness={0.5}
                    metalness={0.3}
                />
            </mesh>

            <mesh position={[1, -0.9, 0.5]} castShadow>
                <boxGeometry args={[1.6, 0.1, 1.6]} />
                <meshStandardMaterial
                    color="#94a3b8"
                    roughness={0.5}
                    metalness={0.3}
                />
            </mesh>

            {/* Trees - Better positioned */}
            <Tree position={[-2.3, -0.5, 1.5]} scale={0.55} />
            <Tree position={[2.4, -0.5, -0.8]} scale={0.65} />
            <Tree position={[1.8, -0.5, 2]} scale={0.45} />
            <Tree position={[-1.5, -0.5, -1.8]} scale={0.5} />
        </group>
    );
};

const HouseModel = () => {
    return (
        <div className="h-full w-full rounded-xl overflow-hidden active:cursor-grabbing cursor-grab">
            <Canvas shadows dpr={[1, 2]} gl={{ antialias: true }}>
                {/* Camera */}
                <PerspectiveCamera makeDefault position={[6, 3.5, 7]} fov={40} />
                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 2.2}
                    enableDamping
                    dampingFactor={0.05}
                />

                {/* Lighting Setup - Fixed shadow artifacts */}
                <ambientLight intensity={0.6} color="#fef3c7" />

                {/* Main directional light - adjusted shadow settings */}
                <directionalLight
                    position={[-8, 12, 6]}
                    intensity={2.5}
                    castShadow
                    shadow-mapSize={[2048, 2048]}
                    shadow-camera-far={30}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                    shadow-bias={-0.0001}
                    shadow-normalBias={0.02}
                    color="#fef3c7"
                />

                {/* Fill light */}
                <directionalLight
                    position={[5, 5, -5]}
                    intensity={1.2}
                    color="#fef3c7"
                />

                {/* Accent spotlight for dramatic effect */}
                <spotLight
                    position={[8, 8, 8]}
                    angle={0.4}
                    penumbra={1}
                    intensity={12}
                    color="#fbbf24"
                    distance={25}
                    decay={2}
                />

                {/* Rim light for definition */}
                <pointLight
                    position={[-5, 3, -5]}
                    intensity={3}
                    color="#fde047"
                    distance={15}
                    decay={2}
                />

                {/* Environment */}
                <Stars
                    radius={100}
                    depth={50}
                    count={4000}
                    factor={5}
                    saturation={0}
                    fade
                    speed={0.3}
                />

                <Cloud
                    opacity={0.4}
                    speed={0.15}
                    width={12}
                    depth={2}
                    segments={25}
                    position={[-8, 6, -12]}
                    color="#ffffff"
                />
                <Cloud
                    opacity={0.35}
                    speed={0.18}
                    width={10}
                    depth={1.8}
                    segments={20}
                    position={[8, 4, -14]}
                    color="#fef3c7"
                />
                <Cloud
                    opacity={0.3}
                    speed={0.12}
                    width={8}
                    depth={1.5}
                    segments={18}
                    position={[0, -3, -10]}
                    color="#fde68a"
                />

                {/* Floating Elements - Balanced with rotation */}
                <Float
                    speed={1.5}
                    rotationIntensity={0.15}
                    floatIntensity={0.3}
                    floatingRange={[-0.15, 0.15]}
                >
                    <House />
                </Float>

                <Sparkles
                    count={100}
                    scale={10}
                    size={1.5}
                    speed={0.4}
                    opacity={0.5}
                    color="#fbbf24"
                />

                {/* Background - Bright sky */}
                <color attach="background" args={['#7dd3fc']} />
                <fog attach="fog" args={['#bae6fd', 20, 40]} />
            </Canvas>
        </div>
    );
};

export default HouseModel;
