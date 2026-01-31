import { NodeIO } from '@gltf-transform/core';

const io = new NodeIO();

// Read the model
const document = await io.read('public/models/armchair.glb');

// Scale factor: convert from ~82cm height to ~0.82m (realistic armchair)
// Original is in cm, AR expects meters, so divide by 100
const scaleFactor = 0.01;

// Apply scale to all root nodes
const scene = document.getRoot().listScenes()[0];
for (const node of scene.listChildren()) {
    const currentScale = node.getScale();
    node.setScale([
        currentScale[0] * scaleFactor,
        currentScale[1] * scaleFactor,
        currentScale[2] * scaleFactor
    ]);
}

// Write the scaled model
await io.write('public/models/armchair-scaled.glb', document);

console.log('Model scaled successfully! New file: public/models/armchair-scaled.glb');
