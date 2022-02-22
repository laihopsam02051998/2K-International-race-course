import React, { useEffect, useState } from "react";
import ButtonSearch from "../../components/Form/InputSearch";
import Panigation from "../../components/Pagination";
import Table from "./../../components/Table";
import styleManagementUser from "./style";
import { userService } from "../../Services";
import StatisticalList from "../../components/Statistical/StatisticalList";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@material-ui/core";

function Management() {
  const [numberData, setnumberData] = useState(10);

  const [listUser, setListUser] = useState({
    user: [],
  });

  const handleChange = (event) => {
    setnumberData(event.target.value);
  };

  useEffect(() => {
    userService
      .getUser(numberData)
      .then((res) => {
        console.log(res.data.items);
        setListUser({
          user: [...res.data.items],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [numberData]);

  const classes = styleManagementUser();
  return (
    <div className={classes.container}>
      <div className={classes.ManagementUserTitle}>
        <h1>Quản lý người dùng</h1>
      </div>
      <div className={classes.ManagementUserControl}>
        <div className={classes.productControllerLeft}>
          <Box sx={{ minWidth: 40, border: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Số hàng</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={numberData}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={25}>25</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className={classes.productControllerRight}>
          <ButtonSearch />
        </div>
      </div>
      <div className={classes.ManagementUserTable}>
        <Table listUser={listUser.user} />
      </div>
      <div className={classes.ManagementUserTable}>
        <Panigation />
      </div>
      <div className={classes.ManagementUserTable}></div>
      <StatisticalList />
    </div>
  );
}

export default Management;
