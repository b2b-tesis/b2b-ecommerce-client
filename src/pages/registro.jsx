import RegisterView from "../modules/Register/RegisterView" 
import FlexRowCenter from "../common/components/flexbox/FlexRowCenter"
import SEO from "../common/components/seo/Seo"

const RegisterPage = () => {
  return (
    <FlexRowCenter>
      <SEO title="Registro" />
      <RegisterView />
    </FlexRowCenter>
  )
}

export default RegisterPage
