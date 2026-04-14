import "./NewWrapper.scss";

export default function NewWrapper({ children, locked = false }) {
  return (
    <div className={`new_wrapper ${locked ? "new_wrapper--locked" : ""}`}>
      {children}
    </div>
  );
}
