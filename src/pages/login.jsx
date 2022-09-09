
import { Box } from "@mui/material"
import FlexRowCenter from "../common/components/flexbox/FlexRowCenter"
import SEO from "../common/components/seo/Seo"
import LoginView from "../modules/Login/LoginView"

const LoginPage = () => {
  return (
    <FlexRowCenter>
      <SEO title="Login" />
     <Box sx={{display: 'flex',height:"100vh", alignItems: 'center'}}>
      <LoginView/>
     </Box>
    </FlexRowCenter>
  )
}

export default LoginPage
