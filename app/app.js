function initListeners() {
  $("nav a").on("click", (e) => {
    let btnID = e.currentTarget.id;
    // $("#" + btnID).addClass("active");
    // e.currentTarget.addClass("active");
    loadContent(btnID);
  });
}

$(document).ready(function () {
  // loadContentAndInit("homeContent");
  loadContent("contact");
  initListeners();
});

function loadContent(pagename) {
  var jqxhr = $.get(`pages/${pagename}.html`, (data) => {
    // console.log(data);
    $("#app").html(data);
  })
    .done(() => {
      // Called on success
      // alert("success");
    })
    .fail((error) => {
      // Called if an error occurs such as page not existing.
      // alert("error " + error.status + " " + error.statusText);
      console.error(error.status, error.statusText);
      $("#app").html("error " + error.status + " " + error.statusText);
      console.error(error);
    })
    .always(() => {
      // Called no matter done or fail
      $("nav a").each(function () {
        $(this).removeClass("active");
      });
      $(`#${pagename}`).addClass("active");
    });
}
