import { createContext, useContext } from "react";

export const CursorContext = createContext(null);
export const useCursorProps = () => useContext(CursorContext);