import React from "react";
import Ac from "../../assets/air-conditioner.png";
import Bathrobe from "../../assets/bathrobe.png";
import Television from "../../assets/television.png";
import Wifi from "../../assets/wifi.png";
import RoomService from "../../assets/room-service.png";
import CoffeeMaker from "../../assets/coffee-maker.png";
import Safe from "../../assets/safe.png";
import Phone from "../../assets/phone.png";
import BabyCot from "../../assets/baby-crib.png";
import Shuttle from "../../assets/shuttle.png";

import CommonImages from "./CommonImages";

const ImageIconsCollections = ({ data }) => {
  return (
    <div className="row">
      {data.length
        ? data.map((item) => {
            let data = "";
            if (item === "ac") {
              data = Ac;
            } else if (item === "bathrobe") {
              data = Bathrobe;
            } else if (item === "tv") {
              data = Television;
            } else if (item === "wifi") {
              data = Wifi;
            } else if (item === "24h_room_service") {
              data = RoomService;
            } else if (item === "coofee_maker") {
              data = CoffeeMaker;
            } else if (item === "safe") {
              data = Safe;
            } else if (item === "telephone") {
              data = Phone;
            } else if (item === "baby_cot") {
              data = BabyCot;
            } else if (item === "free_shuttle") {
              data = Shuttle;
            }
            console.log("data", data);
            return <CommonImages src={data} tooltip="Air Conditioning" />;
          })
        : null}

      {/* <CommonImages src={Bathrobe} tooltip="Bathrobe" />
      <CommonImages src={Television} tooltip="Television" />
      <CommonImages src={Wifi} tooltip="Wifi" />
      <CommonImages src={RoomService} tooltip="RoomService" />
      <CommonImages src={CoffeeMaker} tooltip="Coffee / Tea Maker" />
      <CommonImages src={Safe} tooltip="Free Safe" />
      <CommonImages src={Phone} tooltip="Phone service" />
      <CommonImages src={BabyCot} tooltip="Free Baby Cot" />
      <CommonImages
        src={Shuttle}
        tooltip="Free Shuttles for beaches and shopping malls"
      /> */}
    </div>
  );
};

export default ImageIconsCollections;
