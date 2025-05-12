console.log('Script loaded');
$(document).ready(function() {
    console.log('jQuery ready');

    // Test jQuery functionality
    $('.project-link').each(function() {
        console.log('Found project link:', $(this).data('project'));
    });

    const $popup = $('#popup-overlay');
    const $closeBtn = $('#close-popup');
    
    // Show popup function
    function showPopup(title, content) {
        console.log('Showing popup');
        $popup.find('#popup-title').text(title);
        $popup.find('#popup-content').html(content);
        $popup.removeClass('hidden').addClass('flex');
        $('body').css('overflow', 'hidden');
    }
    
    // Hide popup function
    function hidePopup() {
        console.log('Hiding popup');
        $popup.removeClass('flex').addClass('hidden');
        $('body').css('overflow', '');
    }
    
    // Project link click handler
    $(document).on('click', '.project-link', function(e) {
        e.preventDefault();
        const projectId = $(this).data('project');
        const pdfPath = $(this).data('pdf');
        console.log('Project clicked:', projectId);
        
        if (projectData[projectId]) {
            showPopup(
                projectData[projectId].title,
                projectData[projectId].description
            );
            
            // Update the download link with the correct PDF path
            $('#download-specs').attr('href', pdfPath);
        }
    });
    
    // Close button click handler
    $closeBtn.on('click', function(e) {
        e.stopPropagation();
        hidePopup();
    });
    
    // Close on overlay click
    $popup.on('click', function(e) {
        if (e.target === this) {
            hidePopup();
        }
    });
    
    // Prevent popup content clicks from closing the popup
    $('#popup-content').on('click', function(e) {
        e.stopPropagation();
    });
    
    // Close on escape key
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && !$popup.hasClass('hidden')) {
            hidePopup();
        }
    });

    // Mobile menu functionality
    $('#mobile-menu-button').on('click', function() {
        $('#mobile-menu').toggleClass('hidden');
    });

    // Close mobile menu when clicking on a link
    $('#mobile-menu a').on('click', function() {
        $('#mobile-menu').addClass('hidden');
    });

    // Smooth scroll for all anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800);
    });

    // Project data
    const projectData = {
        'hegreland': {
            title: 'Application web de gestion d\'un parc d\'attraction',
            description: `
                <div class="space-y-4">
                    <div>
                        <h4 class="text-lg font-semibold mb-2">Description du projet</h4>
                        <p class="text-gray-300">Le parc d'attraction Hegre Land souhaite digitaliser sa gestion en temps réel. L'application devrait proposer les fonctionnalités suivantes :</p>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-semibold mb-2">Objectifs</h4>
                        <ul class="list-disc list-inside text-gray-300 space-y-1">
                            <li>La gestion des employés, organisés en catégories de missions. Ils seront ensuite affectés selon les jours à des attractions qui correspondent à leur profil</li>
                            <li>La gestion des attractions avec les profils de personnes qui y travaillent et leur jauge de fréquentation maximale</li>
                            <li>La gestion de l'historique des représentations de chaque attraction, que les employés responsables initialiseront à chaque début de représentation, afin d'incrémenter le compteur des visiteurs</li>
                            <li>Un tableau de bord permettant aux administrateurs une visualisation en temps réel avec des jauges de fréquentation de toutes les attractions du parc</li>
                            <li>Une gestion des incidents permettant aux gestionnaires des attractions de rapporter aux administrateurs les problèmes rencontrés</li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-lg font-semibold mb-2">Technologies utilisées</h4>
                        <ul class="list-disc list-inside text-gray-300 space-y-1">
                            <li>Frontend: Bootstrap</li>
                            <li>Backend: PHP (Symfony 7)</li>
                            <li>Base de données: PostgreSQL</li>
                        </ul>
                    </div>

                    <div class="mt-6">
                        <a href="#" class="text-ocean hover:text-blue-400 inline-flex items-center gap-2" id="download-specs" target="_blank">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Télécharger le cahier des charges
                        </a>
                    </div>
                </div>
            `
        },
        'appsav': {
            title: 'Application de gestion de stock de pièces SAV',
            description: `
                <div class="space-y-4">
                    <div>
                        <h4 class="text-lg font-semibold mb-2">Contexte du projet</h4>
                        <p class="text-gray-300">Pour un de ses clients, la société va réaliser une application mobile à destination de la personne en charge
                            de la gestion du stock d'une entreprise de vente de pièces détachées d'appareils électroménager.</p>
                        <p class="text-gray-300">Votre équipe va prendre en charge ce développement de l'analyse des besoins jusqu'au développement final
                            en passant par la conception technique de la solution.</p>
                        <p class="text-gray-300">Afin de traiter au mieux l'appropriation des besoins de cette application, il est prévu un temps d'échange
                            avec les clients afin que vous puissiez les interroger sur les fonctionnalités attendues.</p>
                    </div>

                    <div>
                        <h4 class="text-lg font-semibold mb-2">Fonctionnalités</h4>
                        <ul class="list-disc list-inside text-gray-300 space-y-1">
                            
                            <p>Gestion des appareils :</p>
                            <ul class="list-disc list-inside ml-5">
                                <li>Ajout, modification et suppression des appareils pris en charge</li>
                                <li>Attribution d'un identifiant unique à chaque appareil</li>
                            </ul>
                            

                            <p>Association des pièces détachées aux appareils :</p>
                            <ul class="list-disc list-inside ml-5">
                                <li>Possibilité d'associer des pièces détachées spécifiques à chaque appareil</li>
                                <li>Liste des pièces recommandées pour chaque appareil</li>
                            </ul>
                            
                            <p>Recherche par appareil :</p>
                            <ul class="list-disc list-inside ml-5">
                                <li>Fonction de recherche permettant de trouver rapidement les pièces détachées associées à
                                un appareil spécifique</li>
                            </ul>

                            <p>Informations détaillées sur les appareils :</p>
                            <ul class="list-disc list-inside ml-5">
                                <li>Stock actuel des pièces détachées associées à chaque appareil</li>
                                <li>Historique des utilisations de pièces pour chaque appareil</li>
                            </ul>

                            <p>Gestion des pièces détachées :</p>
                            <ul class="list-disc list-inside ml-5">
                                <li>Ajout, modification et suppression des pièces détachées</li>
                                <li>Attribution d'un identifiant unique à chaque pièce.</li>
                            </ul>

                            <p>Informations détaillées sur les pièces :</p>
                            <ul class="list-disc list-inside ml-5">
                                <li>Stock actuel, prix, description, fournisseur, etc</li>
                            </ul>

                            <p>Suivi des entrées et sorties :</p>
                            <ul class="list-disc list-inside ml-5">
                                <li>Enregistrement des mouvements de stock, y compris les entrées (nouvelles pièces) et les
                                sorties (utilisées pour les réparations)</li>
                            </ul>
                            
                            <p>Gestion des fournisseurs :</p>
                            <ul class="list-disc list-inside ml-5">
                                <li>Liste des fournisseurs avec les détails de contact</li>
                            </ul>
                        </p>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-semibold mb-2">Technologies utilisées</h4>
                        <ul class="list-disc list-inside text-gray-300 space-y-1">
                            <li>Backend/Frontend: C# MAUI</li>
                            <li>Base de données: SQLite</li>
                        </ul>
                    </div>

                    <div class="mt-6">
                        <a href="#" class="text-ocean hover:text-blue-400 inline-flex items-center gap-2" id="download-specs" target="_blank">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Télécharger le cahier des charges
                        </a>
                    </div>
                </div>
            `
        },
        // Add other project data here as needed
    };
});
