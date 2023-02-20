import { BsArrowUpCircleFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Button } from './TopButton.styled';

export const TopButton = ({ onClick, ...allProps }) => (
  <Button type="button" onClick={onClick} {...allProps}>
    <BsArrowUpCircleFill size={48} />
  </Button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  'aria-label': PropTypes.string.isRequired,
};
