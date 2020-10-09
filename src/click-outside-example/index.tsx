import React, { useState, useRef } from "react";
import useOnClickOutside from "../useOnClickOutside";

const ClickOutsideExample: React.FC<{}> = () => {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef<HTMLDivElement>(null);
  // State for our modal
  const [isModalOpen, setModalOpen] = useState(false);
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div>
      {isModalOpen ? (
        <div ref={ref} className="pizza-modal">
          <span>
            <span role="img" aria-label="pizza">
              🍕
            </span>{" "}
            Hey, Click anywhere outside of here to get this pizza.
          </span>
        </div>
      ) : (
        <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
          Pizza store
        </button>
      )}
    </div>
  );
};

export default ClickOutsideExample;
