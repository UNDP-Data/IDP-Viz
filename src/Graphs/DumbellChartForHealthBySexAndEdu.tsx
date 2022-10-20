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
    idp: {
      same: {
        all: 0.15,
        men: 0.12,
        women: 0.18,
      },
      worsened: {
        all: 0.28,
        men: 0.25,
        women: 0.3,
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
          <g transform='translate(0,40)' opacity={women ? 1 : 0}>
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
              <text
                fill='#8502F5'
                fontSize={10}
                x={0}
                y={0}
                dy={15}
                textAnchor='middle'
                fontWeight='bold'
              >
                IDP W
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={men ? 1 : 0}>
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
              <text
                fill='#00C4A9'
                fontSize={10}
                x={0}
                y={0}
                dy={15}
                textAnchor='middle'
                fontWeight='bold'
              >
                IDP M
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
          <g transform='translate(0,40)' opacity={women ? 1 : 0}>
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
              <text
                fill='#8502F5'
                fontSize={10}
                x={0}
                y={0}
                dy={15}
                textAnchor='middle'
                fontWeight='bold'
              >
                IDP W
              </text>
            </g>
          </g>
          <g transform='translate(0,40)' opacity={men ? 1 : 0}>
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
              <text
                fill='#00C4A9'
                fontSize={10}
                x={0}
                y={0}
                dy={15}
                textAnchor='middle'
                fontWeight='bold'
              >
                IDP M
              </text>
            </g>
          </g>
        </g>
      </svg>
    </El>
  );
};
