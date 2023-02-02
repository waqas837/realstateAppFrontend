import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
function MyForm() {
  const [value, setvalues] = useState("");
  const [files, setFiles] = useState([]);
  const [products, setproducts] = useState(null);
  const [pageRefresh, setpageRefresh] = useState();
  useEffect(() => {
    getProducts();
  }, [products]);
  useEffect(() => {}, [pageRefresh]);

  const getProducts = async () => {
    let email = localStorage.getItem("email");
    try {
      let { data } = await axios.get(
        `http://localhost:8080/posts/getProducts/${email}`
      );
      setproducts(data.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  // dropzon
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = localStorage.getItem("email");
    const formData = new FormData();
    formData.append("email", email);
    formData.append("status", value.status);
    formData.append("propertyType", value.propertyType);
    formData.append("street", value.street);
    formData.append("unit", value.unit);
    formData.append("streetName", value.streetName);
    formData.append("streetSuffix", value.streetSuffix);
    formData.append("city", value.city);
    formData.append("state", value.state);
    formData.append("listPrice", value.listPrice);
    formData.append("bedrooms", value.bedrooms);
    formData.append("bathrooms", value.bathrooms);
    formData.append("finishedsqft", value.finishedsqft);
    formData.append("acres", value.acres);
    formData.append("publicRemarks", value.publicRemarks);
    files.forEach((file) => formData.append("image", file));

    fetch("http://localhost:8080/posts/bigform", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Product added!");
          console.log("data", data);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: 60,
          width: "70%",
        }}
      >
        <Toaster />
        <div>
          <h1>Create Listing</h1>
          <h1>View Listing</h1>
          <h1>Profile</h1>
          <h1>Logout</h1>
        </div>
        <div
          style={{
            background: "white",
            boxShadow: "20px white",
            padding: 20,
          }}
        >
          <h2 style={{ textAlign: "center" }}>Product Form</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="selectedOption">List Price:</label>
              <select
                style={{ width: "100%" }}
                id="selectedOption"
                value={value.status}
                onChange={(e) =>
                  setvalues({ ...value, status: e.target.value })
                }
              >
                <option value="">Select an option</option>
                <option value="active">active</option>
                <option value="unactive">unactive</option>
              </select>
            </div>

            <div>
              <label htmlFor="selectedOption">Property type:</label>
              <select
                style={{ width: "100%" }}
                id="selectedOption"
                value={value.propertyType}
                onChange={(e) =>
                  setvalues({ ...value, propertyType: e.target.value })
                }
              >
                <option value="">Select an option</option>
                <option value="Commercial">Commercial</option>
                <option value="Residential">Residential</option>
              </select>
            </div>
            {/* street */}
            <div>
              <label htmlFor="street">Street:</label>
              <input
                style={{ width: "100%" }}
                id="street"
                type="text"
                onChange={(e) =>
                  setvalues({ ...value, street: e.target.value })
                }
              />
            </div>
            {/* unit */}
            <div>
              <label htmlFor="unit">Unit:</label>
              <input
                style={{ width: "100%" }}
                id="unit"
                type="text"
                onChange={(e) => setvalues({ ...value, unit: e.target.value })}
              />
            </div>
            {/* streetName */}
            <div>
              <label htmlFor="streetName">Street Name:</label>
              <input
                style={{ width: "100%" }}
                type="streetName"
                onChange={(e) =>
                  setvalues({ ...value, streetName: e.target.value })
                }
              />
            </div>
            {/* streetSuffix */}

            <div>
              <label htmlFor="selectedOption">streetSuffix:</label>
              <select
                style={{ width: "100%" }}
                id="selectedOption"
                value={value.streetSuffix}
                onChange={(e) =>
                  setvalues({ ...value, streetSuffix: e.target.value })
                }
              >
                <option value="">Select an option</option>
                <option value="Avenue ">Avenue </option>
                <option value="Crescent ">Crescent </option>
                <option value="Close  ">Close </option>
              </select>
            </div>

            {/* city */}
            <div>
              <label htmlFor="city">city Name:</label>
              <input
                style={{ width: "100%" }}
                id="city"
                type="text"
                onChange={(e) => setvalues({ ...value, city: e.target.value })}
              />
            </div>

            {/* state */}
            <div>
              <label htmlFor="state">State:</label>
              <input
                style={{ width: "100%" }}
                id="state"
                type="text"
                onChange={(e) => setvalues({ ...value, state: e.target.value })}
              />
            </div>

            {/* zipCode */}
            <div>
              <label htmlFor="zipCode">Zip Code:</label>
              <input
                style={{ width: "100%" }}
                id="zipCode"
                type="text"
                onChange={(e) =>
                  setvalues({ ...value, zipCode: e.target.value })
                }
              />
            </div>

            {/* listPrice */}
            <div>
              <label htmlFor="listPrice">List Price:</label>
              <input
                style={{ width: "100%" }}
                id="listPrice"
                type="text"
                onChange={(e) =>
                  setvalues({ ...value, listPrice: e.target.value })
                }
              />
            </div>

            {/* bedrooms */}

            <div>
              <label htmlFor="selectedOption">bedrooms:</label>
              <select
                style={{ width: "100%" }}
                id="selectedOption"
                value={value.bedrooms}
                onChange={(e) =>
                  setvalues({ ...value, bedrooms: e.target.value })
                }
              >
                <option value="">Select an option</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            {/* bathrooms */}

            <div>
              <label htmlFor="selectedOption">bathrooms:</label>
              <select
                style={{ width: "100%" }}
                id="selectedOption"
                value={value.bathrooms}
                onChange={(e) =>
                  setvalues({ ...value, bathrooms: e.target.value })
                }
              >
                <option value="">Select an option</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            {/* finishedsqft */}
            <div>
              <label htmlFor="finishedsqft">Finished sqft:</label>
              <input
                style={{ width: "100%" }}
                id="finishedsqft"
                type="text"
                onChange={(e) =>
                  setvalues({ ...value, finishedsqft: e.target.value })
                }
              />
            </div>

            <div>
              {/* acres */}
              <label htmlFor="acres">Acres:</label>
              <input
                style={{ width: "100%" }}
                id="acres"
                type="text"
                onChange={(e) => setvalues({ ...value, acres: e.target.value })}
              />
            </div>
            {/* publicRemarks */}
            <div>
              <label htmlFor="selectedOption">Public Remarks:</label>
              <select
                style={{ width: "100%" }}
                id="selectedOption"
                value={value.publicRemarks}
                onChange={(e) =>
                  setvalues({ ...value, publicRemarks: e.target.value })
                }
              >
                <option value="">Select an option</option>
                <option value="Nice">Nice</option>
                <option value="Good">Good</option>
                <option value="Bad">Bad</option>
                <option value="Awesome">Awesome</option>
                <option value="Great">Great</option>
              </select>
            </div>
            {/* ends */}
            <div
              {...getRootProps()}
              style={{
                border: "1px dashed gray",
                padding: "10px",
                width: "500px",
                height: "200px",
              }}
            >
              <input {...getInputProps()} />
              <div style={{ textAlign: "center" }}>
                <h1>Drag and drop some files here</h1>
                <h1>or</h1>
                <h1 style={{ color: "lightblue" }}>Browse files</h1>
              </div>
              <div style={{ textAlign: "center", paddingBottom: 10 }}>
                <BsFillArrowUpCircleFill size={"50px"} color="gray" />
              </div>
            </div>
            <br />
            <button style={{ width: "100%" }} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* show all products */}
      <div id="products">
        <h2 style={{ textAlign: "center" }}>Products</h2>
        {products &&
          products.map((val, index) => (
            <div
              style={{
                width: "50%",
                margin: "auto",
                background: "white",
                boxShadow: "gray 10px",
              }}
            >
              <img
                src={`http://localhost:8080/${val.imagePath}`}
                width={"100%"}
              />
              <div>
                <p>{val.listPrice}</p>
                <p>{val.bathrooms}</p>
                <p>{val.propertyType}</p>
                <p>{val.street}</p>
                <p>{val.streetName}</p>
                <p>{val.streetSuffix}</p>
                <p>{val.unit}</p>
                <p>{val.finishedsqft}</p>
                <p>{val.city}</p>
                <p>{val.bedrooms}</p>
                <p>{val.bathrooms}</p>
                <p>{val.acres}</p>
                <p>{val.acres}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MyForm;
