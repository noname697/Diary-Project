import { createContext, ReactElement, useState } from "react";
import { IRelato } from "../shared/IRelato";

interface RelatosContextType {
  relatos: IRelato[];
  setRelatos: React.Dispatch<React.SetStateAction<IRelato[]>>;
}

export const RelatosContext = createContext<RelatosContextType | null>(null);

RelatosContext.displayName = "RelatosContext";

export default function RelatosProvider({children} : {children: ReactElement}){
    const [relatos, setRelatos] = useState<IRelato[]>([])
    return(
        <RelatosContext.Provider value={{relatos, setRelatos}}>
            {children}
        </RelatosContext.Provider>
    )
}


