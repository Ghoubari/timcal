"use client";

import React, { useState } from "react";
import Calendar from "../../../../../components/shared/Calendar";
import { format } from "date-fns/format";

const AddPlanningTypePage = () => {
  return (
    <div>
      <p>Page de consultation/création d'un planning</p>
      <Calendar />
    </div>
  );
};

export default AddPlanningTypePage;
