import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SyntheticEvent, useState } from "react";
import MuiAlerts from "./MuiAlerts";
import MuiButtons from "./MuiButtons";
import MuiIcons from "./MuiIcons";
import MuiTabs from "./MuiTabs";
import MuiTypography from "./MuiTypography";
import MuiTextInputs from "./MuiTextInputs";
import MuiProgress from "./MuiProgress";
import MuiDialog from "./MuiDialog";
import MuiImageList from "./MuiImageList";
import MuiDivider from "./MuiDivider";
import MuiSnackBar from "./MuiSnackBar";
import MuiSelect from "./MuiSelect";
import TabValue from "@/types/TabValue";

export default function All() {
  const [tabValue, setTabValue] = useState<TabValue>(TabValue.Tabs);

  const handleChange = (event: SyntheticEvent, newTabValue: TabValue) => {
    setTabValue(newTabValue);
  };

  /* i was not able to create MUI element with map !!! looks like MUI bug*/

  return (
    <div>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value={TabValue.Alerts} label="Alerts" />
        <Tab value={TabValue.Buttons} label="Buttons" />
        <Tab value={TabValue.Dialog} label="Dialogs" />
        <Tab value={TabValue.Divider} label="Divider" />
        <Tab value={TabValue.Icons} label="Icons" />
        <Tab value={TabValue.ImageList} label="ImageList" />
        <Tab value={TabValue.Progress} label="Progress" />
        <Tab value={TabValue.Select} label="Select" />
        <Tab value={TabValue.SnackBar} label="SnackBar" />
        <Tab value={TabValue.Tabs} label="Tabs" />
        <Tab value={TabValue.TextInputs} label="Text Inputs" />
        <Tab value={TabValue.Typography} label="Typography" />
      </Tabs>
      {tabValue == TabValue.Alerts ? <MuiAlerts /> : ""}
      {tabValue == TabValue.Buttons ? <MuiButtons /> : ""}
      {tabValue == TabValue.Dialog ? <MuiDialog /> : ""}
      {tabValue == TabValue.Divider ? <MuiDivider /> : ""}
      {tabValue == TabValue.Icons ? <MuiIcons /> : ""}
      {tabValue == TabValue.ImageList ? <MuiImageList /> : ""}
      {tabValue == TabValue.Progress ? <MuiProgress /> : ""}
      {tabValue == TabValue.Select ? <MuiSelect /> : ""}
      {tabValue == TabValue.SnackBar? <MuiSnackBar/> : ""}
      {tabValue == TabValue.Tabs ? <MuiTabs /> : ""}
      {tabValue == TabValue.TextInputs ? <MuiTextInputs /> : ""}
      {tabValue == TabValue.Typography ? <MuiTypography /> : ""}
    </div>
  );
}
