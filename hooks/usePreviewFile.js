"use client";
import { useEffect, useState } from "react";

export function usePreviewFile() {
  const [preview, setPreview] = useState({ file: null, url: "" });
  useEffect(() => {
    return () => { if (preview.url) URL.revokeObjectURL(preview.url); };
  }, [preview.url]);
  function setFile(file) {
    setPreview({ file, url: file ? URL.createObjectURL(file) : "" });
  }
  return { file: preview.file, url: preview.url, setFile };
}
