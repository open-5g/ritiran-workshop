---
---

{% include js/conference.js %}

(function() {
    let map = window.conference.map;

    if (typeof map !== 'undefined') {
        var main_station = L.marker([47.37785, 8.54035], {
            icon: L.divIcon({
                className: '',
                html: '<span class="fas fa-train"></span> Main Station',
                iconSize: [120, 56]
            })
        }).addTo(map);
    }
})();