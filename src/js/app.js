// Global

$(document).ready(function() {
    // 1. Inițializăm efectul
    $('#ripple-container').ripples({
        resolution: 512,
        dropRadius: 10,
        perturbance: 0.01,
    });

    // 2. Automatism: "Pulsul Apei"
    // Adăugăm aleatoriu mici onduleuri pentru a face apa să pară vie
    setInterval(function() {
        var $el = $('#ripple-container');
        
        // Alegem o poziție random pe X, dar pe Y o punem mai jos (aproape de noi)
        // Ca să pară că vin dinspre privitor spre munte
        var x = Math.random() * $el.outerWidth();
        var y = $el.outerHeight() - (Math.random() * ($el.outerHeight() / 2));
        
        var dropRadius = 20;
        var strength = 0.02 + Math.random() * 0.02;

        $el.ripples('drop', x, y, dropRadius, strength);
    }, 2000); // Se întâmplă o dată la 2 secunde
});