
"use client"
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const  Header = dynamic(() => import("./components/_main/Header"));
const  BuyPhoneNum = dynamic(() => import("./components/_main/BuyPhoneNum"));

export default function Home() {

  return (
    <Provider store={store}>

    <div className="w-full h-full">
     <Header/>
     <section className="w-full px-2">
     <BuyPhoneNum/>
     </section>
    </div>
    </Provider>
  );
}
