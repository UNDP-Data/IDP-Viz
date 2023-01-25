import styled from 'styled-components';
import { DumbellChart } from '../Graphs/DumbellChart';
import { LineChart } from '../Graphs/LineChart';

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
    <div className='flex-wrap flex-div flex-space-between margin-bottom-07' style={{ alignItems: 'stretch' }}>
      <DivEl width='calc(50% - 0.5rem)'>
        <p className='undp-typography'>
          Interestingly, IDPs are even more likely than hosts to have enough financial resources for their needs. Among IDPs, displacement duration is significant and positive suggesting that every six additional months in the host community increases the probability of having enough financial resources by 19% once again suggesting that IDPs are integrated well and quickly in these communities.
        </p>
      </DivEl>
      <DivEl width='calc(50% - 2.5rem)' className='margin-bottom-05' style={{ backgroundColor: 'var(--gray-100)', padding: 'var(--spacing-05)' }}>
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
          data={[[0.53, 0.78]]}
          titles={['All']}
          labelSuffix=''
          marks={['Host', 'IDP']}
        />
      </DivEl>
    </div>
    <div>
      <div>
        <h6 className='undp-typography' style={{ color: 'var(--blue-500)' }}>
          Changes in probablity of IDP household having atleast one member employed and have enough financial resources with time
        </h6>
        <p className='italics margin-bottom-07 margin-top-07 undp-typography'>
          The probablity of employment and financial situation of IDP households doesnt seem to improve with time
        </p>
        <div className='flex-div'>
          <div className='flex-div' style={{ fontSize: '0.875rem' }}>
            <div className='flex-div flex-vert-align-center gap-02'>
              <ColorBox color='var(--blue-600)' />
              <div>
                Probability of the IDP household having enough financial resources
              </div>
            </div>
            <div className='flex-div flex-vert-align-center gap-02'>
              <ColorBox color='var(--dark-green)' />
              <div>
                Probability of the IDP household having at least one member employed
              </div>
            </div>
          </div>
        </div>
        <LineChart
          xRange={[0, 4]}
          maxY={1.05}
          data={[
            [0.22, 0.54, 0.83, 0.96, 0.99],
            [0.9, 0.89, 0.87, 0.85, 0.83],
          ]}
          yTicks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
          xTicks={[2, 2.5, 3, 3.5, 4]}
        />
      </div>
    </div>
  </div>
);
