import { styled, theme } from '../styles/stitches.config.js';

const CardContainer = styled('div', {
  background: "$blue9",
  // padding: "$size-$2", Not working...
  // margin: "$space-$2", 
});

export default function Card() {
  return (
    <CardContainer>Card here</CardContainer>
  )
}
