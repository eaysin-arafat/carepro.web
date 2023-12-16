import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { useState } from "react";

function Test() {
  const [state, setState] = useState(1);

  const data = [
    {
      id: 1,
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "61",
      date: "2011/04/25",
      salary: "$320,800",
    },
    {
      id: 2,
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "$170,750",
    },
    {
      id: 3,
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "66",
      date: "2009/01/12",
      salary: "$86,000",
    },
    {
      id: 4,
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: "22",
      date: "2012/03/29",
      salary: "$433,060",
    },
    {
      id: 5,
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: "33",
      date: "2008/11/28",
      salary: "$162,700",
    },
    {
      id: 6,
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "New York",
      age: "61",
      date: "2012/12/02",
      salary: "$372,000",
    },
    {
      id: 7,
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      age: "59",
      date: "2012/08/06",
      salary: "$137,500",
    },
    {
      id: 8,
      name: "Rhona Davidson",
      position: "Integration Specialist",
      office: "Tokyo",
      age: "55",
      date: "2010/10/14",
      salary: "$327,900",
    },
    {
      id: 9,
      name: "orem ipsum dolor sit amet consectetur adipisicing elit. Maxime ",
      position: "Javascript Developer",
      office: "San Francisco",
      age: "39",
      date: "2009/09/15",
      salary: "$205,500",
    },
    {
      id: 10,
      name: "orem ipsum dolor sit amet e eiuseniet aliquid culpa officia aut! Impedit sit sunt quaerat",
      position: "Software Engineer",
      office: "Edinburgh",
      age: "23",
      date: "2008/12/13",
      salary: "$103,600",
    },
  ];

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="w-full">
          <Table>
            <TableHeader
              isAction
              title={[
                {
                  title: "Age",
                  w: "50",
                },
                {
                  title: "Age",
                  w: "200",
                },
                {
                  title: "Age",
                  w: "300",
                },
                {
                  title: "Age",
                  w: "100",
                },
                {
                  title: "Age",
                  w: "100",
                },
              ]}
            />
            {data.map((item, index) => (
              <TableBody
                index={index}
                isAction
                btn={{
                  delete: true,
                }}
                item={[
                  { title: item.age, w: "100%" },
                  { title: item.age, w: "200" },
                  { title: item.age, w: "300" },
                  { title: item.age, w: "100" },
                  { title: item.age, w: "100" },
                ]}
              />
            ))}
          </Table>
          <div className="flex justify-end">
            <CustomPagination
              activePage={50}
              itemsCountPerPage={state}
              setActivePage={setState}
              totalItemsCount={1000}
              setItemPerPage={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
