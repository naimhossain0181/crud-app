import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Read, Delete, ReadByID } from "../../apiServices/CRUD_Services";
import fullScreenLoader from "../Common/Loader";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
function ListTable() {
  const [todoList, SetTodoList] = useState([]);
  useEffect(() => {
    Read().then((result) => {
      SetTodoList(result);
    });
  }, []);

  //delete item
  const refreshPage = () => {
    navigate(0);
  };
  const deleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Delete(id).then((result) => {
          if (result === true) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            refreshPage();
          } else {
            toast.error("Something Went Wrong!");
          }
        });
      }
    });
  };

  // Route change
  let navigate = useNavigate();

  const routeChange = (id) => {
    let path = "/update/" + id;
    navigate(path);
  };
  const updateById = (id) => {
    // alert(id);
    routeChange(id);
  };

  if (todoList.length > 0) {
    return (
      <div>
        <div>
          <Toaster></Toaster>
        </div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Product Code</th>
              <th>Product Image</th>
              <th>Product Price</th>
              <th>Product Quantity</th>
              <th>Total Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((data, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.ProductName}</td>
                  <td>{data.ProductCode}</td>
                  <td>
                    <img
                      className="img-size"
                      src={data.Img}
                      alt="pic not founf"
                    />
                  </td>
                  <td>{data.UnitPrice}</td>
                  <td>{data.Quantity}</td>
                  <td>{data.TotalPrice}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={updateById.bind(this, data._id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={deleteItem.bind(this, data._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  } else if (todoList.length <= 0) {
    return <h1>Data Not Found</h1>;
  } else {
    return <div>{fullScreenLoader()}</div>;
  }
}

export default ListTable;
