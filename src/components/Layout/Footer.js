import { useState, useEffect } from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={classes.footer}>
      <div className={classes.copyright}>
        &copy; {currentYear} Password Generator. All rights reserved.
      </div>
      <div className={classes.credits}>
        Powered by{" "}
        <a href="https://brightcraft.github.io" title="BrightCraft's website" alt="Author Website" rel="noopener noreferrer">
          <strong>BrightCraft</strong>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
