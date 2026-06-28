import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

interface CarViewerProps {
	modelUrl: string | null;
}

export default function CarViewer({ modelUrl }: CarViewerProps) {
	const mountRef = useRef<HTMLDivElement>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const mount = mountRef.current!;
		const width = mount.clientWidth;
		const height = mount.clientHeight;

		// Renderer
		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setSize(width, height);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.shadowMap.enabled = true;
		renderer.outputColorSpace = THREE.SRGBColorSpace;
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1.8;
		mount.appendChild(renderer.domElement);

		// Scene
		const scene = new THREE.Scene();
		scene.background = new THREE.Color("#b0b0b0");

		// Camera
		const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
		camera.position.set(3, 1.5, 4);

		// Lights
		const ambientLight = new THREE.AmbientLight(0xffffff, 3);
		scene.add(ambientLight);

		const dirLight = new THREE.DirectionalLight(0xffffff, 5);
		dirLight.position.set(5, 8, 5);
		dirLight.castShadow = true;
		scene.add(dirLight);

		const fillLight = new THREE.DirectionalLight(0xffffff, 2);
		fillLight.position.set(-5, 2, -5);
		scene.add(fillLight);

		const bottomLight = new THREE.DirectionalLight(0xffffff, 1);
		bottomLight.position.set(0, -5, 0);
		scene.add(bottomLight);

		// Controls
		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.dampingFactor = 0.05;
		controls.minDistance = 2;
		controls.maxDistance = 10;
		controls.maxPolarAngle = Math.PI / 2;
		controls.autoRotate = true;
		controls.autoRotateSpeed = 1.5;

		// Load model
		const loader = new GLTFLoader();

		if (modelUrl) {
			loader.load(
				modelUrl,
				(gltf) => {
					const model = gltf.scene;

					const box = new THREE.Box3().setFromObject(model);
					const center = box.getCenter(new THREE.Vector3());
					const size = box.getSize(new THREE.Vector3());
					model.position.sub(center);

					const maxDim = Math.max(size.x, size.y, size.z);
					camera.position.set(maxDim * 1, maxDim * 0, maxDim * 0.1);
					controls.minDistance = maxDim * 0.1;
					controls.maxDistance = maxDim * 5;

					scene.add(model);
					setLoading(false);
				},
				undefined,
				(error) => console.error("Erro ao carregar modelo:", error)
			);
		}

		// Animation loop
		let animId: number;
		const animate = () => {
			animId = requestAnimationFrame(animate);
			controls.update();
			renderer.render(scene, camera);
		};
		animate();

		// Resize handler
		const handleResize = () => {
			const w = mount.clientWidth;
			const h = mount.clientHeight;
			camera.aspect = w / h;
			camera.updateProjectionMatrix();
			renderer.setSize(w, h);
		};
		window.addEventListener("resize", handleResize);

		return () => {
			cancelAnimationFrame(animId);
			window.removeEventListener("resize", handleResize);
			controls.dispose();
			renderer.dispose();
			renderer.forceContextLoss();
			mount.removeChild(renderer.domElement);
		};
	});

	return (
		<div className="w-full h-full relative">
			{loading && (
				<div className="absolute inset-0 flex flex-col items-center justify-center bg-[#b0b0b0] z-10 gap-3">
					<div className="w-8 h-8 border-2 border-white/40 border-t-white rounded-full animate-spin" />
					<span className="text-[10px] tracking-[0.3em] uppercase text-white/70">
						Carregando modelo
					</span>
				</div>
			)}
			<div
				ref={mountRef}
				className="w-full h-full"
				title="Arraste para rotacionar • Scroll para zoom"
			/>
		</div>
	);
}