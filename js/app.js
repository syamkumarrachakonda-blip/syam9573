document.addEventListener("DOMContentLoaded", () => {

    loadProfile();

});


function loadProfile() {

    const profile = PROFILE_CONFIG;

    /*
     * Profile information
     */

    document.querySelector("#profile-name").textContent =
        profile.name;

    document.querySelector("#profile-username").textContent =
        profile.username;

    document.querySelector("#profile-bio").textContent =
        profile.bio;


    /*
     * Profile image
     */

    document.querySelector("#profile-image").src =
        profile.profileImage;


    /*
     * Background
     */

    setBackground(profile.background);


    /*
     * Social links
     */

    renderSocialLinks(profile.socials);

}


function setBackground(imageURL) {

    const profileBackground =
        document.querySelector("#profile-background");

    const desktopBackground =
        document.querySelector("#desktop-background");


    profileBackground.style.backgroundImage =
        `url("${imageURL}")`;

    desktopBackground.style.backgroundImage =
        `url("${imageURL}")`;

}


function renderSocialLinks(socials) {

    const container =
        document.querySelector("#social-links");

    container.innerHTML = "";


    socials.forEach(social => {

        const link =
            document.createElement("a");

        link.className = "social-button";

        link.href = social.url;

        link.target = "_blank";

        link.rel = "noopener noreferrer";


        link.innerHTML = `

            <img
                src="${social.icon}"
                alt=""
            >

            <span>
                ${social.name}
            </span>

        `;


        container.appendChild(link);

    });

}