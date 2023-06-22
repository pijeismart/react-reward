import React from "react";

export const Appbar = ({title, url}) => {
  return (
    <div className="app-bar">
        <h1 className="app-title">{title}</h1>
        <img src={url} alt={url.split(".")[0]} />
      </div>
  )
}