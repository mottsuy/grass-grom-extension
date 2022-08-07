import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ActivityProps } from '../../types/Activity'

type Props = {
  avg: number;
  mx: number;
  type: ActivityProps;
}

const Overview:FC<Props> = (props) => {
  return(
    <>
      <p>
        {`Average: ${props.avg}${props.type === "walking" ? "step" : "m"}`}
      </p>
      <p>
      {`Max: ${props.mx}${props.type === "walking" ? "step" : "m"}`}
      </p>
    </>
  )
}

export default Overview;