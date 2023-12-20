// import React, { useState } from "react";
// import CustomDropdown from "./CustomDropdown";

import CustomDropdown from "@/pages/anc-referrals/form-component/CustomDropdown";
import { Fragment, useState } from "react";

const ntglevelData = [
  {
    id: 1,
    name: "Anaemia And Nutritional Conditions",
    subcategory: [
      {
        id: 1,
        name: "anaemia",
        options: [""],
      },
      {
        id: 2,
        name: "malnutrition",
        options: [""],
      },
      {
        id: 3,
        name: "vitamin deficincies",
        options: [
          { id: 1, name: "vitamin A" },
          { id: 2, name: "vitamin C (ascorbic acid)" },
          { id: 3, name: "vitamin D" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Cardiovascular Disorders",
    subcategory: [
      {
        id: 1,
        name: "Angina pectoris",
        options: [
          {
            id: 1,
            name: "Restrictive cardiomyopathy",
          },
        ],
      },
      {
        id: 2,
        name: "Cardiac arrhythmias",
        options: [{ id: 1, name: '"Chronic Rheumatic heart Disease"' }],
      },
      {
        id: 3,
        name: "Cardiopulmonary Resuscitation and advance cardiac life support",
        options: [""],
      },
    ],
  },
  {
    id: 3,
    name: "Conditions Of The Ear, Nose And Oropharynx",
    subcategory: [
      {
        id: 1,
        name: "Ear conditions",
        options: [
          { id: 1, name: "acute otits media" },
          { id: 2, name: "chronic suppurative otistis media" },
          { id: 3, name: "acute otits media" },
          { id: 4, name: "chronic suppurative otistis media" },
        ],
      },
      {
        id: 2,
        name: "Cardiac arrhythmias",
        options: [{ id: 1, name: "Chronic Rheumatic heart Disease" }],
      },
      {
        id: 3,
        name: "Cardiopulmonary Resuscitation and advance cardiac life support",
        options: [""],
      },
    ],
  },
  {
    id: 4,
    name: "Dermatoglogical Conditions",
    subcategory: [
      {
        id: 1,
        name: "Ear conditions",
        options: [
          { id: 1, name: "acute otits media" },
          { id: 2, name: "chronic suppurative otistis media" },
          { id: 3, name: "acute otits media" },
          { id: 4, name: "chronic suppurative otistis media" },
        ],
      },
      {
        id: 2,
        name: "Cardiac arrhythmias",
        options: [{ id: 1, name: '"Chronic Rheumatic heart Disease"' }],
      },
      {
        id: 3,
        name: "Cardiopulmonary Resuscitation and advance cardiac life support",
        options: [""],
      },
    ],
  },
  {
    id: 5,
    name: "Disorders Of The Renal System",
    subcategory: [
      {
        id: 1,
        name: "Ear conditions",
        options: [
          { id: 1, name: "acute otits media" },
          { id: 2, name: "chronic suppurative otistis media" },
          { id: 3, name: "acute otits media" },
        ],
      },
      {
        id: 2,
        name: "Cardiac arrhythmias",
        options: [{ id: 1, name: '"Chronic Rheumatic heart Disease"' }],
      },
      {
        id: 3,
        name: "Cardiopulmonary Resuscitation and advance cardiac life support",
        options: [""],
      },
    ],
  },
  {
    id: 6,
    name: "Essential Laboratory Supplies List",
    subcategory: [
      {
        name: "Ear conditions",
        options: [
          { id: 1, name: "acute otits media" },
          { id: 4, name: "chronic suppurative otistis media" },
        ],
      },
      {
        name: "Cardiac arrhythmias",
        options: [{ id: 1, name: '"Chronic Rheumatic heart Disease"' }],
      },
      {
        name: "Cardiopulmonary Resuscitation and advance cardiac life support",
        options: [""],
      },
    ],
  },
  {
    id: 6,
    name: "Eye Disease",
    subcategory: [
      {
        name: "Ear conditions",
        options: [{ id: 4, name: "chronic suppurative otistis media" }],
      },
      {
        name: "Cardiac arrhythmias",
        options: [{ id: 1, name: '"Chronic Rheumatic heart Disease"' }],
      },
      {
        name: "Cardiopulmonary Resuscitation and advance cardiac life support",
        options: [""],
      },
    ],
  },
];

const CronicMultiDependentDropdown = () => {
  const [selectedLevel1, setSelectedLevel1] = useState("");
  const [selectedLevel2, setSelectedLevel2] = useState("");
  const [selectedLevel3, setSelectedLevel3] = useState("");

  const [inputValueLevel1, setInputValueLevel1] = useState("");
  const [inputValueLevel2, setInputValueLevel2] = useState("");
  const [inputValueLevel3, setInputValueLevel3] = useState("");

  const [openLevel1, setOpenLevel1] = useState(false);
  const [openLevel2, setOpenLevel2] = useState(false);
  const [openLevel3, setOpenLevel3] = useState(false);

  const handleSelectOptionLevel1 = () => {
    setOpenLevel1(false);

    setSelectedLevel2("");
    setSelectedLevel3("");
  };

  const handleSelectOptionLevel2 = () => {
    setOpenLevel2(false);

    setSelectedLevel3("");
  };

  const handleSelectOptionLevel3 = () => {
    setOpenLevel3(false);
  };

  const handleOpenLevel1 = () => {
    setOpenLevel1((prev) => !prev);
    setOpenLevel2(false);
    setOpenLevel3(false);
  };

  const handleOpenLevel2 = () => {
    setOpenLevel2((prev) => !prev);
    setOpenLevel1(false);
    setOpenLevel3(false);
  };
  const handleOpenLevel3 = () => {
    setOpenLevel3((prev) => !prev);
    setOpenLevel1(false);
    setOpenLevel2(false);
  };

  return (
    <Fragment>
      <div>
        <CustomDropdown
          data={ntglevelData}
          selected={selectedLevel1}
          setSelected={setSelectedLevel1}
          inputValue={inputValueLevel1}
          setInputValue={setInputValueLevel1}
          open={openLevel1}
          optionOnClick={handleSelectOptionLevel1}
          selectOnClick={handleOpenLevel1}
          label="NTG Level 1"
          required
        />
      </div>

      <div>
        <CustomDropdown
          data={ntglevelData
            .find((ntg) => ntg.name === selectedLevel1)
            ?.subcategory.map((subcategory) => subcategory)}
          selected={selectedLevel2}
          setSelected={setSelectedLevel2}
          inputValue={inputValueLevel2}
          setInputValue={setInputValueLevel2}
          open={openLevel2}
          optionOnClick={handleSelectOptionLevel2}
          selectOnClick={handleOpenLevel2}
          label="NTG Level 2"
          required
        />
      </div>

      <div>
        <CustomDropdown
          data={ntglevelData
            .find((ntg) => ntg.name === selectedLevel1)
            ?.subcategory.find((ntglevel2) => ntglevel2.name === selectedLevel2)
            ?.options.map((option) => option)}
          selected={selectedLevel3}
          setSelected={setSelectedLevel3}
          inputValue={inputValueLevel3}
          setInputValue={setInputValueLevel3}
          open={openLevel3}
          optionOnClick={handleSelectOptionLevel3}
          selectOnClick={handleOpenLevel3}
          label="NTG Level 3"
          required
        />
      </div>
    </Fragment>
  );
};

export default CronicMultiDependentDropdown;
