import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@material-ui/core";
import { ContainerSelect } from "./style";
function Dropdown(props) {
  return (
    <ContainerSelect>
      <Box sx={{ width: 240 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Thương hiệu</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.age}
            label="Loại xe"
            onChange={props.handleChange}
          >
            <MenuItem value={"Lamboghini"}>Lamboghini</MenuItem>
            <MenuItem value={"McLaren"}>McLaren</MenuItem>
            <MenuItem value={"Porche"}>Porche</MenuItem>
            <MenuItem value={"Ferrari"}>Ferrari</MenuItem>
            <MenuItem value={"BMW"}>BMW</MenuItem>
            <MenuItem value={"Mercedes"}>Mercedes</MenuItem>
            <MenuItem value={"Audi"}>Audi</MenuItem>
            <MenuItem value={"Bentley"}>Bentley</MenuItem>
            <MenuItem value={"RangeRover"}>Range Rover</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </ContainerSelect>
  );
}
export default Dropdown;
