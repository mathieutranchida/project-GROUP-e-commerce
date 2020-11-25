import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { androidMenu } from "react-icons-kit/ionicons/androidMenu";
import { Icon } from "react-icons-kit";
import COLORS from "../../constants";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterItems, showAllItems } from "../../redux/actions";

const ProtoDropdown = ({className, options, filter, items, onSelect }) => {
  const dispatch = useDispatch();
  const [selection, setSelection] = useState(options[0].value);
  const selectAnother = (ev) => {
    const selected = ev.target.value;
    if (selected !== options[0].name) {
      const id = options.filter((it) => it.name === selected)[0];

      filter(items, id.value);
    } else {
      dispatch(showAllItems());
    }
    //setSelection(options[0].value);
    onSelect(false);
  };

 

  return (
    <div style={{ display: "flex", flexDirection: "column"}} >
      <label>{`${options[0].name}`}</label>
      <select value={selection} onChange={selectAnother} className={className}>
        {options.map(function (item) {
          return <option key={item.value}>{`${item.name}`}</option>;
        })}
      </select>
    </div>
  );
};



const FilterDropdwon = styled(ProtoDropdown)`
  &:hover{
    cursor: pointer;

}
`;

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const [companies, setCompanies] = useState(false);
  const dispatch = useDispatch();
  const myItems = useSelector((state) => state?.items?.itemsCopy?.data);

  const deleteDuplicates = function (attr) {
    const memo = [];
    const temp = [];
    for (let idx = 0; idx < myItems.length; idx++) {
      if (!memo.includes(myItems[idx][attr])) {
        temp.push({ name: myItems[idx][attr], value: myItems[idx][attr] });
        memo.push(myItems[idx][attr]);
      }
    }
    temp.unshift({ name: `Filter By ${attr}`, value: `Select ${attr}` });
    return temp;
  };

  let categoryOptions =
    myItems !== undefined ? deleteDuplicates("category") : false;

  let bodyLocation =
    myItems !== undefined ? deleteDuplicates("body_location") : false;

  console.log("categoryOptions", categoryOptions);

  let location = useLocation();

  const filter = (attr) => {
    return function (itemList, id) {
      dispatch(
        filterItems(
          itemList.filter((item) => {
            return item[attr] === id;
          })
        )
      );
    };
  };

  const filterByCompany = filter("companyId");

  const filterByCategory = filter("category");

  const filterByBodyLocation = filter("body_location");

  useEffect(() => {
    fetch("/companies", {
      method: "GET",
      headers: {
        "Content-Type": "application.json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const mydata = data.data.map((c) => ({ name: c.name, value: c._id }));
        mydata.unshift({ name: "Filter by Company", value: "show-all" });
        console.log(mydata);
        setCompanies(mydata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ShowFilters = () => {
    return (
      <>
        <NavItem>
          {companies && myItems !== [] ? (
            <FilterDropdwon
              options={companies}
              filter={filterByCompany}
              items={myItems}
              onSelect={setSidebar}
            />
          ) : (
            "companies filter"
          )}
        </NavItem>

        <NavItem>
          {categoryOptions ? (
            <FilterDropdwon
              options={categoryOptions}
              filter={filterByCategory}
              items={myItems}
              onSelect={setSidebar}
            />
          ) : (
            "category filter"
          )}
        </NavItem>

        <NavItem>
          {bodyLocation ? (
            <FilterDropdwon
              options={bodyLocation}
              filter={filterByBodyLocation}
              items={myItems}
              onSelect={setSidebar}
            />
          ) : (
            "bodyLoc filter"
          )}
        </NavItem>

        <NavItem>
          <ResetBtn onClick={() => dispatch(showAllItems())}>Reset search</ResetBtn>
        </NavItem>
      </>
    );
  };

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <MySidebar>
        <MenuBars>
          <Icon icon={androidMenu} size={35} onClick={showSidebar} />
        </MenuBars>
      </MySidebar>
      <nav style={navStyles(sidebar)}>
        <NavMenuItems>
          <ExitSidebar onClick={showSidebar}>X</ExitSidebar>

          {location.pathname === "/" ? (
            <ShowFilters />
          ) : (
            <div style={{ marginTop: "50px" }}>
              <p>
                Nothing to look here buddy.
                <br />
                Please go to the home page <br />
                to use some cool filters
              </p>
            </div>
          )}
        </NavMenuItems>
      </nav>
    </>
  );
}

//

const MySidebar = styled.div`
  background-color: ${COLORS.darkBlue};
  display: flex;
  justify-content: start;
  align-items: center;
`;

const MenuBars = styled.div`
  margin-left: 0.5rem;
  font-size: 0rem;
  background-color: none;
`;

const ExitSidebar = styled.button`
  /* margin-left: 2rem; */
  font-size: 50px;
  background-color: none;
  border: 1px solid white;
  border-radius: 50%;
  padding: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    cursor: pointer;

}
`;

const navStyles = (isActive) => {
  const [leftValue, milliSecs] = isActive
    ? ["-2%", "350ms"]
    : ["-100%", "350ms"];

  return {
    marginTop: "0px",
    backgroundColor: `${COLORS.darkBlue}`,
    height: "100vh",
    position: "fixed",
    top: "0",
    left: `${leftValue}`,
    padding: "50px",
    marginLeft: "0px",
    transition: `${milliSecs}`,
  };
};

const NavMenuItems = styled.ul`
  list-style: none;
`;
// const NavbarToggle = styled.li`
//    background-color: black;
//     list-style: none;
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     width: 100px;
//     height: 100px;
// `;

const NavItem = styled.li`
  padding: 32px 0px 32px 0px;
 
`;

const ResetBtn = styled.button`
  padding: 10px;
  &:hover{
    cursor: pointer;

}
 

`;

export default Sidebar;
