// Fonction pour retourner en haut de la page
const scrollTopBtn = document.getElementById("scroll-top-btn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Fonction pour charger les images de la galerie automatiquement
async function loadGalleryImages() {
    const galerieGrid = document.getElementById("galerie-grid");
    try {
        // Remplace cette URL par le chemin vers ton dépôt GitHub (raw)
        const response = await fetch("https://api.github.com/repos/TON_NOM_D_UTILISATEUR/TON_DEPOT/contents/assets/images");
        const files = await response.json();

        files.forEach(file => {
            if (file.type === "file" && file.name.match(/\.(jpg|jpeg|png|gif)$/i)) {
                const imgElement = document.createElement("img");
                imgElement.src = file.download_url;
                imgElement.alt = file.name;
                galerieGrid.appendChild(imgElement);
            }
        });
    } catch (error) {
        console.error("Erreur lors du chargement des images :", error);
        // En cas d'erreur, tu peux ajouter des images manuellement ici
        // Exemple :
        // const imgElement = document.createElement("img");
        // imgElement.src = "assets/images/exemple.jpg";
        // galerieGrid.appendChild(imgElement);
    }
}

// Appel de la fonction au chargement de la page
window.addEventListener("DOMContentLoaded", loadGalleryImages);