import  styled from 'styled-components';
import PropTypes from 'prop-types';

const Col = styled.div`
  flex-grow:0;
  flex-shrink:1;
  flex-basis: ${ p =>  (p.span/24)*100+'%'};
  margin-left: ${ p => (p.offset/24)*100 + "%"}
`;


Col.displayName = 'Col';
Col.propTypes = {
  children:PropTypes.node,
  span: PropTypes.number,
	offset: PropTypes.number,
	className: PropTypes.string,
}
Col.defaultProps = {
  span:0,
  offset:0
}

export default Col