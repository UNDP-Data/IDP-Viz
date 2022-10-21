import styled from 'styled-components';
import { DumbellChart } from '../Graphs/DumbellChart';
import '../style/checkboxStyle.css';
import '../style/statCardStyle.css';

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

export const FinancialResourceEl = () => (
  <div>
    <div className='flex-wrap flex-div max-width flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl width='calc(50% - 1rem)'>
        <p className='undp-typography'>
          While IDPs are less likely to be employed, at equal employment status and equal characteristics, they are as likely as hosts of having enough financial resources to meet their household’s needs. Moreover,
          {' '}
          <span className='bold'>having at least one member in the household who is employed increases the probability of IDPs to have enough financial resources by 23%</span>
          . These results show how beneficial it can be to improve IDP’s integration on the labour market in hosts communities
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
              No one employed
            </div>
          </div>
          <div className='flex-div flex-vert-align-center flex-gap-02'>
            <ColorBox radius='20px' />
            <div>
              At least one member employed
            </div>
          </div>
        </div>
        <DumbellChart
          maxValue={1}
          data={[[0.72, 0.49], [0.79, 0.47]]}
          titles={['IDPs', 'Hosts']}
          labelSuffix=''
          marks={['1 member employed', 'No on employed']}
        />
      </DivEl>
    </div>
  </div>
);
