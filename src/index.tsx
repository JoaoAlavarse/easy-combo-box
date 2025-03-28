import React from "react";
import { useState } from "react";

export default function ComboBox(props: ComboBoxProps) {
  const [ showList, setShowList ] = useState<boolean>(false)
  const [ filter, setFilter ] = useState<string>("")

  function setShowListTrue(){
    setShowList(true)
  }

  function setShowListFalse(){
    setShowList(false)
  }

  function setShowListInvert(){
    setShowList(!showList)
  }

  return (
    <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "12px" }}>
      <input
        className={props.inputClassName || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFilter(e.target.value)
          setShowListTrue()
        }}
        value={filter}
        placeholder={props.placeholder || ""}
        type="text"
        onClick={setShowListInvert}
      />
      {showList ? (
        <ul
          style={{ position: "absolute", zIndex: "30", width: "100%", overflow: "auto", marginTop: "40px" }}
          className={props.listWrapperClassName || ""}
        >
          {
            props.data.filter((current: string) => current.toLowerCase().includes(filter.toLowerCase())).map((current: string, index: number) => (
              <li
                className={props.listItemClassName || ""}
                key={index}
                onClick={() => {
                  props.onClick(current)
                  setFilter(current)
                  setShowListFalse()
                }}
              >
                { current }
              </li>
            ))
          }
        </ul>
      ) : null}
    </div>
  );
}

interface ComboBoxProps {
  data: string[];
  inputClassName?: string;
  listItemClassName?: string;
  listWrapperClassName?: string
  onClick: (value: string) => void;
  placeholder?: string;
}