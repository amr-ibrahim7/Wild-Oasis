import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          //In simpler terms, the entire condition checks whether the clicked element is outside the element referenced by ref.current. If this condition is true, it means the click occurred outside the monitored element.
          //   console.log("Click outSide");
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);
      // Capture Phase: Events start from the root of the DOM and move down towards the target element. During this phase, event listeners attached with the capture parameter set to true are triggered.

      //third parameter=> True =>  Capture Phase Starts from the Root: By setting the third parameter of addEventListener to true, you're attaching your event listener to the capture phase. This means the event will start from the root of the DOM and move towards the target element.

      // Accurate Detection of Click Outside: When you click inside an element, the event goes through the capture phase. However, when you click outside the element, the event doesn't go through the capture phase for that specific element. This is because the event starts from the root and moves towards the target element, skipping the element you're monitoring. As a result, you can accurately detect clicks outside the element.

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );
  return ref;
  // In summary, the provided code establishes an event listener to track clicks on the document. When a click is detected, the handleClick function is called to determine whether the click occurred outside a specific element. The capturing phase is used to accurately capture the click events. The cleanup function ensures that the event listener is properly removed when the component is unmounted. This is a common pattern used to achieve click-outside functionality for UI elements like modals
}
