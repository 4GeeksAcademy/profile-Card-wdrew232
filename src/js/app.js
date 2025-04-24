import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // log current state

  // Cover logic
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover === false) {
    cover = "<div class='cover'></div>";
  }

  // Build dynamic social media links
  let socialMediaLinks = "";
  if (variables.twitter) {
    socialMediaLinks += `<li><a href="https://twitter.com/${variables.twitter}" target="_blank"><i class="fab fa-twitter"></i></a></li>`;
  }
  if (variables.github) {
    socialMediaLinks += `<li><a href="https://github.com/${variables.github}" target="_blank"><i class="fab fa-github"></i></a></li>`;
  }
  if (variables.linkedin) {
    socialMediaLinks += `<li><a href="https://linkedin.com/in/${variables.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a></li>`;
  }
  if (variables.instagram) {
    socialMediaLinks += `<li><a href="https://instagram.com/${variables.instagram}" target="_blank"><i class="fab fa-instagram"></i></a></li>`;
  }

  // Build dynamic widget
  document.querySelector("#widget_content").innerHTML = `
        <div class="widget">
          ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name || "Name Unknown"} ${variables.lastName ||
    ""}</h1>
          <h2>${variables.role || "Role Undefined"}</h2>
          <h3>${variables.city || "City Unknown"}, ${variables.country ||
    "Country Unknown"}</h3>
          <ul class="${variables.socialMediaPosition || "position-right"}">
            ${socialMediaLinks}
          </ul>
        </div>
      `;
}

window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-right",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    city: null,
    country: null
  };
  render(window.variables); // Initial rendering

  document.querySelectorAll(".picker").forEach(function(picker) {
    picker.addEventListener("change", function(event) {
      const attribute = event.target.id;
      let value = event.target.value;

      // Parse boolean or null values
      value =
        value === "true"
          ? true
          : value === "false"
          ? false
          : value === "" || value === "null"
          ? null
          : value;

      window.variables[attribute] = value; // Update the variable
      render(window.variables); // Re-render widget
    });
  });
};
git;
