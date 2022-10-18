    /**
     * Ukiyo.js
     */
     const targets = document.querySelectorAll('#parallaxfx');
     targets.forEach(target => {
       const parallax = new Ukiyo(target, {
         // speed: 2,
         // scale: 1.25
       });
     })