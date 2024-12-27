// import RiveComponent from "@rive-app/react-canvas";
// import Rive from "@rive-app/react-canvas";
import { useRive } from "@rive-app/react-canvas";

export default function MyCharacter() {
  const { rive, RiveComponent } = useRive({
    src: "/my_character.riv",
    artboard: "Artboard",
    stateMachines: "State Machine 1",
    animations: [
      "Face",
      "Facial-feat",
      "Blink",
      "Lid up",
      "Lid up",
      "follow",
      "fixed",
      "unfixed",
    ],
    autoplay: true,
  });

  if (rive) {
    console.log(rive.contents);
  }

  return (
    <>
      <RiveComponent />
    </>
  );
}
