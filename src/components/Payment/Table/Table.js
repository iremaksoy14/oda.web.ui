import "./stye.css";
import React from 'react'
export default function Table() {
  const rowHeaders = [
    "",
    "B1",
    "Adı",
    "Kdu",
    "VÖEN",
    "M/H",
    "S.W.I.F.T.BIK",
    "B2.",
    "Adı",
    "HH N",
    "VÖEN",
    "Büdca saviyyası kdu"


  ];

  const meals = [
    {
      id: 64,
      sixAM: "Benefislar (alan) bank",
      nineAM: "Ham and Swiss Roll Ups",
      twelveAM: "Turkey Melt",
      threePM: "Bod•ē Burn with Mozzarella and Tomato Slices",
      sixPM: "Turkey Melt",
      Carb: "LOW-CARB"
    },
   
  ];

  const columnKeys = Object.keys(meals[0]).filter((f) => f !== "Carb");

  return (
    <>
      <table>
        <tbody>
          {rowHeaders.map((header, index) => (
            <tr key={header}>
              <th>{header}</th>
              {meals.map((meal) =>
                index > 0 ? (
                  <td key={meal.id}>{meal[columnKeys[index]]}</td>
                ) : (
                  <td key={meal.id}></td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
