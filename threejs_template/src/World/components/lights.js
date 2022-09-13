import { DirectionalLight } from "../../../node_modules/three/build/three.module.js";

function createLights() {
	const light = new DirectionalLight("white", 8); // TODO

	light.position.set(10, 10, 10);

	return light;
}

export { createLights };
