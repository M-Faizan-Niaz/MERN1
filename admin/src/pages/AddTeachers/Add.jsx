import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const AddTeacher = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    category: "Qari",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/teachers/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          email: "",
          phone: "",
          description: "",
          category: "Qari",
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="add-teacher">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="upload-section flex-col">
          <p>Upload Profile Picture</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        <div className="field-group flex-col">
          <p>Full Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Enter full name"
            required
          />
        </div>

        <div className="field-group flex-col">
          <p>Email Address</p>
          <input
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </div>

        <div className="field-group flex-col">
          <p>Contact Number</p>
          <input
            onChange={onChangeHandler}
            value={data.phone}
            type="text"
            name="phone"
            placeholder="Enter phone number"
            required
          />
        </div>

        <div className="field-group flex-col">
          <p>Teacher Bio</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write about the teacher"
            required
          ></textarea>
        </div>

        <div className="field-group flex-col">
          <p>Teacher Category</p>
          <select
            name="category"
            onChange={onChangeHandler}
            value={data.category}
          >
            <option value="Qari">Qari</option>
            <option value="Hafiz">Hafiz</option>
            <option value="Aalim">Aalim</option>
            <option value="Female Teacher">Female Teacher</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Add Teacher
        </button>
      </form>
    </div>
  );
};

export default AddTeacher;
