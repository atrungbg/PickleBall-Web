import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { tournaments } from "../data/tournaments";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupIcon from "@mui/icons-material/Group";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CustomButton from "./CustomButton";

const TournamentCard = ({}) => {
  return (
    <Card sx={{ width: "450px", borderRadius: "10px" }}>
      <CardMedia
        src={tournaments[0].imgUrl}
        component={"img"}
        sx={{ width: "100%", height: "250px" }}
      />
      <div className="card-content" style={{ padding: "20px" }}>
        <Typography
          variant="body1"
          color="initial"
          fontWeight={600}
          fontSize={17}
        >
          Spring Break Showdown
        </Typography>
        <div
          className="info"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <div
            className="left"
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div
              className="startendate"
              style={{ display: "flex", gap: "8px", alignItems: "center" }}
            >
              <CalendarMonthIcon fontSize="small" />
              <Typography variant="body1" color="initial" fontSize={14}>
                December 5-7, 2024
              </Typography>
            </div>
            <div
              className="participant"
              style={{ display: "flex", gap: "8px", alignItems: "center" }}
            >
              <GroupIcon fontSize="small" />
              <Typography variant="body1" color="initial" fontSize={14}>
                32 Players
              </Typography>
            </div>
          </div>
          <div
            className="right"
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div
              className="location"
              style={{ display: "flex", gap: "8px", alignItems: "center" }}
            >
              <LocationOnIcon fontSize="small" />
              <Typography variant="body1" color="initial" fontSize={14}>
                Da Nang Sports Complex
              </Typography>
            </div>
            <div
              className="prize"
              style={{ display: "flex", gap: "8px", alignItems: "center" }}
            >
              <EmojiEventsIcon fontSize="small" />
              <Typography variant="body1" color="initial" fontSize={14}>
                ${tournaments[0].prizePool.toLocaleString()}
              </Typography>
            </div>
          </div>
        </div>
        <div
          className="button-group"
          style={{ marginTop: "25px", display: "flex", gap: "15px" }}
        >
          <CustomButton title={"Join Tournament"} width={"60%"} />
          <CustomButton title={"Read more"} width={"40%"} outlined={true} />
        </div>
      </div>
    </Card>
  );
};

export default TournamentCard;
