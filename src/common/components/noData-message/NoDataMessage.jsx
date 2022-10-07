import React from 'react'
import FlexBox from '../flexbox/FlexBox';
import { H2 } from '../Typography';

 const NoDataMessage = ({message}) => {
  return (
    <FlexBox justifyContent="center">
        <H2 mt={3}>{message}</H2>
    </FlexBox>
  )
}

export default NoDataMessage;