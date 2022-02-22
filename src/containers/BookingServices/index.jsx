import React from "react";
import "date-fns";
import { InputNomal } from "../../components/Form/InputForm";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DateTimePicker } from "@mui/lab";
import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { Button } from "../../components/Button/Button";
import { useTheme } from "@mui/material/styles";
import TriangleLeftTwoLayout from "../../components/Layout/TriangleLeftTwoLayout";
import TriangleRightTwoLayout from "../../components/Layout/TriangleRightTwoLayout";
import useStyleBooking from "./style";
import { NomalImage } from "../../components/Card/styled";
import {
  ContentContainer,
  LeftTwoImageAbove,
  LeftTwoImageUnder,
  RightTwoImageAbove,
  RightTwoImageUnder,
  TwoContainer,
  TwoRightImageContainer,
} from "../../components/Layout/styled";
import { Content, ParagraphTitle } from "../../components/Paragraph/styled";
import { ObjectFitImage } from "../../components/Image";
import { BannerFull } from "../../components/Banner/BannerFull";
import CarouselBanner from "../../components/Carousel/CarouselBanner";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Tổ chức sự kiện",
  "Thuê sân Drag",
  "Thuê sân hai cua",
  "Sữa chữa",
  "Bảo trì",
  "Đo máy",
  "Độ xe",
  "Khác",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function BookingService(props) {
  const [value, setValue] = React.useState(new Date("Chưa chọn"));

  const classes = useStyleBooking();

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const imageArr = [
    "https://scontent-xsp1-1.xx.fbcdn.net/v/t39.30808-6/256238814_3007685489549420_3335449275991816834_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=Rw7e_Wqy1-8AX85ej4x&tn=wklt6ngH-AKBrxqB&_nc_ht=scontent-xsp1-1.xx&oh=00_AT_Q24ojFRdHHtnWzQOiWOocLI14WUVW1iHWHLpSI6WQhA&oe=61C898EB",
    "https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/266568436_3032288937089075_5492120907301899064_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=UPSBRwx9tDUAX8xw61i&tn=wklt6ngH-AKBrxqB&_nc_ht=scontent-hkt1-2.xx&oh=00_AT98K6xq0IhPOsXiTdx9lvhVSvgAmABIWr3QfsuTRgLzKg&oe=61C96CF1",
    "https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-6/264422161_3027962510855051_337841308611556474_n.jpg?_nc_cat=101&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=PrbHs5BFjYoAX92_4D8&_nc_ht=scontent-xsp1-2.xx&oh=00_AT8dZY0QvLRTLu9dSZtk0Zh9K6XVIlaIY9_4WHgo8tElcg&oe=61C94BC8",
    "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/263668156_3026653377652631_4997214511848914424_n.jpg?_nc_cat=107&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=w4InpuRDousAX8oZvZI&_nc_ht=scontent.fsgn5-10.fna&oh=00_AT_SXUXGq7rk8ZZH2AIGRPqahbHDRnQb6SfaQG5jkAMhnw&oe=61CA2532",
    "https://scontent-xsp1-3.xx.fbcdn.net/v/t39.30808-6/264925746_3025791801072122_7939151101772619355_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=S_HQ3m3nPioAX8UAtgJ&tn=wklt6ngH-AKBrxqB&_nc_ht=scontent-xsp1-3.xx&oh=00_AT_-AMyWgW-_wTYeiAX8VzZ5liWPQNqgCUfu8y9-o158ug&oe=61C8FA2A",
    "https://scontent-xsp1-1.xx.fbcdn.net/v/t39.30808-6/256238814_3007685489549420_3335449275991816834_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=Rw7e_Wqy1-8AX85ej4x&tn=wklt6ngH-AKBrxqB&_nc_ht=scontent-xsp1-1.xx&oh=00_AT_Q24ojFRdHHtnWzQOiWOocLI14WUVW1iHWHLpSI6WQhA&oe=61C898EB",
    "https://scontent-xsp1-3.xx.fbcdn.net/v/t39.30808-6/248059754_2994002290917740_3575161769262382387_n.jpg?_nc_cat=109&_nc_rgb565=1&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ago87PVKVNEAX8xdWZY&_nc_ht=scontent-xsp1-3.xx&oh=00_AT8hfqKqkRg2rB4_tSVH6R76TorFhbaxJ9B2w7K-NZi2jA&oe=61C957E5",
  ];
  return (
    <div className={classes.BookingContainer}>
      <BannerFull
        image={
          "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/255658661_3006843192966983_1287220676086071562_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=jrpo7Rr6o-YAX_Z2cM6&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT-NaPKStbX2TvXID6DGxXrytHdE5jppsIuLObo2PHb1aA&oe=61C9B0EB"
        }
        title={"TỔ CHỨC SỰ KIỆN"}
      />
      <section className={classes.BookingFunction}>
        {/* <div className={classes.BookingForm}>
          <h3>Đặt lịch</h3>
          <div className={classes.BookingFormChild}>
            <InputNomal
              type="text"
              placeholder="Họ và tên"
              name="username"
              id="username"
            />
          </div>
          <div className={classes.BookingFormChild}>
            <InputNomal
              type="text"
              placeholder="Số điện thoại"
              name="username"
              id="username"
            />
          </div>
          <div className={classes.BookingFormChild}>
            <FormControl fullWidth>
              <Select
                multiple
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>Dịch vụ</em>;
                  }

                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>Dịch vụ</em>
                </MenuItem>
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className={classes.BookingFormChild}>
            <FormControl fullWidth>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="Chọn ngày giờ hẹn"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                />
              </LocalizationProvider>
            </FormControl>
          </div>
          <div className={classes.BookingFormChild}>
            <Button backgroundColor={"red"}>Đặt lịch</Button>
          </div>
        </div>
        <div className={classes.ContactBooking}>
          <div className={classes.Avatar}>
            <NomalImage src="https://media.gqitalia.it/photos/5ec3ca47a63ee8cb452d9ce4/master/pass/Avatar.jpg" />
          </div>
          <div className={classes.Phone}>
            <p>Quản lý : Mr Thịnh</p>
            <p>0397948791</p>
          </div>
          <div className={classes.Email}>
            <p>laihopsam@gmail.com</p>
          </div>
          <div className={classes.Facebook}>
            <Button backgroundColor={"#4267B2"}>Liên hệ Facebook</Button>
          </div>
        </div> */}
      </section>
      <section>
        <TwoContainer>
          <ContentContainer>
            <ParagraphTitle>KING DRAG</ParagraphTitle>
            <Content>
              From the historic entrance to the future: touring the production
              lines is a unique journey to witness the birth of the Lamborghini
              sports cars. From the V12 line where the Aventador’s engine and
              frame come together for the first time and on to the V10 line
              where the Huracán is born. The guided tours that start from
              Mudetec make the tour an unforgettable experience in search of the
              company’s most amazing places.
            </Content>
            <div className={classes.Facebook}>
              <Button backgroundColor={"#F32013"}>Đặt lịch ngay</Button>
            </div>
          </ContentContainer>
          <TwoRightImageContainer>
            <RightTwoImageUnder>
              <ObjectFitImage
                objectFit={"cover"}
                src="https://scontent-xsp1-3.xx.fbcdn.net/v/t39.30808-6/263156987_3025890087728960_7556910021963935448_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=K1z6K7COYPEAX_GhqL_&_nc_ht=scontent-xsp1-3.xx&oh=00_AT9h1S7NnABIClKak8dPz4hIjGWP2LuSln2X6fgsHW-oog&oe=61C9C410"
              />
            </RightTwoImageUnder>
          </TwoRightImageContainer>
        </TwoContainer>
      </section>
      <section>
        <TwoContainer>
          <TwoRightImageContainer>
            <LeftTwoImageAbove>
              <ObjectFitImage
                objectFit={"cover"}
                src="https://scontent-xsp1-3.xx.fbcdn.net/v/t39.30808-6/259605371_3015908402060462_5714617736675054416_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=ea6cyggPEtwAX9J1RdG&_nc_ht=scontent-xsp1-3.xx&oh=00_AT-6hi-MDUTdtvFBS4Rqfi4H-dYAVkYn7Eh2LPu5rDxwOQ&oe=61C9F747"
              />
            </LeftTwoImageAbove>
          </TwoRightImageContainer>
          <ContentContainer>
            <ParagraphTitle>TRACK</ParagraphTitle>
            <Content>
              From the historic entrance to the future: touring the production
              lines is a unique journey to witness the birth of the Lamborghini
              sports cars. From the V12 line where the Aventador’s engine and
              frame come together for the first time and on to the V10 line
              where the Huracán is born. The guided tours that start from
              Mudetec make the tour an unforgettable experience in search of the
              company’s most amazing places.
            </Content>

            <div className={classes.Facebook}>
              <Button backgroundColor={"#F32013"}>Đặt lịch ngay</Button>
            </div>
          </ContentContainer>
        </TwoContainer>
      </section>
      <section>
        <TwoContainer>
          <ContentContainer>
            <ParagraphTitle>GO KART</ParagraphTitle>
            <Content>
              From the historic entrance to the future: touring the production
              lines is a unique journey to witness the birth of the Lamborghini
              sports cars. From the V12 line where the Aventador’s engine and
              frame come together for the first time and on to the V10 line
              where the Huracán is born. The guided tours that start from
              Mudetec make the tour an unforgettable experience in search of the
              company’s most amazing places.
            </Content>
            <div className={classes.Facebook}>
              <Button backgroundColor={"#F32013"}>Đặt lịch ngay</Button>
            </div>
          </ContentContainer>
          <TwoRightImageContainer>
            <RightTwoImageUnder>
              <ObjectFitImage
                objectFit={"cover"}
                src="https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-6/263642257_3025791707738798_6302804530897789305_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=M1vP52eTL28AX_oapwx&_nc_ht=scontent-xsp1-2.xx&oh=00_AT-b6uG43LfSP8raP71nHYMJ1aCqNLAnKQ0AMe6mQo9O-Q&oe=61C8F80E"
              />
            </RightTwoImageUnder>
          </TwoRightImageContainer>
        </TwoContainer>
      </section>
      <section>
        <TwoContainer>
          <TwoRightImageContainer>
            <LeftTwoImageAbove>
              <ObjectFitImage
                objectFit={"cover"}
                src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/256164071_3007685406216095_1302440614957699609_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=bKYlkgmEqZAAX9Xdlgm&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT_svBYJcgMeJcTdn0KzO3hLxw2WPzsa68feQzL9XlHWDw&oe=61C99C71"
              />
            </LeftTwoImageAbove>
          </TwoRightImageContainer>
          <ContentContainer>
            <ParagraphTitle>MEETING</ParagraphTitle>
            <Content>
              From the historic entrance to the future: touring the production
              lines is a unique journey to witness the birth of the Lamborghini
              sports cars. From the V12 line where the Aventador’s engine and
              frame come together for the first time and on to the V10 line
              where the Huracán is born. The guided tours that start from
              Mudetec make the tour an unforgettable experience in search of the
              company’s most amazing places.
            </Content>

            <div className={classes.Facebook}>
              <Button backgroundColor={"#F32013"}>Đặt lịch ngay</Button>
            </div>
          </ContentContainer>
        </TwoContainer>
      </section>
      <CarouselBanner Slider={imageArr} />
    </div>
  );
}
export default BookingService;
