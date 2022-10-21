import styled from 'styled-components';

interface Props {
  data: number[][];
  titles: string[];
  maxValue: number;
  labelSuffix: string;
}

const El = styled.div`
  width: 100%;
  margin: 1.25rem auto;
`;

export const DumbellChartGenderForSafety = (props: Props) => {
  const {
    data, titles, maxValue, labelSuffix,
  } = props;
  const svgWidth = Math.min(window.innerWidth, 1280);
  const svgHeight = 70 * (titles.length - 1) + 50;
  return (
    <El>
      <svg width='100%' viewBox={`0 0 ${svgWidth} ${svgHeight + 10}`}>
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
                <g transform={`translate(${(svgWidth * data[i][0]) / maxValue},0)`}>
                  <rect
                    x={-5}
                    y={-5}
                    width={10}
                    height={10}
                    fill='#55606E'
                  />
                  <text
                    fill='#55606E'
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
                    fill='#55606E'
                    fontSize={10}
                    x={0}
                    y={0}
                    dy={15}
                    textAnchor='middle'
                    fontWeight='bold'
                  >
                    All
                  </text>
                </g>
                {
                  data[i][1] === -1 || data[i][2] === -1 ? null : (
                    <line
                      x1={(svgWidth * data[i][1]) / maxValue}
                      x2={(svgWidth * data[i][2]) / maxValue}
                      y1={0}
                      y2={0}
                      stroke='#55606E'
                      strokeWidth={1}
                      opacity={1}
                    />
                  )
                }
                {

                  data[i][1] === -1 ? null : (
                    <g transform={`translate(${(svgWidth * data[i][1]) / maxValue},0)`}>
                      <rect
                        x={-5}
                        y={-5}
                        width={10}
                        height={10}
                        fill='#00C4A9'
                      />
                      <text
                        fill='#00C4A9'
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
                        fill='#00C4A9'
                        fontSize={10}
                        x={0}
                        y={0}
                        dy={3}
                        dx={data[i][1] > data[i][0] ? -7 : 7}
                        textAnchor={data[i][1] > data[i][0] ? 'end' : 'start'}
                        fontWeight='bold'
                      >
                        Men
                      </text>
                    </g>
                  )
                }
                {
                  data[i][2] === -1 ? null
                    : (
                      <g transform={`translate(${(svgWidth * data[i][2]) / maxValue},0)`}>
                        <rect
                          x={-5}
                          y={-5}
                          width={10}
                          height={10}
                          fill='#8502F5'
                        />
                        <text
                          fill='#8502F5'
                          fontSize={10}
                          x={0}
                          y={0}
                          dy={-10}
                          textAnchor='middle'
                          fontWeight='bold'
                        >
                          {data[i][2]}
                          {labelSuffix}
                        </text>
                        <text
                          fill='#8502F5'
                          fontSize={10}
                          x={0}
                          y={0}
                          dy={3}
                          dx={data[i][1] > data[i][0] ? 7 : -7}
                          textAnchor={data[i][1] > data[i][0] ? 'start' : 'end'}
                          fontWeight='bold'
                        >
                          Women
                        </text>
                      </g>
                    )
                }
              </g>
            </g>
          ))
        }
      </svg>
    </El>
  );
};
