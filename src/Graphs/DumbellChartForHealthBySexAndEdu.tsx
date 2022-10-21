import styled from 'styled-components';

const El = styled.div`
  width: 100%;
  margin: 1.25rem auto;
`;

export const DumbellChartForHealthBySexAndEdu = () => {
  const svgWidth = Math.min(window.innerWidth, 1280);
  const svgHeight = 190;
  const data = {
    host: {
      same: {
        all: 0.22,
      },
      worsened: {
        all: 0.35,
      },
    },
    idp: {
      same: {
        all: 0.17,
      },
      worsened: {
        all: 0.42,
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
            Health Care Access Stayed the Same or Improved
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
              x1={(svgWidth * data.host.same.all)}
              x2={(svgWidth * data.idp.same.all)}
              y1={0}
              y2={0}
              stroke='#55606E'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * data.host.same.all)},0)`}>
              <circle
                cx={0}
                cy={0}
                r={5}
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
                {data.host.same.all}
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
                Host
              </text>
            </g>
            <g transform={`translate(${(svgWidth * data.idp.same.all)},0)`}>
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
                {data.idp.same.all}
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
                IDP
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
            Health Care Access Worsened
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
              x1={(svgWidth * data.idp.worsened.all)}
              x2={(svgWidth * data.host.worsened.all)}
              y1={0}
              y2={0}
              stroke='#55606E'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * data.host.worsened.all)},0)`}>
              <circle
                cx={0}
                cy={0}
                r={5}
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
                {data.host.worsened.all}
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
                Host
              </text>
            </g>
            <g transform={`translate(${(svgWidth * data.idp.worsened.all)},0)`}>
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
                {data.idp.worsened.all}
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
                IDP
              </text>
            </g>
          </g>
        </g>
      </svg>
    </El>
  );
};
