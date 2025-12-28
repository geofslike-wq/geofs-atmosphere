// ==UserScript==
// @name         GeoFS Atmosphere Enhancer
// @namespace    https://github.com/geofslike-wq/geofs-atmosphere
// @version      1.0
// @description  Photo-style atmosphere for GeoFS
// @match        https://www.geo-fs.com/*
// @grant        none
// ==/UserScript==

(function () {

    function wait(cb) {
        const t = setInterval(() => {
            if (window.geofs?.api?.viewer?.scene) {
                clearInterval(t);
                cb();
            }
        }, 500);
    }

    function applyAtmosphere() {
        const scene = geofs.api.viewer.scene;

        scene.skyAtmosphere.brightnessShift = -0.12;
        scene.skyAtmosphere.saturationShift = 0.18;

        scene.fog.enabled = true;
        scene.fog.density = 0.00004;

        scene.light.intensity = 1.08;
    }

    wait(() => {
        applyAtmosphere();
        setInterval(applyAtmosphere, 3000);
        console.log("🌍 GeoFS Atmosphere loaded");
    });

})();
