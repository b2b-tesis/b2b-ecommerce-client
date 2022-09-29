import { CameraAlt } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Fragment } from "react";

export const UploadButton = ({ id, style = {} }) => {
  return (
    <Fragment>
      <label htmlFor={id}>
        <Button
          size="small"
          component="span"
          color="secondary"
          sx={{
            p: "6px",
            height: "auto",
            borderRadius: "50%",
            bgcolor: "primary.100",
            ...style,
            ":hover": {
              backgroundColor: "grey.300",
            },
          }}
        >
          <CameraAlt fontSize="small" color="primary" />
        </Button>
      </label>

      <input
        id={id}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => console.log(e.target.files)}
        style={{
          display: "none",
        }}
      />
    </Fragment>
  );
};