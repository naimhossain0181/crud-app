const ProductModel = require("../Models/Product_Model");

exports.CreateProduct = (req, res) => {
  const data = req.body;
  ProductModel.create(data, (err, data) => {
    if (err) {
      res
        .status(501)
        .json({ status: "Data Create Failed Something Went Wrong" }, err);
    } else {
      res.status(200).json({ status: "Data Created Successfully", data: data });
    }
  });
};

exports.ReadProduct = (req, res) => {
  const Query = {};
  const Projection = { CreateDate: 0 };
  ProductModel.find(Query, Projection, (err, data) => {
    if (err) {
      res.status(501);
    } else {
      res.status(200).json({ status: "Data Read Successfully", data: data });
    }
  });
};
exports.ReadProductByID = (req, res) => {
  const id = req.params.id;
  const Query = { _id: id };
  const Projection = { CreateDate: 0 };
  ProductModel.find(Query, Projection, (err, data) => {
    if (err) {
      res.status(501);
    } else {
      res.status(200).json({ status: "Data Read Successfully", data: data });
    }
  });
};

exports.UpdateProduct = (req, res) => {
  const id = req.params.id;
  const Query = { _id: id };
  const UpdateData = req.body;
  ProductModel.updateOne(Query, UpdateData, (err, data) => {
    if (err) {
      res.status(501).json({ status: "Data Update Failed Something Went" });
    } else {
      res.status(200).json({ status: "Data Updated Successfully", data: data });
    }
  });
};

exports.DeleteProduct = (req, res) => {
  const id = req.params.id;
  const Query = { _id: id };
  ProductModel.deleteOne(Query, (err, data) => {
    if (err) {
      res.status(501).json({ status: "Data Delete Failed Something Went " });
    } else {
      res.status(200).json({ status: "Data Deleted Successfully", data: data });
    }
  });
};
