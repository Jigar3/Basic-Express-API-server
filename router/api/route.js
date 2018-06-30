const express = require("express");
const router = express.Router();
const Student = require("../../models/model");
const _ = require("lodash");

router.get("/", (req, res) => {
  Student.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});

router.post("/", (req, res) => {
  console.log(req.body);
  const studentData = {
    name: req.body.name,
    age: req.body.age,
    enrollmentNumber: req.body.enrollmentNumber
  };

  console.log(studentData);
  Student.create(studentData)
    .then(data => {
      res.send(data);
      console.log("Data Added", data);
    })
    .catch(err => {
      res.send(err);
    });
});

router.delete("/:id", (req, res) => {
  Student.findById(req.params.id)
    .remove()
    .then(data => {
      res.send(data);
      console.log(data);
    })
    .catch(err => {
      res.send(err);
    });
});

router.patch("/:id", (req, res) => {
  Student.findById(req.params.id, (err, student) => {
    if (err) {
      res.status(404).send(err);
    } else {
      const data = _.pick(req.body, ["name", "age", "enrollmentNumber"]);
      student.set(data);
      student
        .save()
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.send(err);
        });
    }
  });
});

module.exports = router;
