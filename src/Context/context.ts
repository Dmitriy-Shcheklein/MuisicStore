import React from "react";
import { Service } from '../service/Service';

const MyContext = React.createContext<Partial<Service>>({})

export { MyContext };