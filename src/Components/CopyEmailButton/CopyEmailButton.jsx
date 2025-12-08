import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./CopyEmailButtonStyles.module.css";

function CopyEmailButton({ email = "banudeepreddy@gmail.com" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = email;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error("Fallback copy failed:", fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={styles.copyButton}
      aria-label={copied ? "Email copied!" : "Copy email to clipboard"}
      title={copied ? "Copied!" : "Copy email"}
    >
      <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
      <span className={styles.tooltip}>{copied ? "Copied!" : "Copy"}</span>
    </button>
  );
}

export default CopyEmailButton;

