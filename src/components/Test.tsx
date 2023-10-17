import { createContext, useContext } from "react";
import { DoesNotGetContext } from "./DoesNotGetContext";

export const rootContext = createContext<{hello: string} | undefined>(undefined);

export default () => {  
  return <rootContext.Provider value={{hello: 'world'}}>
    <DoesGetContext/>
    <DoesNotGetContext/>
  </rootContext.Provider>
}

const DoesGetContext = () => {
  const ctx = useContext(rootContext);
  console.log('ctx in DoesGetContext: ', ctx);
  return <></>
}