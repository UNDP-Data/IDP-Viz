import styled from 'styled-components';
import { DumbellChart } from '../Graphs/DumbellChart';

interface WidthProps {
  width?: string;
}

const CardEl = styled.div<WidthProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
`;

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

export const FinancialResourceEl = () => (
  <div>
    <div className='flex-wrap flex-div margin-bottom-07 flex-space-between' style={{ alignItems: 'stretch' }}>
      <CardEl className='stat-card' width='100%'>
        <h2>32%</h2>
        <p>Less likely IDPs have enough sufficient financial resources to fulfil their household’s needs when compared to host at equal employment status and equal characteristics</p>
      </CardEl>
    </div>
    <div className='flex-wrap flex-div flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl width='calc(50% - 2rem)'>
        <p className='undp-typography'>
          In addition to being less likely to be employed,
          {' '}
          <span className='bold'>IDPs are also 32% less likely to have enough sufficient financial resources to fulfil their household’s needs</span>
          , at equal employment status and equal characteristics. Indeed, employment in the household has no significant effect on the resources of IDPs.  The difference between IDPs and hosts is especially striking when comparing women IDPs and women hosts with a 41-percentage points difference. Moreover, employment does not have a significant effect on the financial resources of IDPs.
        </p>
      </DivEl>
      <DivEl width='calc(50% - 2rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probablity of having financial resource to meet the household needs (higher is better)
        </h6>
        <div className='flex-div' style={{ fontSize: '0.875rem' }}>
          <div className='flex-div flex-vert-align-center gap-02'>
            <ColorBox />
            <div>
              IDP
            </div>
          </div>
          <div className='flex-div flex-vert-align-center gap-02'>
            <ColorBox radius='20px' />
            <div>
              Host
            </div>
          </div>
        </div>
        <DumbellChart
          maxValue={1}
          data={[[0.67, 0.35], [0.61, 0.4], [0.72, 0.31]]}
          titles={['All', 'Men', 'Women']}
          labelSuffix=''
          marks={['Host', 'IDP']}
        />
      </DivEl>
    </div>
  </div>
);
