import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./component/List";
import AddToLists from "./component/AddToLists";

export interface istate {
  person: {
    name: String;
    age: number;
    url: string;
    note?: string;
  }[];
}
function App() {
  const [people, setPeople] = useState<istate["person"]>([
    {
      name: "mohammed",
      age: 12,
      url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      note: "some notes about muhe",
    },
    {
      name: "muktart",
      age: 20,
      url: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },

    {
      name: "abel ",
      age: 12,
      url: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      note: "some notes about abel",
    },
  ]);
  return (
    <div className="App">
      <h1>people invited to party</h1>
      <List person={people} />
      <AddToLists peo={people} setpe={setPeople} />
    </div>
  );
}

export default App;
