import React, { useContext } from "react";
import "./Contact.scss"
import StyleContext from "../../contexts/StyleContext";
import SocialMedia from "../../components/socialMedia/SocialMedia"

export default function Contact() {
  const { isDark } = useContext(StyleContext);

  return (
    <div className="contact-main">
      <div className={isDark ? "contact-header text-dark" : "contact-header"}>
        Let's Connect!
      </div>
      <SocialMedia />
    </div>
  )
}
