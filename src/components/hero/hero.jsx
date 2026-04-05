import { useEffect, useRef, useState } from "react";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-webgl2";
import { useCursorProps } from "../../components/cursor/CursorContext";

import "./hero.scss";

export default function Hero() {
  const cursorProps = useCursorProps();
  const selectLanguageRef = useRef(null);
  const [currentLang, setCurrentLang] = useState(0);

  const { rive, RiveComponent } = useRive({
    src: "/vib.riv",
    artboard: "Artboard",
    stateMachines: "State Machine",
    autoplay: false,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    onLoad: () => console.log("✅ Rive loaded"),
  });

  useEffect(() => {
    if (!rive) return;

    try {
      const viewModel = rive.viewModelByName("LanguageMode");
      if (!viewModel) return;

      const vmInstance = viewModel.defaultInstance();
      if (!vmInstance) return;

      rive.bindViewModelInstance(vmInstance);

      const selectLanguage = vmInstance.number("selectLanguage");
      if (!selectLanguage) return;

      selectLanguageRef.current = selectLanguage;
      selectLanguage.value = 0;

      rive.play("State Machine");
      console.log("✅ Ready");
    } catch (e) {
      console.error("VM error:", e);
    }
  }, [rive]);

  function handleKeyboardClick() {
    const prop = selectLanguageRef.current;
    if (!prop) return;
    const next = (prop.value + 1) % 3;
    prop.value = next;
    setCurrentLang(next);
    console.log("⌨️ selectLanguage:", next);
  }
  

  return (
    <div>
      <div className="rive_cont">
        <RiveComponent className="rive_element" {...cursorProps("There's a Blue button below")} />
        <div
        {...cursorProps("Blue button! What does it do?")}
          onClick={handleKeyboardClick}
          style={{
            position: "absolute",
            top: "78%",
            left: "28%",
            width: "44%",
            height: "18%",
            cursor: "pointer",
            // background: "rgba(255,0,0,0.3)", // remove once positioned
          }}
        />
      </div>
    </div>
  );
}