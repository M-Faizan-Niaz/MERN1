import React, { useState } from "react";
import "./AddCourse.css";
import axios from "axios";
import { toast } from "react-toastify";

const AddCourse = ({ url }) => {
  const [data, setData] = useState({
    title: "",
    description: "",
    link: "",
    rating: 5,
  });

  const [icon, setIcon] = useState(null);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("link", data.link);
    formData.append("rating", data.rating);
    if (icon) formData.append("icon", icon);

    try {
      const res = await axios.post(`${url}/api/v1/courses`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success("Course added successfully!");
        setData({
          title: "",
          description: "",
          link: "",
          rating: 5,
        });
        setIcon(null);
      } else {
        toast.error(res.data.message || "Failed to add course");
      }
    } catch (err) {
      toast.error("Something went wrong!");
      console.error(err);
    }
  };

  return (
    <div className="add-teacher">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="upload-section flex-col">
          <p>Upload Icon (Optional)</p>
          <label htmlFor="icon">
            <img
              src={icon ? URL.createObjectURL(icon) : "/default-icon.png"}
              alt="course icon"
            />
          </label>
          <input
            onChange={(e) => setIcon(e.target.files[0])}
            type="file"
            id="icon"
            hidden
          />
        </div>

        <div className="field-group flex-col">
          <p>Course Title</p>
          <input
            onChange={onChangeHandler}
            value={data.title}
            type="text"
            name="title"
            placeholder="Enter course title"
            required
          />
        </div>

        <div className="field-group flex-col">
          <p>Course Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="5"
            placeholder="Enter course description"
            required
          ></textarea>
        </div>

        <div className="field-group flex-col">
          <p>Course Link</p>
          <input
            onChange={onChangeHandler}
            value={data.link}
            type="text"
            name="link"
            placeholder="Enter course link (YouTube, PDF, etc.)"
            required
          />
        </div>

        <div className="field-group flex-col">
          <p>Rating (1–5)</p>
          <input
            onChange={onChangeHandler}
            value={data.rating}
            type="number"
            name="rating"
            min="1"
            max="5"
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
