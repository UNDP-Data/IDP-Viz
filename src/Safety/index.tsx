import styled from 'styled-components';
import { DumbellChartGender } from '../Graphs/DumbellChartGender';

interface WidthProps {
  width?: string;
}

const DivEl = styled.div<WidthProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
  @media (max-width: 600px) {
    width: 100%;
  }
`;

interface ColorBoxProps {
  radius?: string;
  color?:string;
}

const ColorBox = styled.div<ColorBoxProps>`
  width: 0.625rem;
  height: 0.625rem;
  border-radius: ${(props) => (props.radius ? props.radius : '0')};
  background-color: ${(props) => (props.color ? props.color : 'var(--gray-600)')};
`;

export const SafetyEl = () => (
  <div>
    <div className='flex-wrap flex-div flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl>
        <p className='undp-typography'>
          <span className='bold'>While the majority of IDPs, now feel equally safe or safer than before, IDP women living in shelters remain largely unsafe</span>
          .  After displacement, no significant difference in the safety feeling of IDPs and hosts and across sexes. However, 3% of IDPs in the sample live in either collective or make-shift shelters. For these IDPs, the probability of feeling equally safe or safer now than before they left home is 18% less than for IDPs living either in their homes or with someone else. Women are especially vulnerable as they only have a 43% probability of feeling equally safe or safer if they live in a shelter. In comparison, the probability is 78% for women living in a home they own or rent.
        </p>
      </DivEl>
      <DivEl className='margin-bottom-05'>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probability for IDPs to feel equally safe or safer than before based on housing situation (higher is better)
        </h6>
        <p className='margin-bottom-07 bold undp-typography'>
          Women living in shelter feel much less safe than the other IDPs living in other types of accomodation
        </p>
        <div className='flex-div' style={{ fontSize: '0.875rem' }}>
          <div className='flex-div flex-vert-align-center flex-gap-02'>
            <ColorBox color='var(--men-highlight)' />
            <div>
              Men
            </div>
          </div>
          <div className='flex-div flex-vert-align-center flex-gap-02'>
            <ColorBox color='var(--women-highlight)' />
            <div>
              Women
            </div>
          </div>
        </div>
        <DumbellChartGender
          maxValue={1}
          data={[[0.82, 0.78], [0.8, 0.81], [0.69, 0.43]]}
          titles={['Own or Rent Homes', 'Live in a House Free of Charge', 'Live in a Shelter']}
          labelSuffix=''
        />
      </DivEl>
    </div>
  </div>
);
