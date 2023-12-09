import Family from "../models/familyModel.js";

const checkIncoming = (req, res, next) => {
  if (!req.body.firstname || !req.body.lastname || !req.body.mobile) {
    return res.status(400).json({
      status: "failure",
      message: "Missing parameter",
    });
  }

  next();
};

// Create
const createFamily = async (req, res) => {
  try {
    const newFamily = await Family.create(req.body);

    res.status(201).json({
      status: "success",
      message: "",
      data: {
        family: newFamily,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failure",
      message: "Invalid data sent!",
    });
  }
};

// Read All
const readAllFamily = async (req, res) => {
  try {
    const families = await Family.find({});

    res.status(200).json({
      status: "success",
      message: "",
      data: {
        families: families,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "failure",
      message: "Something went wrong! Please try again!",
    });
  }
};

// Read
const readEachFamily = async (req, res) => {
  try {
    const family = await Family.findById(req.params.id);

    if (!family) {
      return res.status(404).json({
        status: "failure",
        message: "Not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "",
      data: {
        family: family,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failure",
      message: "Something went wrong! Please try again!",
    });
  }
};

// Update
const updateFamily = async (req, res) => {
  const _id = req.params.id;

  const updateKey = Object.keys(req.body);
  const allowedKey = ["firstname", "middlename", "lastname", "mobile"];
  const isValid = updateKey.every((upd) => {
    return allowedKey.includes(upd);
  });

  if (!isValid) {
    return res.status(400).json({
      status: "failure",
      message: "Invalid update",
    });
  }

  try {
    const existFamily = await Family.findById({ _id });
    if (!existFamily) {
      return res.status(404).json({
        status: "failure",
        message: "No exist",
      });
    }

    const family = await Family.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "success",
      message: "",
      data: {
        family: family,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "failure",
      message: "Something went wrong! Please try again!",
    });
  }
};

// Delete
const deleteFamily = async (req, res) => {
  try {
    const _id = req.params.id;

    try {
      const existFamily = await Family.findById({ _id });
      if (!existFamily) {
        return res.status(404).json({
          status: "failure",
          message: "No exist",
        });
      }

      const deletedFamily = await Family.findByIdAndDelete(_id);

      res.status(200).json({
        status: "success",
        message: "Successfully deleted",
        data: {
          family: deletedFamily,
        },
      });
    } catch (error) {
      res.status(400).json({
        status: "failure",
        message: "Something went wrong! Please try again!",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "failure",
      message: error,
    });
  }
};

export {
  createFamily,
  readAllFamily,
  readEachFamily,
  updateFamily,
  deleteFamily,
  checkIncoming,
};
