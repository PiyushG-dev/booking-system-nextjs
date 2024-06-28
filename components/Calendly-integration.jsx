"use client";
import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyIntegration = () => {
  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/pjgpiyush" />
    </div>
  );
};

export default CalendlyIntegration;
