// ==UserScript==
// @name         GeoFS Photo-like Atmosphere
// @namespace    https://github.com/geofslike-wq/geofs-photo-atmosphere
// @version      1.0
// @description  Photo-like sunset & atmosphere for GeoFS
// @match        https://www.geo-fs.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function applyAtmosphere() {
        if (!window.geofs || !geofs.api || !geofs.api.viewer) return;

        const scene = geofs.api.viewer.scene;
        if (!scene || !scene.skyAtmosphere) return;

        // 🌅 Sky color (sunset)
        scene.skyAtmosphere.hueShift = -0.03;
        scene.skyAtmosphere.saturationShift = 0.30;
        scene.skyAtmosphere.brightnessShift = -0.28;
        scene.skyAtmosphere.contrastShift = -0.12;

        // 🌫 Fog (haze)
        scene.fog.enabled = true;
        scene.fog.density = 0.000085;
        scene.fog.minimumBrightness = 0.45;

        console.log("GeoFS Photo Atmosphere applied");
    }

    // GeoFS読み込み待ち
    const wait = setInterval(() => {
        if (window.geofs && geofs.api && geofs.api.viewer) {
            clearInterval(wait);
            applyAtmosphere();
        }
    }, 1000);
})();
