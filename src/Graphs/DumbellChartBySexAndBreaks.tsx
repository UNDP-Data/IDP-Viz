import styled from 'styled-components';

interface Props {
  selected: 1 | 2;
}

const El = styled.div`
  width: 100%;
  margin: 1.25rem auto;
`;

export const DumbellChartBySexAndBreaks = (props: Props) => {
  const { selected } = props;
  const svgWidth = Math.min(window.innerWidth, 1280);
  const svgHeight = 190;
  const data = {
    host: {
      break: {
        boys: 0.94,
        girls: 0.9,
      },
      noBreak: {
        boys: 0.97,
        girls: 0.93,
      },
    },
    idp: {
      break: {
        boys: 0.92,
        girls: 0.84,
      },
      noBreak: {
        boys: 0.94,
        girls: 0.91,
      },
    },
  };
  return (
    <El>
      <svg width='100%' viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        <g transform='translate(0,0)'>
          <text
            fill='#000'
            fontSize={14}
            x={0}
            y={0}
            dy={10}
            fontWeight='bold'
          >
            Boys
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
          <g transform='translate(0,40)' opacity={selected === 2 ? 1 : 0}>
            <line
              x1={(svgWidth * data.host.noBreak.boys)}
              x2={(svgWidth * data.host.break.boys)}
              y1={0}
              y2={0}
              stroke='#55606E'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * data.host.noBreak.boys)},0)`}>
              <circle
                cx={0}
                cy={0}
                r={5}
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
                {data.host.noBreak.boys}
              </text>
              <text
                fill='#8502F5'
                fontSize={10}
                x={0}
                y={0}
                dy={4}
                dx={data.host.noBreak.boys > data.host.break.boys ? 7 : -7}
                textAnchor={data.host.noBreak.boys > data.host.break.boys ? 'start' : 'end'}
                fontWeight='bold'
              >
                No Breaks
              </text>
            </g>
            <g transform={`translate(${(svgWidth * data.host.break.boys)},0)`}>
              <circle
                cx={0}
                cy={0}
                r={5}
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
                {data.host.break.boys}
              </text>
              <text
                fill='#00C4A9'
                fontSize={10}
                x={0}
                y={0}
                dy={4}
                dx={data.host.noBreak.boys < data.host.break.boys ? 7 : -7}
                textAnchor={data.host.noBreak.boys < data.host.break.boys ? 'start' : 'end'}
                fontWeight='bold'
              >
                Break
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={selected === 1 ? 1 : 0}>
            <line
              x1={(svgWidth * data.idp.break.boys)}
              x2={(svgWidth * data.idp.noBreak.boys)}
              y1={0}
              y2={0}
              stroke='#D4D6D8'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * data.idp.noBreak.boys)},0)`}>
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
                {data.idp.noBreak.boys}
              </text>
              <text
                fill='#8502F5'
                fontSize={10}
                x={0}
                y={0}
                dy={4}
                dx={data.idp.noBreak.boys > data.idp.break.boys ? 7 : -7}
                textAnchor={data.idp.noBreak.boys > data.idp.break.boys ? 'start' : 'end'}
                fontWeight='bold'
              >
                No Breaks
              </text>
            </g>
            <g transform={`translate(${(svgWidth * data.idp.break.boys)},0)`}>
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
                {data.idp.break.boys}
              </text>
              <text
                fill='#00C4A9'
                fontSize={10}
                x={0}
                y={0}
                dy={4}
                dx={data.idp.noBreak.boys < data.idp.break.boys ? 7 : -7}
                textAnchor={data.idp.noBreak.boys < data.idp.break.boys ? 'start' : 'end'}
                fontWeight='bold'
              >
                Break
              </text>
            </g>
          </g>
        </g>
        <g transform='translate(0,70)'>
          <text
            fill='#000'
            fontSize={14}
            x={0}
            y={0}
            dy={10}
            fontWeight='bold'
          >
            Girls
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
          <g transform='translate(0,40)' opacity={selected === 2 ? 1 : 0}>
            <line
              x1={(svgWidth * data.host.noBreak.girls)}
              x2={(svgWidth * data.host.break.girls)}
              y1={0}
              y2={0}
              stroke='#55606E'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * data.host.noBreak.girls)},0)`}>
              <circle
                cx={0}
                cy={0}
                r={5}
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
                {data.host.noBreak.girls}
              </text>
              <text
                fill='#8502F5'
                fontSize={10}
                x={0}
                y={0}
                dy={4}
                dx={data.host.noBreak.girls > data.host.break.girls ? 7 : -7}
                textAnchor={data.host.noBreak.girls > data.host.break.girls ? 'start' : 'end'}
                fontWeight='bold'
              >
                No Breaks
              </text>
            </g>
            <g transform={`translate(${(svgWidth * data.host.break.girls)},0)`}>
              <circle
                cx={0}
                cy={0}
                r={5}
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
                {data.host.break.girls}
              </text>
              <text
                fill='#00C4A9'
                fontSize={10}
                x={0}
                y={0}
                dy={4}
                dx={data.host.noBreak.girls < data.host.break.girls ? 7 : -7}
                textAnchor={data.host.noBreak.girls < data.host.break.girls ? 'start' : 'end'}
                fontWeight='bold'
              >
                Break
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={selected === 1 ? 1 : 0}>
            <line
              x1={(svgWidth * data.idp.break.girls)}
              x2={(svgWidth * data.idp.noBreak.girls)}
              y1={0}
              y2={0}
              stroke='#D4D6D8'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * data.idp.noBreak.girls)},0)`}>
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
                {data.idp.noBreak.girls}
              </text>
              <text
                fill='#8502F5'
                fontSize={10}
                x={0}
                y={0}
                dy={4}
                dx={data.idp.noBreak.girls > data.idp.break.girls ? 7 : -7}
                textAnchor={data.idp.noBreak.girls > data.idp.break.girls ? 'start' : 'end'}
                fontWeight='bold'
              >
                No Breaks
              </text>
            </g>
            <g transform={`translate(${(svgWidth * data.idp.break.girls)},0)`}>
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
                {data.idp.break.girls}
              </text>
              <text
                fill='#00C4A9'
                fontSize={10}
                x={0}
                y={0}
                dy={4}
                dx={data.idp.noBreak.girls < data.idp.break.girls ? 7 : -7}
                textAnchor={data.idp.noBreak.girls < data.idp.break.girls ? 'start' : 'end'}
                fontWeight='bold'
              >
                Breaks
              </text>
            </g>
          </g>
        </g>
      </svg>
    </El>
  );
};
