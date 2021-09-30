const { Router } = require("express");
const router = Router();
var counter = 0;


router.get("/", (req, res) => {
  res.render("index", {
    index: counter,
  });
});

router.get("/click-on-me", (req, res) => {
  ++counter;
  res.render("click-on-me", {
    index: counter,
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    name: "Artem",
  });
});

module.exports = router;
