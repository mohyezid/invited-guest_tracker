import React, { ReactNode } from "react";
interface people {
  person: {
    name: String;
    age: number;
    url: string;
    note?: string;
  }[];
}
const List: React.FC<people> = ({ person }) => {
  console.log(person);
  const renderList = () => {
    return person.map((data) => (
      <li className="List">
        <div className="List-header">
          <img className="List-img" src={data.url}></img>
          <h2>{data.name}</h2>
        </div>
        <p>{data.age}</p>
        <p className="List-note">{data.note}</p>
      </li>
    ));
  };

  return <ul>{renderList()}</ul>;
};

export default List;
