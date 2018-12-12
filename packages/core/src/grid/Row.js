import styled from 'styled-components';
import PropTypes from 'prop-types';
import Col from './Col';
import { pxToNumber } from '../utils/index';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  ${Col}{
    padding-left:${ p => pxToNumber(p.gutter) / 2}px;
    padding-right:${ p => pxToNumber(p.gutter) / 2}px
  }
`;

Row.displayName = 'Row';
Row.propTypes = {
  children: PropTypes.node,
  gutter: PropTypes.string,
  className: PropTypes.string
}
Row.defaultProps = {
  gutter: '0'
}
export default Row