import React from "react";

const Widget = ({ activeWidget, setActiveWidget }) => {
  const widgets = ["All", "Active", "Completed"];
  return (
    <>
      <div className="widget">
        {widgets.map((w) => (
          <div
            className={`sort ${
              activeWidget.toLocaleLowerCase() === w.toLocaleLowerCase() &&
              "active"
            }`}
            onClick={() => setActiveWidget(w)}
          >
            <button type="text" className="tasks">
              {" "}
              {w}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Widget;
