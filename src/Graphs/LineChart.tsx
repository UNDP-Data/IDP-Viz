import styled from 'styled-components';
import { line, curveMonotoneX } from 'd3-shape';

interface Props {
  xRange: [number, number];
  maxY: number;
  yTicks: number[];
  data: number[][];
}

const El = styled.div`
  width: 100%;
  margin: 0 auto 1.25rem auto;
`;

export const LineChart = (props: Props) => {
  const {
    xRange,
    maxY,
    data,
    yTicks,
  } = props;
  const svgWidthhMargin = Math.min(window.innerWidth, 1280);
  const svgWidth = svgWidthhMargin - 30;
  const svgHeight = 400;
  const lineShape1 = line()
    .x((_d: any, i) => (i * svgWidth) / (xRange[1] - xRange[0]))
    .y((d: any) => svgHeight - ((d * svgHeight) / maxY))
    .curve(curveMonotoneX);
  return (
    <El>
      <svg width='100%' viewBox={`0 0 ${svgWidthhMargin} ${svgHeight + 20}`}>
        {
          yTicks.map((d, i) => (
            <g
              key={i}
            >
              <line
                x1={0}
                x2={svgWidthhMargin}
                y1={svgHeight - ((d * svgHeight) / maxY)}
                y2={svgHeight - ((d * svgHeight) / maxY)}
                stroke='#D4D6D8'
                strokeWidth={1}
                strokeDasharray='4 2'
                opacity={1}
              />
              <text
                x={0}
                y={svgHeight - ((d * svgHeight) / maxY)}
                fill='#D4D6D8'
                opacity={1}
                fontSize={12}
                dy={-6}
              >
                {d}
              </text>
            </g>
          ))
        }
        <line
          x1={0}
          x2={svgWidthhMargin}
          y1={400}
          y2={400}
          stroke='#000'
          strokeWidth={1}
          opacity={1}
        />
        <text
          x={svgWidth / 2}
          y={400}
          fill='#000'
          opacity={1}
          fontSize={12}
          dy={15}
          textAnchor='middle'
        >
          Years since arrival in host community
        </text>
        <g transform='translate(15, 0)'>
          <path d={lineShape1(data[0] as any) as string} fill='none' stroke='#3288CE' strokeWidth={2} />
          {
            data[0].map((d: number, i: number) => (
              <g
                key={i}
              >
                <circle
                  cx={(i * svgWidth) / (xRange[1] - xRange[0])}
                  cy={svgHeight - ((d * svgHeight) / maxY)}
                  r={4}
                  fill='#3288CE'
                />
                <text
                  x={(i * svgWidth) / (xRange[1] - xRange[0])}
                  y={svgHeight - ((d * svgHeight) / maxY)}
                  dy={-8}
                  fontSize={12}
                  textAnchor='middle'
                  fill='#3288CE'
                >
                  {d}
                </text>
              </g>
            ))
          }
          <path d={lineShape1(data[1] as any) as string} fill='none' stroke='#59BA47' strokeWidth={2} />
          {
            data[1].map((d: number, i: number) => (
              <g
                key={i}
              >
                <circle
                  cx={(i * svgWidth) / (xRange[1] - xRange[0])}
                  cy={svgHeight - ((d * svgHeight) / maxY)}
                  r={4}
                  fill='#59BA47'
                />
                <text
                  x={(i * svgWidth) / (xRange[1] - xRange[0])}
                  y={svgHeight - ((d * svgHeight) / maxY)}
                  dy={-8}
                  fontSize={12}
                  textAnchor='middle'
                  fill='#59BA47'
                >
                  {d}
                </text>
              </g>
            ))
          }
        </g>
      </svg>
    </El>
  );
};
