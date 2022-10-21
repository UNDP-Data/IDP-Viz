import styled from 'styled-components';
import { DumbellChart } from '../Graphs/DumbellChart';
import '../style/checkboxStyle.css';
import '../style/statCardStyle.css';

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
    <div className='flex-wrap flex-div max-width margin-bottom-07 flex-space-between' style={{ alignItems: 'stretch' }}>
      <CardEl className='stat-card' width='calc(50% - 1rem)'>
        <h2>1%</h2>
        <p>IDPs became unemployed following displacement</p>
      </CardEl>
      <CardEl className='stat-card' width='calc(50% - 1rem)'>
        <h2>63%</h2>
        <p>IDPs report not having enough financial resources to meet their households’ needs</p>
      </CardEl>
    </div>
    <div className='flex-wrap flex-div max-width flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl width='calc(50% - 1rem)'>
        <p className='undp-typography'>
          <span className='bold'>Displacement appears to have disrupted only marginally the professional lives of IDPs</span>
          . Indeed, only 1% of IDPs became unemployed following displacement and 92% of IDPs still earn money through the same way they did before.  Still, the share of IDPs who assess that their financial resources are enough to meet their needs dropped from 84% to 37%.  However, IDPs are still 26 percentage points more likely than hosts to report having enough financial resources which could indicate IDPs are moving in very poor regions.
        </p>
      </DivEl>
      <DivEl width='calc(50% - 1rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Probablity of having financial resource to meet the household needs (higher is better)
        </h6>
        <p className='margin-bottom-07 bold undp-typography'>
          Having at least one person employed in the household has no significant effect on the probablity that the IDPs have enough financial resources
        </p>
        <div className='flex-div' style={{ fontSize: '0.875rem' }}>
          <div className='flex-div flex-vert-align-center flex-gap-02'>
            <ColorBox />
            <div>
              IDP
            </div>
          </div>
          <div className='flex-div flex-vert-align-center flex-gap-02'>
            <ColorBox radius='20px' />
            <div>
              Host
            </div>
          </div>
        </div>
        <DumbellChart
          maxValue={1}
          data={[[0.15, 0.42], [0.16, 0.35], [0.14, 0.47]]}
          titles={['All', 'Men', 'Women']}
          labelSuffix=''
          marks={['Host', 'IDP']}
        />
      </DivEl>
    </div>
  </div>
);
