import axios from "axios";
// Create Api
export function Create(
  ProductName,
  ProductCode,
  Img,
  UnitPrice,
  Quantity,
  TotalPrice
) {
  const URI = "http://localhost:9090/api/add";
  let reqBody = {
    ProductName: ProductName,
    ProductCode: ProductCode,
    Img: Img,
    UnitPrice: UnitPrice,
    Quantity: Quantity,
    TotalPrice: TotalPrice,
  };
  return axios
    .post(URI, reqBody)
    .then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      if (err) {
        console.log(err);
        return false;
      }
    });
}

// read product api
export function Read() {
  const URI = "http://localhost:9090/api/read";

  return axios
    .get(URI)
    .then((res) => {
      if (res.status === 200) {
        return res?.data?.data;
      } else {
        return false;
      }
    })
    .catch((err) => {
      if (err) {
        console.log(err);
        return false;
      }
    });
}

//read by id
export function ReadByID(id) {
  const URI = "http://localhost:9090/api/readbyid/" + id;

  return axios
    .get(URI)
    .then((res) => {
      if (res.status === 200) {
        return res?.data?.data;
      } else {
        return false;
      }
    })
    .catch((err) => {
      if (err) {
        console.log(err);
        return false;
      }
    });
}

export function Delete(id) {
  const URI = "http://localhost:9090/api/delete/" + id;
  return axios
    .post(URI)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

export function Update(
  id,
  ProductName,
  ProductCode,
  Img,
  UnitPrice,
  Quantity,
  TotalPrice
) {
  const URI = "http://localhost:9090/api/update/" + id;
  const reqBody = {
    ProductName: ProductName,
    ProductCode: ProductCode,
    Img: Img,
    UnitPrice: UnitPrice,
    Quantity: Quantity,
    TotalPrice: TotalPrice,
  };

  return axios
    .post(URI, reqBody)
    .then((res) => {
      if (res.status === 200) {
        return res?.data?.data;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}
