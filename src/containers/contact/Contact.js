import React, { useState, useEffect, lazy, Suspense } from "react";
import "./Contact.scss"
import { openSource } from "../../portfolio";
import SocialMedia from "../../components/socialMedia/SocialMedia"

export default function Contact() {
  return (
    <div className="contact-main">
      <div className="contact-header">
        Let's Connect!
      </div>
      <SocialMedia />
    </div>
  )
}
