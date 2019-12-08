import React from "react"

export const Box = ({ className, children }) => (
  <div className={`mt-12 ${className}`}>{children}</div>
)

export const VerticalBox = ({ children, className = "" }) => (
  <div
    className={`flex flex-col justify-center main-content-height ${className}`}
  >
    {children}
  </div>
)
