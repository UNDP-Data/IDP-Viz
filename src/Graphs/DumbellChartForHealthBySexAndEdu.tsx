import styled from 'styled-components';

interface Props {
  all: boolean;
  men: boolean;
  women: boolean;
}

const El = styled.div`
  width: 100%;
  margin: 1.25rem auto;
`;

export const DumbellChartForHealthBySexAndEdu = (props: Props) => {
  const {
    all,
    men,
    women,
  } = props;
  const svgWidth = Math.min(window.innerWidth, 1280);
  const svgHeight = 190;
  const data = {
    host: {
      same: {
        all: 0.12,
        men: 0.09,
        women: 0.13,
      },
      worsened: {
        all: 0.39,
        men: 0.35,
        women: 0.43,
      },
    },
    idp: {
      same: {
        all: 0.24,
        men: 0.22,
        women: 0.26,
      },
      worsened: {
        all: 0.5,
        men: 0.49,
        women: 0.51,
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
          <g transform='translate(0,40)' opacity={all ? 1 : 0}>
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
            </g>
          </g>
          <g transform='translate(0,40)' opacity={women ? 1 : 0}>
            <line
              x1={(svgWidth * data.host.same.women)}
              x2={(svgWidth * data.idp.same.women)}
              y1={0}
              y2={0}
              stroke='#8502F5'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * data.host.same.women)},0)`}>
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
                {data.host.same.women}
              </text>
            </g>
            <g transform={`translate(${(svgWidth * data.idp.same.women)},0)`}>
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
                {data.idp.same.women}
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={men ? 1 : 0}>
            <line
              x1={(svgWidth * data.host.same.men)}
              x2={(svgWidth * data.idp.same.men)}
              y1={0}
              y2={0}
              stroke='#00C4A9'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * data.host.same.men)},0)`}>
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
                {data.host.same.men}
              </text>
            </g>
            <g transform={`translate(${(svgWidth * data.idp.same.men)},0)`}>
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
                {data.idp.same.men}
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
          <g transform='translate(0,40)' opacity={all ? 1 : 0}>
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
            </g>
          </g>
          <g transform='translate(0,40)' opacity={women ? 1 : 0}>
            <line
              x1={(svgWidth * data.host.worsened.women)}
              x2={(svgWidth * data.idp.worsened.women)}
              y1={0}
              y2={0}
              stroke='#8502F5'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * data.host.worsened.women)},0)`}>
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
                {data.host.worsened.women}
              </text>
            </g>
            <g transform={`translate(${(svgWidth * data.idp.worsened.women)},0)`}>
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
                {data.idp.worsened.women}
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={men ? 1 : 0}>
            <line
              x1={(svgWidth * data.host.worsened.men)}
              x2={(svgWidth * data.idp.worsened.men)}
              y1={0}
              y2={0}
              stroke='#00C4A9'
              strokeWidth={1}
              opacity={1}
            />
            <g transform={`translate(${(svgWidth * data.host.worsened.men)},0)`}>
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
                {data.host.worsened.men}
              </text>
            </g>
            <g transform={`translate(${(svgWidth * data.idp.worsened.men)},0)`}>
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
                {data.idp.worsened.men}
              </text>
            </g>
          </g>
        </g>
      </svg>
    </El>
  );
};
