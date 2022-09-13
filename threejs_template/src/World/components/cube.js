import {
	BoxBufferGeometry,
	MathUtils,
	Mesh,
	MeshStandardMaterial,
} from "../../../node_modules/three/build/three.module.js";

function createCube() {
	const geometry = new BoxBufferGeometry(2, 2, 2);

	const material = new MeshStandardMaterial({ color: "purple" });

	const cube = new Mesh(geometry, material);

	cube.rotation.set(-0.5, -0.1, 0.8);

	const radiantsPerSecond = MathUtils.degToRad(30);

	cube.tick = (delta) => {
		cube.rotation.z += radiantsPerSecond * delta;
		cube.rotation.x += radiantsPerSecond * delta;
		cube.rotation.y += radiantsPerSecond * delta;
	};

	return cube;
}

export { createCube };
