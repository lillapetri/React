import React from "react";
import { SortableElement } from "react-sortable-hoc";
import { withStyles } from "@material-ui/styles";
import styles from './styles/DraggableColorBoxStyles';
import DeleteIcon from "@material-ui/icons/Delete";

const DraggableColorBox = SortableElement(props => {
  const { classes, handleClick, name, color } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div >
        <span> {name}</span>
        <DeleteIcon  onClick={handleClick} />
      </div>
    </div>
  );
});
export default withStyles(styles)(DraggableColorBox);