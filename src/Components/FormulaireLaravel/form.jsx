import React from "react";
import "./form.css";

export default function form() {
  return (
    <div className="Container">
      <form action="" method="post">
        <div className="input">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Entre your name" />
        </div>
        <div className="input">
          <label htmlFor="cv">Cv</label>
          <input type="file" name="cv" />
        </div>
        <div className="input">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" placeholder="Enter your E-mail" />
        </div>
        <button class="learn-more" type="submit">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Submit</span>
        </button>
      </form>
    </div>
  );
}
