import React from "react";
import { useRef } from "react";
import { Create } from "../../apiServices/CRUD_Services";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import fullScreenLoader from "../Common/Loader";

function CreateForm() {
  let p_name = useRef();
  let p_code = useRef();
  let p_img = useRef();
  let p_price = useRef();
  let p_quantiy = useRef();
  let p_total = useRef();
  let loading = useRef();

  function submitHandler() {
    let ProductName = p_name.current.value;
    let ProductCode = p_code.current.value;
    let Img = p_img.current.value;
    let UnitPrice = p_price.current.value;
    let Quantity = p_quantiy.current.value;
    let TotalPrice = p_total.current.value;

    if (ProductName === "") {
      toast.error("Provide a valid Product name !!!");
    } else if (ProductCode === "") {
      toast.error("Provide a valid Product code!!!");
    } else if (Img === "") {
      toast.error("Provide a valid Image Url !!!");
    } else if (UnitPrice === "") {
      toast.error("Provide a valid UnitPrice !!!");
    } else if (Quantity === "") {
      toast.error("Provide a valid Quantity !!!");
      console.log("Provide");
    } else if (TotalPrice === "") {
      toast.error("Provide a valid Price !!!");
    } else {
      loading.current.classList.remove("LoaderHide");
      Create(ProductName, ProductCode, Img, UnitPrice, Quantity, TotalPrice)
        .then((result) => {
          if ((result = true)) {
            loading.current.classList.add("LoaderHide");
            toast.success("Data Create Sucessfully !");
            p_name.current.value = "";
            p_code.current.value = "";
            p_img.current.value = "";
            p_price.current.value = "";
            p_quantiy.current.value = "";
            p_total.current.value = "";
          } else {
            toast.error("Somwthing Went Wrong!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <div className="container">
      <div className="row">
        <h1>Create Your Won Product</h1>
        <div className="col-md-4 p2">
          <label htmlFor="">Product Name</label>
          <input type="text" className="form-control" ref={p_name} />
          <Toaster />
        </div>
        <div className="col-md-4 p2">
          <label htmlFor="">Product Code</label>
          <input type="text" className="form-control" ref={p_code} />
        </div>
        <div className="col-md-4 p2">
          <label htmlFor="">Product Img</label>
          <input type="text" className="form-control" ref={p_img} />
        </div>
        <div className="col-md-4 p2">
          <label htmlFor="">Product Price</label>
          <input type="text" className="form-control" ref={p_price} />
        </div>
        <div className="col-md-4 p2">
          <label htmlFor="">Product Qantity</label>
          <input type="text" className="form-control" ref={p_quantiy} />
        </div>
        <div className="col-md-4 p2">
          <label htmlFor="">Total Price</label>
          <input type="text" className="form-control" ref={p_total} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4 p-2">
          <button className="btn btn-success w-50" onClick={submitHandler}>
            Save{" "}
          </button>
        </div>
      </div>
      <div className="LoaderHide" ref={loading}>
        {fullScreenLoader()}
      </div>
    </div>
  );
}

export default CreateForm;
