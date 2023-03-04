import React from "react";

export default function BookShow({ book, onDelete }) {
  return <div className="book-show">{book.title}</div>;
}
