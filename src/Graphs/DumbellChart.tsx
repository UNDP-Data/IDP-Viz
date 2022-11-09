import styled from 'styled-components';

interface Props {
  data: number[][];
  titles: string[];
  maxValue: number;
  labelSuffix: string;
  marks: [string, string];
  minWidth?: number
}

const El = styled.div`
  width: 100%;
  margin: 1.25rem auto;
`;

export const DumbellChart = (props: Props) => {
  const {
    data, titles, maxValue, labelSuffix, marks, minWidth,
  } = props;
  const svgWidth = Math.min(window.innerWidth, minWidth || 620);
  const svgHeight = 70 * (titles.length - 1) + 50;
  return (
    <El>
      <svg width='100%' viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        {
          titles.map((d, i) => (
            <g transform={`translate(0,${i * 70})`} key={i}>
              <text
                fill='#000'
                fontSize={14}
                x={0}
                y={0}
                dy={10}
                fontWeight='bold'
              >
                {d}
              </text>
              <line
                x1={0}
                x2={svgWidth}
                y1={40}
                y2={40}
                stroke='#D4D6D8'
                strokeWidth={1}
                strokeDasharray='4 2'
                opacity={1}
              />
              <g transform='translate(0,40)'>
                <line
                  x1={(svgWidth * data[i][0]) / maxValue}
                  x2={(svgWidth * data[i][1]) / maxValue}
                  y1={0}
                  y2={0}
                  stroke='#3288CE'
                  strokeWidth={1}
                  opacity={1}
                />
                <g transform={`translate(${(svgWidth * data[i][0]) / maxValue},0)`}>
                  <circle
                    cx={0}
                    cy={0}
                    r={5}
                    fill='#3288CE'
                  />
                  <text
                    fill='#3288CE'
                    fontSize={10}
                    x={0}
                    y={0}
                    dy={-10}
                    textAnchor='middle'
                    fontWeight='bold'
                  >
                    {data[i][0]}
                    {labelSuffix}
                  </text>
                  <text
                    fill='#232E3D'
                    fontSize={10}
                    x={0}
                    y={0}
                    dy={4}
                    dx={data[i][1] > data[i][0] ? -7 : 7}
                    textAnchor={data[i][1] > data[i][0] ? 'end' : 'start'}
                    fontWeight='bold'
                  >
                    {marks[0] !== 'One member employed' ? marks[0] : (
                      <>
                        <tspan x={0} dy={-2} dx={data[i][1] > data[i][0] ? -7 : 7}>One member</tspan>
                        <tspan x={0} dy={10} dx={data[i][1] > data[i][0] ? -7 : 7}>employed</tspan>
                      </>
                    )}
                  </text>
                </g>
                <g transform={`translate(${(svgWidth * data[i][1]) / maxValue},0)`}>
                  <rect
                    x={-5}
                    y={-5}
                    width={10}
                    height={10}
                    fill='#3288CE'
                  />
                  <text
                    fill='#3288CE'
                    fontSize={10}
                    x={0}
                    y={0}
                    dy={-10}
                    textAnchor='middle'
                    fontWeight='bold'
                  >
                    {data[i][1]}
                    {labelSuffix}
                  </text>
                  <text
                    fill='#232E3D'
                    fontSize={10}
                    x={0}
                    y={0}
                    dy={4}
                    dx={data[i][1] > data[i][0] ? 7 : -7}
                    textAnchor={data[i][1] > data[i][0] ? 'start' : 'end'}
                    fontWeight='bold'
                  >
                    {marks[1] !== 'No one employed' ? marks[1] : (
                      <>
                        <tspan x={0} dy={-2} dx={data[i][1] < data[i][0] ? -7 : 7}>No one</tspan>
                        <tspan x={0} dy={10} dx={data[i][1] < data[i][0] ? -7 : 7}>employed</tspan>
                      </>
                    )}
                  </text>
                </g>
              </g>
            </g>
          ))
        }
      </svg>
    </El>
  );
};
