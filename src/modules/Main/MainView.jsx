import { Box } from "@mui/material";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import { useAuthenticateUser } from "./hooks/useAuthenticateUser";

const MainView = () => {

  const {} = useAuthenticateUser();
  return (
    <Box bgcolor="white">
      <Section1/>
      <Section2/>
    </Box>
  );
};


export default MainView;
