import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaTiktok,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";


export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub style={{ fontSize: "22px" }} />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <FaFacebookF style={{ fontSize: "22px" }} />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin style={{ fontSize: "22px" }} />
            </a>
          </li>
        )}
        {socialprofils.tiktok && (
          <li>
            <a href={socialprofils.tiktok}>
              <FaTiktok style={{ fontSize: "22px" }} />
            </a>
          </li>
        )}
      </ul>
      <p style={{fontSize:"18px"}}>Follow Me</p>
    </div>
  );
};
