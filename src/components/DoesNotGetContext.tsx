import { useContext } from "react";
import { rootContext } from "./Test";

export const DoesNotGetContext = () => {
  const ctx = useContext(rootContext);
  console.log('ctx in DoesNotGetContext: ', ctx);
  return <></>
}